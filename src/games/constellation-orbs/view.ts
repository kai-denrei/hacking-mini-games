import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { generateBoard, coherence, TIERS, type Board, type CloudPoint } from '../constellation/generate.ts';
import { ConstellationGame } from '../constellation/game.ts';
import { CONSTELLATION_GLYPHS, type Glyph } from '../../glyphs/bank.ts';
import { drawOrb, orbModeFor } from '../../render/thinkingOrbs.ts';
import { type Vec3, dot, sub, scale, normalize, angleDeg, rotateAroundAxis, randDir } from '../../math/vec3.ts';
import { makeRng, type RNG } from '../../engine/rng.ts';
import type { Difficulty, Skill } from '../../engine/session.ts';

// CONSTELLATION (orbs) — the same orbit-to-find + extract game as #1, but the
// point cloud is a field of small "thinking orbs" (Braille Lab's dotted 3D
// thought-orbs: searching / listening / solving), each a mini animated dotted
// sphere. Depth is read as orb size + shade. Rendered in plain 2D canvas: the
// THREE camera + OrbitControls drive the orbit and projection only.

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
  signalIdx: number[];
  signalPts: CloudPoint[];
  flat: Map<number, Vec3>;
  coherence: number;
}

export interface Mounted {
  regenerate(difficulty: Difficulty, seed: string): void;
  alignLock(index: number): void;
  debugExtract(l: number, count: number): void;
  debugSolve(): void;
  debugTime(frac: number): void;
  dispose(): void;
}

const ARC_DOTS = 30;
const TEAL = [93, 202, 165];
const AMBER = [224, 176, 112];
const RED = [208, 96, 90];
const mix3 = (a: number[], b: number[], t: number): string =>
  `rgb(${Math.round(a[0]! + (b[0]! - a[0]!) * t)},${Math.round(a[1]! + (b[1]! - a[1]!) * t)},${Math.round(a[2]! + (b[2]! - a[2]!) * t)})`;
const timerColor = (f: number): string =>
  f > 0.5 ? mix3(TEAL, AMBER, (1 - f) / 0.5) : mix3(AMBER, RED, Math.max(0, (0.5 - f) / 0.5));

// orb tints (0..1 multipliers over the grayscale ink)
const TINT_BASE: readonly [number, number, number] = [0.74, 0.82, 0.96]; // cool white
const TINT_PICK: readonly [number, number, number] = [0.44, 0.9, 0.74]; // extracted (teal)
const TINT_TRIP: readonly [number, number, number] = [0.96, 0.6, 0.54]; // tripped (brief red)
const ORB_SPEED = 1.6;
const ORB_NEAR = 15;
const ORB_FAR = 3.5;

