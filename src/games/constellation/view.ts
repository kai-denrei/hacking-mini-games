import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { HalftoneCloud } from '../../render/halftone';
import { generateBoard, coherence, TIERS, type Board, type CloudPoint } from './generate.ts';
import { ConstellationGame } from './game.ts';
import { CONSTELLATION_GLYPHS, type Glyph } from '../../glyphs/bank.ts';
import {
  type Vec3,
  dot,
  sub,
  scale,
  normalize,
  angleDeg,
  rotateAroundAxis,
  randDir,
} from '../../math/vec3.ts';
import { makeRng, type RNG } from '../../engine/rng.ts';
import type { Difficulty, Skill } from '../../engine/session.ts';

// CONSTELLATION — Phase 1 (find the angle) + Phase 2 (extract). Orbit to align;
// when a lock resolves, click its glyph points to extract them. Avoid TRIP
// hazards, beat the sweep + timer. See game.ts for the rules.

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
  alignLock(index: number): void;
  /** test/debug: extract `count` signal points of lock `l`. */
  debugExtract(l: number, count: number): void;
  /** test/debug: extract everything → WON. */
  debugSolve(): void;
  /** test/debug: force the timer to a fraction of T_run (and enter RUN). */
  debugTime(frac: number): void;
  dispose(): void;
}

const ARC_DOTS = 30;

const TEAL = [93, 202, 165];
const AMBER = [224, 176, 112];
const RED = [208, 96, 90];
const mix3 = (a: number[], b: number[], t: number): string =>
  `rgb(${Math.round(a[0]! + (b[0]! - a[0]!) * t)},${Math.round(a[1]! + (b[1]! - a[1]!) * t)},${Math.round(a[2]! + (b[2]! - a[2]!) * t)})`;
// time colour: teal (full) → amber (half) → red (empty)
const timerColor = (f: number): string =>
  f > 0.5 ? mix3(TEAL, AMBER, (1 - f) / 0.5) : mix3(AMBER, RED, Math.max(0, (0.5 - f) / 0.5));

