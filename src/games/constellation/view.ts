import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { HalftoneCloud } from '../../render/halftone';
import { generateBoard, coherence, type Board, type CloudPoint } from './generate.ts';
import { CONSTELLATION_GLYPHS, type Glyph } from '../../glyphs/bank.ts';
import { type Vec3, dot, sub, scale, normalize } from '../../math/vec3.ts';
import type { Difficulty } from '../../engine/session.ts';

// Renders a generated CONSTELLATION board and drives the Phase-1 "find the
// angle" feel: as the view direction nears a lock's hidden axis, that lock's
// SIGNAL points contract toward the glyph plane (depth removed) and the glyph
// resolves out of the noise. Pure demo/harness for now — no extraction, no
// sweep, no win/lose yet.

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
  glyph: Glyph;
  /** indices into board.points, in glyph-cell order */
  signalIdx: number[];
  /** this lock's signal points (base positions) for coherence() */
  signalPts: CloudPoint[];
  /** flattened (depth-removed) target position per signal index */
  flat: Map<number, Vec3>;
  coherence: number;
}

export interface Mounted {
  regenerate(difficulty: Difficulty, seed: string): void;
  dispose(): void;
}

export function mountConstellation(
  canvas: HTMLCanvasElement,
  initial: { difficulty: Difficulty; seed: string },
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

  // readout (dev HUD — will be replaced by diegetic meter later)
  const readout = document.createElement('div');
  readout.id = 'cx-readout';
  readout.style.cssText = [
    'position:fixed',
    'top:10px',
    'left:12px',
    'font:12px/1.5 ui-monospace,Menlo,monospace',
    'color:#8a8',
    'pointer-events:none',
    'white-space:pre',
    'text-shadow:0 0 4px #000',
  ].join(';');
  document.body.appendChild(readout);

  let board!: Board;
  let base!: Float32Array; // scattered positions
  let live!: Float32Array; // per-frame positions (signal lerped)
  let cloud: HalftoneCloud | null = null;
  let lockViews: LockView[] = [];

  function build(difficulty: Difficulty, seed: string): void {
    board = generateBoard(difficulty, seed);
    const n = board.points.length;
    base = new Float32Array(n * 3);
    board.points.forEach((p, i) => {
      base[i * 3] = p.pos[0];
      base[i * 3 + 1] = p.pos[1];
      base[i * 3 + 2] = p.pos[2];
    });
    live = base.slice();

    lockViews = board.locks.map((lock) => {
      const signalIdx: number[] = [];
      const signalPts: CloudPoint[] = [];
      const flat = new Map<number, Vec3>();
      board.points.forEach((pt, i) => {
        if (pt.pop === 'SIGNAL' && pt.lock === lock.index) {
          signalIdx.push(i);
          signalPts.push(pt);
          const d = dot(pt.pos, lock.axis);
          flat.set(i, sub(pt.pos, scale(lock.axis, d))); // project onto glyph plane
        }
      });
      return { axis: lock.axis, glyph: glyphByName(lock.glyph), signalIdx, signalPts, flat, coherence: 0 };
    });

    if (cloud) {
      scene.remove(cloud.points);
      cloud.dispose();
    }
    cloud = new HalftoneCloud(live, {
      radius: 1,
      sizeNear: 6,
      sizeFar: 2.5,
      inkNear: 0.98,
      inkFar: 0.16,
      pixelRatio: renderer.getPixelRatio(),
    });
    scene.add(cloud.points);
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

  let raf = 0;
  function loop(): void {
    controls.update();

    // sighting vector = direction from focus to eye
    const cp = camera.position;
    const viewDir = normalize([cp.x - target.x, cp.y - target.y, cp.z - target.z]);

    let best = 0;
    let bestLock = -1;
    lockViews.forEach((lv, i) => {
      lv.coherence = coherence(lv.signalPts, lv.glyph, viewDir);
      if (lv.coherence > best) {
        best = lv.coherence;
        bestLock = i;
      }
    });

    // contract each lock's signal toward its glyph plane by eased coherence
    live.set(base);
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
      }
    }
    cloud!.updatePositions(live);
    cloud!.sync(camera, controls.target, renderer.getPixelRatio());

    const pct = Math.round(best * 100);
    const bar = '█'.repeat(Math.round(best * 16)).padEnd(16, '·');
    const locked = best > 0.9 && bestLock >= 0 ? `  ✦ ${lockViews[bestLock]!.glyph.name}` : '';
    readout.textContent =
      `CONSTELLATION  seed:${board.seed}  D${board.difficulty}  locks:${board.locks.length}\n` +
      `coherence [${bar}] ${pct}%${locked}\n` +
      `drag to orbit · scroll zoom · R reseed · ${board.locks.length} glyph(s) hidden`;

    renderer.render(scene, camera);
    raf = requestAnimationFrame(loop);
  }
  loop();

  return {
    regenerate(difficulty: Difficulty, seed: string) {
      build(difficulty, seed);
    },
    dispose() {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      controls.dispose();
      cloud?.dispose();
      readout.remove();
      renderer.dispose();
    },
  };
}