export function mountConstellationOrbs(
  canvas: HTMLCanvasElement,
  initial: { difficulty: Difficulty; seed: string; skill: Skill },
): Mounted {
  const ctx = canvas.getContext('2d')!;
  const DPR = Math.min(2, window.devicePixelRatio || 1);
  const target = new THREE.Vector3(0, 0, 0);

  const FRUSTUM_HALF = 1.12;
  const FLASH_DUR = 0.7;
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 100);
  camera.position.set(0, 0, 4);
  camera.lookAt(target);

  const controls = new OrbitControls(camera, canvas);
  controls.enableDamping = true;
  controls.enablePan = false;
  controls.enableZoom = false;
  controls.target.copy(target);

  // ── overlay DOM (mirrors game #1) ─────────────────────────────────────────
  const NS = 'http://www.w3.org/2000/svg';
  const mono = 'ui-monospace,SFMono-Regular,Menlo,monospace';
  const el = (tag: string, css: string): HTMLElement => {
    const e = document.createElement(tag);
    e.style.cssText = css;
    document.body.appendChild(e);
    return e;
  };

  const svg = document.createElementNS(NS, 'svg');
  svg.setAttribute('viewBox', '0 0 220 130');
  svg.style.cssText = 'position:fixed;left:50%;bottom:14px;transform:translateX(-50%);width:220px;height:130px;pointer-events:none';
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

  const timerSvg = document.createElementNS(NS, 'svg');
  timerSvg.setAttribute('viewBox', '0 0 48 48');
  timerSvg.style.cssText = 'position:fixed;left:50%;top:10px;transform:translateX(-50%);width:46px;height:46px;pointer-events:none';
  const timerRing = document.createElementNS(NS, 'circle');
  timerRing.setAttribute('cx', '24');
  timerRing.setAttribute('cy', '24');
  timerRing.setAttribute('r', '21');
  timerRing.setAttribute('fill', 'none');
  timerRing.setAttribute('stroke', timerColor(1));
  timerRing.setAttribute('stroke-width', '1.6');
  timerSvg.appendChild(timerRing);
  document.body.appendChild(timerSvg);

  const strikes = el('div', `position:fixed;top:10px;right:12px;display:flex;gap:6px;font:13px ${mono};color:#5a5a64;pointer-events:none`);
  const pips: HTMLElement[] = [0, 1, 2].map(() => {
    const p = document.createElement('span');
    p.textContent = '✕';
    strikes.appendChild(p);
    return p;
  });
  const progress = el('div', `position:fixed;left:50%;top:30px;transform:translateX(-50%);font:11px ${mono};color:#8fd0b6;pointer-events:none;opacity:0`);
  const hint = el('div', `position:fixed;left:12px;bottom:12px;font:11px ${mono};color:#55555f;pointer-events:none`);
  const reticle = el('div', 'position:fixed;width:16px;height:16px;border:1px solid #6fe0b8;border-radius:50%;transform:translate(-50%,-50%);pointer-events:none;opacity:0;transition:opacity .1s');
  const vignette = el('div', 'position:fixed;inset:0;pointer-events:none;box-shadow:inset 0 0 120px 20px #d0403a;opacity:0;transition:opacity .3s');
  const overlay = el('div', `position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(8,8,13,.55);font:${mono};text-align:center;pointer-events:none`);

  let board!: Board;
  let base!: Float32Array;
  let live!: Float32Array;
  let emph!: Float32Array;
  let scr!: Float32Array; // per-point screen x,y (css px), refreshed each frame
  let scrOn!: Uint8Array; // 1 = point is in front of camera (projectable)
  let isSignal!: Uint8Array;
  let tripFlash!: Float32Array; // brief red on a tripped point
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
    scr = new Float32Array(n * 2);
    scrOn = new Uint8Array(n);
    isSignal = new Uint8Array(n);
    tripFlash = new Float32Array(n);

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
      return { axis: lock.axis, glyph: glyphByName(lock.glyph), signalIdx, signalPts, flat, coherence: 0 };
    });

    hint.textContent = `D${difficulty} · ${seed} · ${board.locks.length} lock(s) · orbit to align · click to extract · R`;
    overlay.style.display = 'none';
    engaged = false;
    prevEngaged = false;
  }
  build(initial.difficulty, initial.seed);

  function resize(): void {
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = Math.round(w * DPR);
    canvas.height = Math.round(h * DPR);
    canvas.style.width = w + 'px';
    canvas.style.height = h + 'px';
    const aspect = w / h;
    camera.left = -FRUSTUM_HALF * aspect;
    camera.right = FRUSTUM_HALF * aspect;
    camera.top = FRUSTUM_HALF;
    camera.bottom = -FRUSTUM_HALF;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  function driftLock(l: number): void {
    const lv = lockViews[l];
    if (!lv) return;
    const ang = ((2 * Math.PI) / 180) * driftRng();
    const ax = randDir(driftRng);
    lv.axis = normalize(rotateAroundAxis(lv.axis, ax, ang));
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

  // ── input ─────────────────────────────────────────────────────────────────
  let downX = 0;
  let downY = 0;
  let mouseX = -1;
  let mouseY = -1;
  let bestLock = -1;
  const vNdc = new THREE.Vector3();
  const vView = new THREE.Vector3();

  function pickIndex(x: number, y: number): number {
    const r = canvas.getBoundingClientRect();
    const px = x - r.left;
    const py = y - r.top;
    let bestSignal = -1;
    let bestSignalD = 26 * 26;
    let bestAny = -1;
    let bestAnyD = 20 * 20;
    for (let i = 0; i < scrOn.length; i++) {
      if (!scrOn[i]) continue;
      const dx = scr[i * 2]! - px;
      const dy = scr[i * 2 + 1]! - py;
      const d2 = dx * dx + dy * dy;
      const pt = board.points[i]!;
      if (pt.pop === 'SIGNAL' && pt.lock === bestLock && !game.extracted[bestLock]?.has(i) && d2 < bestSignalD) {
        bestSignalD = d2;
        bestSignal = i;
      }
      if (d2 < bestAnyD) {
        bestAnyD = d2;
        bestAny = i;
      }
    }
    return bestSignal >= 0 ? bestSignal : bestAny; // magnet toward the focus lock's signal
  }

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
    if (moved > 5 || !engaged || game.over || bestLock < 0) return;
    const idx = pickIndex(e.clientX, e.clientY);
    if (idx < 0) return;
    const outcome = game.select(idx, bestLock);
    if (outcome === 'trip') {
      tripFlash[idx] = 0.5;
      vignette.style.opacity = '0.9';
      setTimeout(() => (vignette.style.opacity = '0'), 60);
    }
  });

  const tmpDir = new THREE.Vector3();
  const qStep = new THREE.Quaternion();
  const qTo = new THREE.Quaternion();
  const qId = new THREE.Quaternion();
  const axisV3 = new THREE.Vector3();

  function showOverlay(): void {
    const r = game.result();
    let color = '#8fd0b6';
    let title = '';
    let sub = '';
    if (game.phase === 'WON') {
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
      `<div style="font-size:11px;color:#55555f;margin-top:8px">press R or tap ⟳ to run again</div>`;
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
    camera.updateMatrixWorld();
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

    // contraction + emphasis; dim noise as a lock forms (identical to #1)
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

    const aligned = engaged && best > 0.6;
    const { wrapped } = game.tick(dt, aligned, bestLock);
    if (wrapped && game.drift && bestLock >= 0) driftLock(bestLock);

    // sweep scan-line emphasis (RUN only)
    if (game.phase === 'RUN' && game.tSweep) {
      const sweepY = -1 + 2 * game.sweepT;
      const bandH = 0.14;
      for (let i = 0; i < emph.length; i++) {
        const dy = Math.abs(live[i * 3 + 1]! - sweepY);
        if (dy < bandH) emph[i] = emph[i]! + (1 - dy / bandH) * 0.7;
      }
    }

    // hover highlight (adds emphasis to the hovered orb)
    let hoverIdx = -1;
    if (engaged && !game.over && mouseX >= 0) {
      hoverIdx = pickIndex(mouseX, mouseY);
      if (hoverIdx >= 0) emph[hoverIdx] = emph[hoverIdx]! + 0.5;
    }

    // extracted (picked) points
    const focus = cp.distanceTo(target);
    const flash = Math.max(0, 1 - (nowSec - flashStart) / FLASH_DUR);

    // ── project every point → screen + depth, then draw far→near ─────────────
    const n = board.points.length;
    const order: number[] = [];
    const depth = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      vView.set(live[i * 3]!, live[i * 3 + 1]!, live[i * 3 + 2]!).applyMatrix4(camera.matrixWorldInverse);
      depth[i] = Math.max(0, Math.min(1, (-vView.z - (focus - 1)) / 2)); // 0 near .. 1 far
      vNdc.set(live[i * 3]!, live[i * 3 + 1]!, live[i * 3 + 2]!).project(camera);
      scr[i * 2] = (vNdc.x * 0.5 + 0.5) * window.innerWidth;
      scr[i * 2 + 1] = (-vNdc.y * 0.5 + 0.5) * window.innerHeight;
      scrOn[i] = 1;
      order.push(i);
      if (tripFlash[i]! > 0) tripFlash[i] = Math.max(0, tripFlash[i]! - dt);
    }
    order.sort((a, b) => depth[b]! - depth[a]!); // far first

    const picked = new Set<number>();
    for (const set of game.extracted) for (const i of set) picked.add(i);

    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    for (const i of order) {
      const d01 = depth[i]!;
      const e = emph[i]!;
      const isPick = picked.has(i);
      let intensity = (1 - 0.55 * d01) * (e < 0 ? 1 + e : 1); // depth shade + noise suppression
      if (e > 0) intensity += e * 0.95;
      if (isPick) intensity += 0.4;
      if (intensity < 0.05) continue;
      let R = (ORB_NEAR + (ORB_FAR - ORB_NEAR) * d01) * (1 + 0.28 * Math.max(0, e) + (isPick ? 0.2 : 0));
      R = Math.max(2.2, R);
      let tint = isPick ? TINT_PICK : TINT_BASE;
      if (tripFlash[i]! > 0) tint = TINT_TRIP;
      else if (flash > 0 && e > 0) {
        const f = Math.min(1, e) * flash;
        tint = [tint[0] + (0.95 - tint[0]) * f, tint[1] + (0.82 - tint[1]) * f, tint[2] + (0.42 - tint[2]) * f];
      }
      drawOrb(ctx, orbModeFor(i), scr[i * 2]!, scr[i * 2 + 1]!, R, nowSec * ORB_SPEED + i * 0.7, tint, intensity);
    }

    // soft-snap (hands-off), same as #1
    if (!engaged && nearestAngle < thetaLock && !game.over) engaged = true;
    else if (engaged && nearestAngle > thetaLock * 1.6) engaged = false;
    if (engaged && bestLock >= 0) {
      const dist = cp.distanceTo(target);
      tmpDir.set(viewDir[0], viewDir[1], viewDir[2]);
      axisV3.set(...lockViews[bestLock]!.axis);
      qTo.setFromUnitVectors(tmpDir, axisV3);
      qStep.copy(qId).slerp(qTo, 0.16);
      tmpDir.applyQuaternion(qStep);
      camera.position.copy(target).addScaledVector(tmpDir, dist);
    }
    if (engaged && !prevEngaged) flashStart = nowSec;
    prevEngaged = engaged;

    // reticle
    if (engaged && !game.over && hoverIdx >= 0) {
      const rect = canvas.getBoundingClientRect();
      reticle.style.left = `${rect.left + scr[hoverIdx * 2]!}px`;
      reticle.style.top = `${rect.top + scr[hoverIdx * 2 + 1]!}px`;
      reticle.style.borderColor = board.points[hoverIdx]?.pop === 'TRIP' ? '#d0605a' : '#6fe0b8';
      reticle.style.opacity = '1';
    } else if (engaged && !game.over && mouseX >= 0) {
      reticle.style.left = `${mouseX}px`;
      reticle.style.top = `${mouseY}px`;
      reticle.style.borderColor = '#44444c';
      reticle.style.opacity = '1';
    } else {
      reticle.style.opacity = '0';
    }

    // ── HUD ─────────────────────────────────────────────────────────────────
    if (initial.skill >= 1) {
      const lit = Math.round(best * ARC_DOTS);
      for (let i = 0; i < ARC_DOTS; i++) arcDots[i]!.setAttribute('fill', i < lit ? (engaged ? '#e8c06a' : '#5dcaa5') : '#2a2a34');
      if (engaged && bestLock >= 0) {
        glyphLabel.textContent = `⟡ ${lockViews[bestLock]!.glyph.name}`;
        glyphLabel.style.opacity = '1';
      } else glyphLabel.style.opacity = '0';
    }
    const frac = Math.max(0, game.timeLeft / game.tRun);
    timerRing.setAttribute('r', String(3 + 18 * frac));
    timerRing.setAttribute('stroke', timerColor(frac));
    pips.forEach((p, i) => (p.style.color = i < game.trips ? '#d0605a' : '#3a3a44'));
    if (engaged && bestLock >= 0 && !game.over) {
      progress.textContent = `EXTRACT ${game.extractedCount(bestLock)} / ${board.locks[bestLock]!.signalCount}`;
      progress.style.opacity = '1';
    } else progress.style.opacity = '0';
    if (game.over && overlay.style.display === 'none') showOverlay();

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
      axisV3.set(...lv.axis);
      camera.position.copy(target).addScaledVector(axisV3, dist);
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
      for (let l = 0; l < lockViews.length; l++) for (const i of lockViews[l]!.signalIdx) game.select(i, l);
    },
    debugTime(frac) {
      game.phase = 'RUN';
      game.timeLeft = Math.max(0, frac) * game.tRun;
    },
    dispose() {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      controls.dispose();
      [svg, timerSvg, strikes, progress, hint, reticle, vignette, overlay].forEach((n) => n.remove());
    },
  };
}