export function mountConstellation(
  canvas: HTMLCanvasElement,
  initial: { difficulty: Difficulty; seed: string; skill: Skill },
): Mounted {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x08080d, 1);

  const scene = new THREE.Scene();
  const target = new THREE.Vector3(0, 0, 0);

  const FRUSTUM_HALF = 1.12;
  const FLASH_DUR = 0.7;
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 100);
  camera.position.set(0, 0, 4);
  camera.lookAt(target);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.target.copy(target);

  const raycaster = new THREE.Raycaster();
  raycaster.params.Points!.threshold = 0.1; // generous; magnetism below picks the right target

  // ── overlay DOM ─────────────────────────────────────────────────────────
  const NS = 'http://www.w3.org/2000/svg';
  const el = (tag: string, css: string): HTMLElement => {
    const e = document.createElement(tag);
    e.style.cssText = css;
    document.body.appendChild(e);
    return e;
  };
  const mono = 'ui-monospace,SFMono-Regular,Menlo,monospace';

  // coherence arc (SKILL >= 1)
  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 220 130');
  svg.style.cssText =
    'position:fixed;left:50%;bottom:14px;transform:translateX(-50%);width:220px;height:130px;pointer-events:none';
  const arcDots: SVGCircleElement[] = [];
  for (let i = 0; i < ARC_DOTS; i++) {
    const a = Math.PI * (1 - i / (ARC_DOTS - 1));
    const c = document.createElementNS(NS, 'circle');
    c.setAttribute('cx', String(110 + 96 * Math.cos(a)));
    c.setAttribute('cy', String(120 - 96 * Math.sin(a)));
    c.setAttribute('r', '2.6');
    c.setAttribute('fill', '#2a2a34');
    svg.appendChild(c);
    arcDots.push(c);
  }
  const glyphLabel = document.createElementNS(NS, 'text');
  glyphLabel.setAttribute('x', '110');
  glyphLabel.setAttribute('y', '112');
  glyphLabel.setAttribute('text-anchor', 'middle');
  glyphLabel.setAttribute('fill', '#e8c06a');
  glyphLabel.setAttribute('style', `font:11px ${mono};letter-spacing:.15em;opacity:0`);
  svg.appendChild(glyphLabel);
  if (initial.skill >= 1) document.body.appendChild(svg);

  // timer (top center) — a disc that shrinks and shifts colour as time runs down
  const timerSvg = document.createElementNS(NS, 'svg');
  timerSvg.setAttribute('viewBox', '0 0 48 48');
  timerSvg.style.cssText =
    'position:fixed;left:50%;top:10px;transform:translateX(-50%);width:46px;height:46px;pointer-events:none';
  const timerRing = document.createElementNS(NS, 'circle');
  for (const [k, v] of [['cx', '24'], ['cy', '24'], ['r', '21'], ['fill', 'none'], ['stroke', '#20202a'], ['stroke-width', '1']] as const)
    timerRing.setAttribute(k, v);
  const timerDisc = document.createElementNS(NS, 'circle');
  timerDisc.setAttribute('cx', '24');
  timerDisc.setAttribute('cy', '24');
  timerDisc.setAttribute('r', '21');
  timerDisc.setAttribute('fill', timerColor(1));
  timerSvg.appendChild(timerRing);
  timerSvg.appendChild(timerDisc);
  document.body.appendChild(timerSvg);

  // strikes (top right)
  const strikes = el(
    'div',
    `position:fixed;top:10px;right:12px;display:flex;gap:6px;font:13px ${mono};color:#5a5a64;pointer-events:none`,
  );
  const pips: HTMLElement[] = [0, 1, 2].map(() => {
    const p = document.createElement('span');
    p.textContent = '✕';
    strikes.appendChild(p);
    return p;
  });

  const progress = el(
    'div',
    `position:fixed;left:50%;top:30px;transform:translateX(-50%);font:11px ${mono};color:#8fd0b6;pointer-events:none;opacity:0`,
  );
  const hint = el(
    'div',
    `position:fixed;left:12px;bottom:12px;font:11px ${mono};color:#55555f;pointer-events:none`,
  );
  const reticle = el(
    'div',
    'position:fixed;width:16px;height:16px;border:1px solid #6fe0b8;border-radius:50%;transform:translate(-50%,-50%);pointer-events:none;opacity:0;transition:opacity .1s',
  );
  const vignette = el(
    'div',
    'position:fixed;inset:0;pointer-events:none;box-shadow:inset 0 0 120px 20px #d0403a;opacity:0;transition:opacity .3s',
  );
  const overlay = el(
    'div',
    `position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(8,8,13,.55);font:${mono};text-align:center;pointer-events:none`,
  );

  let board!: Board;
  let base!: Float32Array;
  let live!: Float32Array;
  let emph!: Float32Array;
  let picked!: Float32Array;
  let isSignal!: Uint8Array;
  let popT!: Float32Array; // timestamp (s) of a point's extract-pop, 0 = none
  let cloud: HalftoneCloud | null = null;
  let lockViews: LockView[] = [];
  let thetaLock = 5;
  let game!: ConstellationGame;
  let driftRng: RNG = makeRng('drift');
  let engaged = false;
  let prevEngaged = false;
  let flashStart = -1e9;

  function build(difficulty: Difficulty, seed: string): void {
    board = generateBoard(difficulty, seed);
    game = new ConstellationGame(board);
    driftRng = makeRng(`${seed}:drift`);
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
    picked = new Float32Array(n);
    isSignal = new Uint8Array(n);
    popT = new Float32Array(n);

    lockViews = board.locks.map((lock) => {
      const signalIdx: number[] = [];
      const signalPts: CloudPoint[] = [];
      const flat = new Map<number, Vec3>();
      board.points.forEach((pt, i) => {
        if (pt.pop === 'SIGNAL' && pt.lock === lock.index) {
          signalIdx.push(i);
          signalPts.push(pt);
          isSignal[i] = 1;
          flat.set(i, sub(pt.pos, scale(lock.axis, dot(pt.pos, lock.axis))));
        }
      });
      return {
        axis: lock.axis,
        axisV3: new THREE.Vector3(...lock.axis),
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

    hint.textContent = `D${difficulty} · ${seed} · ${board.locks.length} lock(s) · drag to orbit · click to extract · R`;
    overlay.style.display = 'none';
    engaged = false;
    prevEngaged = false;
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

  // rotate a whole lock (points + axis) by a small drift each sweep (D4+)
  function driftLock(l: number): void {
    const lv = lockViews[l];
    if (!lv) return;
    const ang = (2 * Math.PI) / 180 * driftRng();
    const ax = randDir(driftRng);
    lv.axis = normalize(rotateAroundAxis(lv.axis, ax, ang));
    lv.axisV3.set(...lv.axis);
    board.points.forEach((pt, i) => {
      if (pt.lock !== l) return;
      pt.pos = rotateAroundAxis(pt.pos, ax, ang);
      base[i * 3] = pt.pos[0];
      base[i * 3 + 1] = pt.pos[1];
      base[i * 3 + 2] = pt.pos[2];
    });
    lv.flat.clear();
    for (const i of lv.signalIdx) {
      const p = board.points[i]!.pos;
      lv.flat.set(i, sub(p, scale(lv.axis, dot(p, lv.axis))));
    }
  }

  // ── input: click-to-extract (small pointer move) vs drag-to-orbit ─────────
  let downX = 0;
  let downY = 0;
  let mouseX = -1;
  let mouseY = -1;
  const ndc = (x: number, y: number): [number, number] => {
    const r = canvas.getBoundingClientRect();
    return [((x - r.left) / r.width) * 2 - 1, -((y - r.top) / r.height) * 2 + 1];
  };
  function pickIndex(x: number, y: number): number {
    if (!cloud) return -1;
    const [nx, ny] = ndc(x, y);
    raycaster.setFromCamera(new THREE.Vector2(nx, ny), camera);
    const hits = raycaster.intersectObject(cloud.points, false);
    if (!hits.length) return -1;
    hits.sort((a, b) => (a.distanceToRay ?? 9) - (b.distanceToRay ?? 9));
    // magnet: prefer the nearest un-extracted signal of the focus lock, so aiming
    // near the glyph reliably grabs a glyph point. A TRIP is only picked when no
    // such signal is near the cursor (you have to aim at the hazard to hit it).
    for (const h of hits) {
      const i = h.index;
      if (i == null) continue;
      const p = board.points[i];
      if (p && p.pop === 'SIGNAL' && p.lock === bestLock && !game.extracted[bestLock]?.has(i)) return i;
    }
    return hits[0]!.index ?? -1;
  }
  let bestLock = -1;
  canvas.addEventListener('pointerdown', (e) => {
    downX = e.clientX;
    downY = e.clientY;
  });
  canvas.addEventListener('pointermove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
  canvas.addEventListener('pointerup', (e) => {
    const moved = Math.hypot(e.clientX - downX, e.clientY - downY);
    if (moved > 5 || !engaged || game.over || bestLock < 0) return; // a drag, or not aligned
    const idx = pickIndex(e.clientX, e.clientY);
    if (idx < 0) return;
    const outcome = game.select(idx, bestLock);
    if (outcome === 'extract' || outcome === 'lockDone' || outcome === 'won') {
      popT[idx] = performance.now() / 1000;
    } else if (outcome === 'trip') {
      vignette.style.opacity = '0.9';
      setTimeout(() => (vignette.style.opacity = '0'), 60);
    }
  });

  // soft-snap scratch
  const tmpDir = new THREE.Vector3();
  const qStep = new THREE.Quaternion();
  const qTo = new THREE.Quaternion();
  const qId = new THREE.Quaternion();
  const rProj = new THREE.Vector3();

  function showOverlay(): void {
    const r = game.result();
    let color = '#8fd0b6';
    let title = '';
    let sub = '';
    if (game.phase === 'WON') {
      color = '#8fd0b6';
      title = '◆ EXTRACTED';
      sub = `keys: ${r.keys.join(' · ')}\nmargin ${r.margin.toFixed(0)} · ${r.trips} strike(s)`;
    } else if (game.phase === 'LOST_CRIT') {
      color = '#d0605a';
      title = '⚠ ALARM';
      sub = 'intrusion traced — three tripwires';
    } else {
      color = '#e0b070';
      title = '⌛ SIGNAL LOST';
      sub = 'the run timed out';
    }
    overlay.innerHTML =
      `<div style="font-size:22px;letter-spacing:.2em;color:${color}">${title}</div>` +
      `<div style="font-size:12px;color:#9a9aa6;white-space:pre-line">${sub}</div>` +
      `<div style="font-size:11px;color:#55555f;margin-top:8px">press R to run again</div>`;
    overlay.style.display = 'flex';
  }

  let lastT = performance.now();
  let raf = 0;
  function loop(): void {
    const now = performance.now();
    const nowSec = now / 1000;
    const dt = Math.min(0.05, (now - lastT) / 1000);
    lastT = now;

    controls.update();
    const cp = camera.position;
    const viewDir = normalize([cp.x - target.x, cp.y - target.y, cp.z - target.z]);

    let best = 0;
    bestLock = -1;
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

    // contraction + emphasis; dim noise as a lock forms
    live.set(base);
    emph.fill(0);
    let globalLock = 0;
    for (const lv of lockViews) {
      const ease = smoothstep(0.12, 0.9, lv.coherence);
      if (ease > globalLock) globalLock = ease;
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
    if (globalLock > 0.001) {
      const suppress = 0.85 * globalLock;
      for (let i = 0; i < emph.length; i++) if (!isSignal[i]) emph[i] = -suppress;
    }

    // game tick (timer, sweep, wipe) — aligned gates extraction
    const aligned = engaged && best > 0.6;
    const { wrapped } = game.tick(dt, aligned, bestLock);
    if (wrapped && game.drift && bestLock >= 0) driftLock(bestLock);

    // sweep scan-line glow (RUN only)
    if (game.phase === 'RUN' && game.tSweep) {
      const sweepY = -1 + 2 * game.sweepT;
      const band = 0.14;
      for (let i = 0; i < emph.length; i++) {
        const dy = Math.abs(live[i * 3 + 1]! - sweepY);
        if (dy < band) emph[i] = emph[i]! + (1 - dy / band) * 0.7;
      }
    }

    // extract pop — brief bloom on freshly extracted points
    for (let i = 0; i < popT.length; i++) {
      const t0 = popT[i]!;
      if (t0 > 0) {
        const e = 1 - (nowSec - t0) / 0.3;
        if (e > 0) emph[i] = emph[i]! + e * 0.9;
        else popT[i] = 0;
      }
    }

    // hover highlight + reticle (snaps onto the target point; red over a hazard)
    if (engaged && !game.over && mouseX >= 0) {
      const hoverIdx = pickIndex(mouseX, mouseY);
      const rect = canvas.getBoundingClientRect();
      if (hoverIdx >= 0) {
        emph[hoverIdx] = emph[hoverIdx]! + 0.5;
        rProj.set(live[hoverIdx * 3]!, live[hoverIdx * 3 + 1]!, live[hoverIdx * 3 + 2]!).project(camera);
        reticle.style.left = `${rect.left + (rProj.x * 0.5 + 0.5) * rect.width}px`;
        reticle.style.top = `${rect.top + (-rProj.y * 0.5 + 0.5) * rect.height}px`;
        reticle.style.borderColor = board.points[hoverIdx]?.pop === 'TRIP' ? '#d0605a' : '#6fe0b8';
      } else {
        reticle.style.left = `${mouseX}px`;
        reticle.style.top = `${mouseY}px`;
        reticle.style.borderColor = '#44444c';
      }
      reticle.style.opacity = '1';
    } else {
      reticle.style.opacity = '0';
    }

    // picked (extracted) points
    picked.fill(0);
    for (const set of game.extracted) for (const i of set) picked[i] = 1;

    cloud!.updatePositions(live);
    cloud!.updateEmphasis(emph);
    cloud!.updatePicked(picked);
    cloud!.sync(camera, controls.target, renderer.getPixelRatio());

    // soft-snap (hands-off)
    if (!engaged && nearestAngle < thetaLock && !game.over) engaged = true;
    else if (engaged && nearestAngle > thetaLock * 1.6) engaged = false;
    if (engaged && bestLock >= 0) {
      const dist = camera.position.distanceTo(target);
      tmpDir.set(viewDir[0], viewDir[1], viewDir[2]);
      qTo.setFromUnitVectors(tmpDir, lockViews[bestLock]!.axisV3);
      qStep.copy(qId).slerp(qTo, 0.16);
      tmpDir.applyQuaternion(qStep);
      camera.position.copy(target).addScaledVector(tmpDir, dist);
    }

    // found-shine
    if (engaged && !prevEngaged) flashStart = nowSec;
    prevEngaged = engaged;
    cloud!.setFlash(Math.max(0, 1 - (nowSec - flashStart) / FLASH_DUR));

    // ── HUD ────────────────────────────────────────────────────────────────
    if (initial.skill >= 1) {
      const lit = Math.round(best * ARC_DOTS);
      for (let i = 0; i < ARC_DOTS; i++)
        arcDots[i]!.setAttribute('fill', i < lit ? (engaged ? '#e8c06a' : '#5dcaa5') : '#2a2a34');
      if (engaged && bestLock >= 0) {
        glyphLabel.textContent = `⟡ ${lockViews[bestLock]!.glyph.name}`;
        glyphLabel.style.opacity = '1';
      } else glyphLabel.style.opacity = '0';
    }

    const frac = Math.max(0, game.timeLeft / game.tRun);
    timerDisc.setAttribute('r', String(2 + 19 * frac)); // shrinks toward a dot
    timerDisc.setAttribute('fill', timerColor(frac));
    pips.forEach((p, i) => (p.style.color = i < game.trips ? '#d0605a' : '#3a3a44'));

    if (engaged && bestLock >= 0 && !game.over) {
      progress.textContent = `EXTRACT ${game.extractedCount(bestLock)} / ${board.locks[bestLock]!.signalCount}`;
      progress.style.opacity = '1';
    } else progress.style.opacity = '0';

    if (game.over && overlay.style.display === 'none') showOverlay();

    renderer.render(scene, camera);
    raf = requestAnimationFrame(loop);
  }
  loop();

  return {
    regenerate(difficulty, seed) {
      build(difficulty, seed);
    },
    alignLock(index) {
      const lv = lockViews[index];
      if (!lv) return;
      const dist = camera.position.distanceTo(target);
      camera.position.copy(target).addScaledVector(lv.axisV3, dist);
      controls.update();
    },
    debugExtract(l, count) {
      const lv = lockViews[l];
      if (!lv) return;
      let k = 0;
      for (const i of lv.signalIdx) {
        if (k++ >= count) break;
        game.select(i, l);
      }
    },
    debugSolve() {
      for (let l = 0; l < lockViews.length; l++)
        for (const i of lockViews[l]!.signalIdx) game.select(i, l);
    },
    debugTime(frac) {
      game.phase = 'RUN';
      game.timeLeft = Math.max(0, frac) * game.tRun;
    },
    dispose() {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      controls.dispose();
      cloud?.dispose();
      [svg, timerSvg, strikes, progress, hint, reticle, vignette, overlay].forEach((n) => n.remove());
      renderer.dispose();
    },
  };
}
