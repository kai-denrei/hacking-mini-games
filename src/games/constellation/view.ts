import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { HalftoneCloud } from '../../render/halftone';
import { generateBoard, coherence, TIERS, type Board, type CloudPoint } from './generate.ts';
import { CONSTELLATION_GLYPHS, type Glyph } from '../../glyphs/bank.ts';
import { type Vec3, dot, sub, scale, normalize, angleDeg } from '../../math/vec3.ts';
import type { Difficulty, Skill } from '../../engine/session.ts';

// CONSTELLATION Phase 1 — "find the angle". Renders a generated board and, as
// the view nears a lock's hidden axis: (1) that lock's SIGNAL contracts toward
// the glyph plane, (2) those points brighten (emphasis), (3) within θ_lock the
// view soft-snaps to exact alignment (magnetic assist, with hysteresis so it
// doesn't flicker at the boundary). A diegetic dotted-arc meter shows coherence
// (SKILL >= 1). No extraction / sweep / scoring yet.

const smoothstep = (a: number, b: number, x: number): number => {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

const glyphByName = (name: string): Glyph => {
  const g = CONSTELLATION_GLYPHS.find((x) => x.name === name);
  if (!g) throw new Error(`glyph ${name} not found`);
  return g;
};

interface LockView {
  axis: Vec3;
  axisV3: THREE.Vector3;
  glyph: Glyph;
  signalIdx: number[];
  signalPts: CloudPoint[];
  flat: Map<number, Vec3>;
  coherence: number;
}

export interface Mounted {
  regenerate(difficulty: Difficulty, seed: string): void;
  /** Snap the camera to a lock's axis (test/debug helper). */
  alignLock(index: number): void;
  dispose(): void;
}

const ARC_DOTS = 30;

export function mountConstellation(
  canvas: HTMLCanvasElement,
  initial: { difficulty: Difficulty; seed: string; skill: Skill },
): Mounted {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x08080d, 1);

  const scene = new THREE.Scene();
  const target = new THREE.Vector3(0, 0, 0);

  const FRUSTUM_HALF = 1.35;
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 100);
  camera.position.set(0, 0, 4);
  camera.lookAt(target);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.target.copy(target);

  let dragging = false;
  controls.addEventListener('start', () => {
    dragging = true;
  });
  controls.addEventListener('end', () => {
    dragging = false;
  });

  // ── diegetic dotted-arc coherence meter (SKILL >= 1) + minimal hint ─────────
  const NS = 'http://www.w3.org/2000/svg';
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 220 130');
  svg.style.cssText =
    'position:fixed;left:50%;bottom:14px;transform:translateX(-50%);width:220px;height:130px;pointer-events:none';
  const arcDots: SVGCircleElement[] = [];
  const cx = 110;
  const cy = 120;
  const R = 96;
  for (let i = 0; i < ARC_DOTS; i++) {
    const a = Math.PI * (1 - i / (ARC_DOTS - 1)); // π (left) → 0 (right)
    const c = document.createElementNS(NS, 'circle');
    c.setAttribute('cx', String(cx + R * Math.cos(a)));
    c.setAttribute('cy', String(cy - R * Math.sin(a)));
    c.setAttribute('r', '2.6');
    c.setAttribute('fill', '#2a2a34');
    svg.appendChild(c);
    arcDots.push(c);
  }
  const glyphLabel = document.createElementNS(NS, 'text');
  glyphLabel.setAttribute('x', String(cx));
  glyphLabel.setAttribute('y', String(cy - 8));
  glyphLabel.setAttribute('text-anchor', 'middle');
  glyphLabel.setAttribute('fill', '#e8c06a');
  glyphLabel.setAttribute(
    'style',
    'font:11px ui-monospace,Menlo,monospace;letter-spacing:.15em;opacity:0',
  );
  svg.appendChild(glyphLabel);
  if (initial.skill >= 1) document.body.appendChild(svg);

  const hint = document.createElement('div');
  hint.style.cssText =
    'position:fixed;left:12px;bottom:12px;font:11px ui-monospace,Menlo,monospace;color:#55555f;pointer-events:none';
  document.body.appendChild(hint);

  let board!: Board;
  let base!: Float32Array;
  let live!: Float32Array;
  let emph!: Float32Array;
  let cloud: HalftoneCloud | null = null;
  let lockViews: LockView[] = [];
  let thetaLock = 5;
  let engaged = false; // soft-snap state (declared before build(), which resets it)

  function build(difficulty: Difficulty, seed: string): void {
    board = generateBoard(difficulty, seed);
    thetaLock = TIERS[difficulty].thetaLockDeg;
    const n = board.points.length;
    base = new Float32Array(n * 3);
    board.points.forEach((p, i) => {
      base[i * 3] = p.pos[0];
      base[i * 3 + 1] = p.pos[1];
      base[i * 3 + 2] = p.pos[2];
    });
    live = base.slice();
    emph = new Float32Array(n);

    lockViews = board.locks.map((lock) => {
      const signalIdx: number[] = [];
      const signalPts: CloudPoint[] = [];
      const flat = new Map<number, Vec3>();
      board.points.forEach((pt, i) => {
        if (pt.pop === 'SIGNAL' && pt.lock === lock.index) {
          signalIdx.push(i);
          signalPts.push(pt);
          const d = dot(pt.pos, lock.axis);
          flat.set(i, sub(pt.pos, scale(lock.axis, d)));
        }
      });
      return {
        axis: lock.axis,
        axisV3: new THREE.Vector3(lock.axis[0], lock.axis[1], lock.axis[2]),
        glyph: glyphByName(lock.glyph),
        signalIdx,
        signalPts,
        flat,
        coherence: 0,
      };
    });

    if (cloud) {
      scene.remove(cloud.points);
      cloud.dispose();
    }
    cloud = new HalftoneCloud(live, {
      radius: 1,
      sizeNear: 6,
      sizeFar: 2.5,
      inkNear: 0.9,
      inkFar: 0.14,
      emphasisGain: 0.85,
      pixelRatio: renderer.getPixelRatio(),
    });
    scene.add(cloud.points);

    hint.textContent = `D${difficulty} · ${seed} · ${board.locks.length} glyph(s) · drag · scroll · R`;
    engaged = false;
  }

  build(initial.difficulty, initial.seed);

  function resize(): void {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h);
    const aspect = w / h;
    camera.left = -FRUSTUM_HALF * aspect;
    camera.right = FRUSTUM_HALF * aspect;
    camera.top = FRUSTUM_HALF;
    camera.bottom = -FRUSTUM_HALF;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  // soft-snap scratch (hysteresis: engage inside θ_lock, release past 1.6×)
  const tmpDir = new THREE.Vector3();
  const qStep = new THREE.Quaternion();
  const qTo = new THREE.Quaternion();
  const qId = new THREE.Quaternion();

  let raf = 0;
  function loop(): void {
    controls.update();

    const cp = camera.position;
    const viewDir = normalize([cp.x - target.x, cp.y - target.y, cp.z - target.z]);

    let best = 0;
    let bestLock = -1;
    let nearestAngle = 180;
    lockViews.forEach((lv, i) => {
      lv.coherence = coherence(lv.signalPts, lv.glyph, viewDir);
      if (lv.coherence > best) {
        best = lv.coherence;
        bestLock = i;
      }
      const ang = angleDeg(viewDir, lv.axis);
      if (ang < nearestAngle) nearestAngle = ang;
    });

    // contraction + emphasis
    live.set(base);
    emph.fill(0);
    for (const lv of lockViews) {
      const ease = smoothstep(0.12, 0.9, lv.coherence);
      if (ease <= 0.001) continue;
      for (const i of lv.signalIdx) {
        const f = lv.flat.get(i)!;
        const bx = base[i * 3]!;
        const by = base[i * 3 + 1]!;
        const bz = base[i * 3 + 2]!;
        live[i * 3] = bx + (f[0] - bx) * ease;
        live[i * 3 + 1] = by + (f[1] - by) * ease;
        live[i * 3 + 2] = bz + (f[2] - bz) * ease;
        emph[i] = ease;
      }
    }
    cloud!.updatePositions(live);
    cloud!.updateEmphasis(emph);
    cloud!.sync(camera, controls.target, renderer.getPixelRatio());

    // soft-snap (magnetic assist) toward the nearest axis, hands-off only
    if (!engaged && nearestAngle < thetaLock && !dragging) engaged = true;
    else if (engaged && (nearestAngle > thetaLock * 1.6 || dragging)) engaged = false;
    if (engaged && !dragging && bestLock >= 0) {
      const dist = camera.position.distanceTo(target);
      tmpDir.set(viewDir[0], viewDir[1], viewDir[2]);
      qTo.setFromUnitVectors(tmpDir, lockViews[bestLock]!.axisV3);
      qStep.copy(qId).slerp(qTo, 0.18); // fraction of the way this frame
      tmpDir.applyQuaternion(qStep);
      camera.position.copy(target).addScaledVector(tmpDir, dist);
    }

    // meter
    if (initial.skill >= 1) {
      const lit = Math.round(best * ARC_DOTS);
      for (let i = 0; i < ARC_DOTS; i++) {
        arcDots[i]!.setAttribute('fill', i < lit ? (engaged ? '#e8c06a' : '#5dcaa5') : '#2a2a34');
      }
      if (engaged && bestLock >= 0) {
        glyphLabel.textContent = `⟡ ${lockViews[bestLock]!.glyph.name}`;
        glyphLabel.style.opacity = '1';
      } else {
        glyphLabel.style.opacity = '0';
      }
    }

    renderer.render(scene, camera);
    raf = requestAnimationFrame(loop);
  }
  loop();

  return {
    regenerate(difficulty: Difficulty, seed: string) {
      build(difficulty, seed);
    },
    alignLock(index: number) {
      const lv = lockViews[index];
      if (!lv) return;
      const dist = camera.position.distanceTo(target);
      camera.position.copy(target).addScaledVector(lv.axisV3, dist);
      controls.update();
    },
    dispose() {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      controls.dispose();
      cloud?.dispose();
      svg.remove();
      hint.remove();
      renderer.dispose();
    },
  };
}
