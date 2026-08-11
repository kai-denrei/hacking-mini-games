import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { DotField } from '../../render/dotfield.ts';
import { searching, type Shape, type PDot } from '../../render/primitives.ts';
import { generateBoard } from '../transfer/generate.ts';
import { TransferGame } from '../transfer/play.ts';
import { layerOf, type Board, type OutcomeKind } from '../transfer/model.ts';
import { cellPos, termPos, setVerticalGain, gainFor, vGain, type Side } from '../transfer/layout.ts';
import { traceDots, type TraceDot } from '../circuit/route.ts';
import type { Difficulty, Skill } from '../../engine/session.ts';

// TUBES (game 5) — the read-the-circuit model. Wires are thin dotted tubes (a
// cut-and-straightened torus: a lit round core with dim walls). Every terminal's
// fan-out is legible: forks (SPLIT) are two tubes, and each tube carries a
// visible element — an INVERT ring, a REPEAT node, or a DEAD stub that never
// reaches a cell. Hover a terminal to preview its reach. Reading the two circuits
// to pick the better side, and to avoid dead terminals, is the skill.
// Mechanics reuse TRANSFER; the readable circuit is the point.

const C = {
  cellN: [0.22, 0.22, 0.28],
  p: [0.34, 0.9, 0.66],
  e: [0.82, 0.88, 1.0], // host = white (was red)
  dimP: [0.1, 0.22, 0.18],
  dimE: [0.19, 0.21, 0.27],
  dimN: [0.14, 0.14, 0.18],
  litP: [0.5, 1.1, 0.85],
  litE: [1.05, 1.08, 1.16],
  invert: [0.62, 0.5, 1.0],
  repeat: [1.0, 0.82, 0.4],
  dead: [0.7, 0.34, 0.32],
  white: [1, 1, 1],
} as const;
type RGB = readonly number[] | number[];
const mix = (a: RGB, b: RGB, t: number): [number, number, number] => [a[0]! + (b[0]! - a[0]!) * t, a[1]! + (b[1]! - a[1]!) * t, a[2]! + (b[2]! - a[2]!) * t];
const scale = (a: RGB, k: number): [number, number, number] => [a[0]! * k, a[1]! * k, a[2]! * k];
// Subtle per-terminal tone alternation so adjacent overlapping tubes read as
// distinct lanes (even lanes full, odd lanes dimmed a touch).
const laneTone = (term: number): number => (term % 2 === 0 ? 1 : 0.76);
const timerColor = (f: number): string => {
  const T = [93, 202, 165];
  const A = [224, 176, 112];
  const R = [208, 96, 90];
  const m = (x: number[], y: number[], t: number) => `rgb(${Math.round(x[0]! + (y[0]! - x[0]!) * t)},${Math.round(x[1]! + (y[1]! - x[1]!) * t)},${Math.round(x[2]! + (y[2]! - x[2]!) * t)})`;
  return f > 0.5 ? m(T, A, (1 - f) / 0.5) : m(A, R, Math.max(0, (0.5 - f) / 0.5));
};
const kindColor = (k: OutcomeKind): RGB => (k === 'INVERT' ? C.invert : k === 'REPEAT' ? C.repeat : k === 'DEAD' ? C.dead : C.white);

export interface Mounted {
  regenerate(difficulty: Difficulty, seed: string): void;
  chooseSide(side: Side): void;
  fire(terminalId: number): void;
  game(): TransferGame;
  dispose(): void;
}

interface Route {
  side: Side;
  term: number;
  cell: number;
  kind: OutcomeKind;
  dots: TraceDot[];
}

export function mountTubes(canvas: HTMLCanvasElement, initial: { difficulty: Difficulty; seed: string; skill: Skill }): Mounted {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x05060a, 1);
  const scene = new THREE.Scene();

  const CONTENT_W = 1.46;
  const CONTENT_H = 1.04;
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 100);
  camera.position.set(0, 0, 4);
  camera.lookAt(0, 0, 0);

  const field = new DotField(9000, { additive: true });
  scene.add(field.points);
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(new UnrealBloomPass(new THREE.Vector2(1, 1), 0.6, 0.5, 0.22));
  composer.addPass(new OutputPass());

  const NS = 'http://www.w3.org/2000/svg';
  const monoF = 'ui-monospace,SFMono-Regular,Menlo,monospace';
  const mk = (css: string): HTMLElement => {
    const e = document.createElement('div');
    e.style.cssText = css;
    document.body.appendChild(e);
    return e;
  };
  const timerSvg = document.createElementNS(NS, 'svg');
  timerSvg.setAttribute('viewBox', '0 0 48 48');
  timerSvg.style.cssText = 'position:fixed;left:50%;top:10px;transform:translateX(-50%);width:44px;height:44px;pointer-events:none';
  const timerRing = document.createElementNS(NS, 'circle');
  timerRing.setAttribute('cx', '24');
  timerRing.setAttribute('cy', '24');
  timerRing.setAttribute('r', '21');
  timerRing.setAttribute('fill', 'none');
  timerRing.setAttribute('stroke', timerColor(1));
  timerRing.setAttribute('stroke-width', '1.6');
  timerSvg.appendChild(timerRing);
  document.body.appendChild(timerSvg);
  const prompt = mk(`position:fixed;left:50%;top:56px;transform:translateX(-50%);font:12px ${monoF};color:#9a9aa6;pointer-events:none;text-align:center`);
  const tally = mk(`position:fixed;left:12px;bottom:12px;font:11px ${monoF};color:#55555f;pointer-events:none`);
  const legend = mk(`position:fixed;right:12px;bottom:12px;font:11px ${monoF};color:#6a6a76;pointer-events:none;text-align:right`);
  legend.innerHTML = '<span style="color:#9e80ff">◍ invert</span> · <span style="color:#ffd166">◆ repeat</span> · <span style="color:#b35754">✕ dead</span>';
  const overlay = mk(`position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(5,6,10,.55);font:${monoF};text-align:center;pointer-events:none`);

  let board!: Board;
  let game!: TransferGame;
  let routes: Route[] = [];
  let routeMap = new Map<string, TraceDot[]>();
  let mouseWorld: [number, number] | null = null;

  // (Re)compute every tube's dot path from the current layout — must run again
  // whenever the vertical gain changes (resize), since traceDots bakes in the
  // scaled terminal/cell positions.
  function buildRoutes(): void {
    routes = [];
    routeMap = new Map();
    for (const side of ['left', 'right'] as Side[]) {
      layerOf(board, side).terminals.forEach((t, term) => {
        for (const o of t.outcomes) {
          const dots = traceDots(side, term, o.cell);
          routes.push({ side, term, cell: o.cell, kind: o.kind, dots });
          routeMap.set(`${side}:${term}:${o.cell}`, dots);
        }
      });
    }
  }
  function build(difficulty: Difficulty, seed: string): void {
    board = generateBoard(difficulty, seed);
    game = new TransferGame(board);
    buildRoutes();
    overlay.style.display = 'none';
  }
  build(initial.difficulty, initial.seed);

  function resize(): void {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h);
    composer.setSize(w, h);
    const aspect = w / h;
    const top = Math.max(CONTENT_H, CONTENT_W / aspect);
    camera.top = top;
    camera.bottom = -top;
    camera.right = top * aspect;
    camera.left = -top * aspect;
    camera.updateProjectionMatrix();
    setVerticalGain(gainFor(top));
    buildRoutes();
  }
  window.addEventListener('resize', resize);
  resize();

  const toWorld = (cx: number, cy: number): [number, number] => {
    const r = canvas.getBoundingClientRect();
    return [(((cx - r.left) / r.width) * 2 - 1) * camera.right, (-((cy - r.top) / r.height) * 2 + 1) * camera.top];
  };
  const nearestTerminal = (side: Side, wx: number, wy: number): number => {
    let best = -1;
    let bestD = 0.22;
    for (let i = 0; i < 8; i++) {
      const [tx, ty] = termPos(side, i);
      const d = Math.hypot(wx - tx, wy - ty);
      if (d < bestD) {
        bestD = d;
        best = i;
      }
    }
    return best;
  };
  canvas.addEventListener('pointermove', (e) => (mouseWorld = toWorld(e.clientX, e.clientY)));
  canvas.addEventListener('pointerup', (e) => {
    const [wx, wy] = toWorld(e.clientX, e.clientY);
    if (game.phase === 'PLAN') game.chooseSide(wx < 0 ? 'left' : 'right');
    else if (game.phase === 'RUN' && game.playerSide) {
      const id = nearestTerminal(game.playerSide, wx, wy);
      if (id >= 0) game.firePlayer(id);
    }
  });

  const TUBE_R = 0.012;
  // A thin dotted tube: bright round core + dim walls, with a "Working Torus"
  // current — particles that travel along the tube AND spiral around its cross
  // section (the Braille "working/orbits" motion), so it always reads as live
  // current. A faint ambient band drifts under it; a fired pulse overrides both.
  const dirAt = (dots: TraceDot[], i: number): [number, number, number, number] => {
    const a = dots[Math.max(0, i - 1)]!;
    const c = dots[Math.min(dots.length - 1, i + 1)]!;
    let dx = c.x - a.x;
    let dy = c.y - a.y;
    const l = Math.hypot(dx, dy) || 1;
    dx /= l;
    dy /= l;
    return [dx, dy, -dy, dx]; // dir + perp
  };
  // smooth interpolated point (+ perp) at fractional u — no snapping to samples
  const pointAtU = (dots: TraceDot[], u: number): { x: number; y: number; nx: number; ny: number } => {
    let i = 0;
    while (i < dots.length - 2 && dots[i + 1]!.u < u) i++;
    const a = dots[i]!;
    const b = dots[Math.min(i + 1, dots.length - 1)]!;
    const t = Math.max(0, Math.min(1, (u - a.u) / (b.u - a.u || 1)));
    let dx = b.x - a.x;
    let dy = b.y - a.y;
    const l = Math.hypot(dx, dy) || 1;
    dx /= l;
    dy /= l;
    return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, nx: -dy, ny: dx };
  };
  function drawTube(dots: TraceDot[], dim: RGB, flow: RGB, lightAt: (u: number) => { b: number; col: RGB }, endU: number, nowSec: number, phase: number): void {
    const wall: RGB = [dim[0]! * 0.7, dim[1]! * 0.7, dim[2]! * 0.7];
    for (let i = 0; i < dots.length; i++) {
      const d = dots[i]!;
      if (d.u > endU) break;
      const [, , nx, ny] = dirAt(dots, i);
      const { b, col } = lightAt(d.u);
      const amb = 0.16 * Math.max(0, Math.sin((d.u * 2.2 - nowSec * 0.09 + phase) * Math.PI * 2));
      const coreCol = mix(dim, col, Math.min(1, b));
      const cb = 0.45 + amb + 0.85 * b;
      field.dot(d.x, d.y, coreCol[0] * cb, coreCol[1] * cb, coreCol[2] * cb, 2.3 + b * 3.6, 0.95);
      for (const off of [1, -1] as const) {
        const wc = mix(wall, col, Math.min(1, b * 0.8));
        const wb = 0.3 + amb * 0.7 + 0.6 * b;
        field.dot(d.x + nx * off * TUBE_R, d.y + ny * off * TUBE_R, wc[0] * wb, wc[1] * wb, wc[2] * wb, 1.6 + b * 2.2, 0.85);
      }
    }
    // working current: a smooth continuous stream of light travelling +
    // spiralling along the tube (interpolated, so it glides instead of stepping)
    const PN = 5;
    for (let k = 0; k < PN; k++) {
      const head = (nowSec * 0.13 + k / PN + phase * 0.13) % 1;
      for (let s = 0; s < 5; s++) {
        const uu = head - s * 0.022;
        if (uu <= 0.005 || uu > endU) continue;
        const q = pointAtU(dots, uu);
        const spiral = Math.sin(uu * 24 + nowSec * 2.2 + phase) * TUBE_R;
        const a = (1 - s / 5) * 0.85;
        field.dot(q.x + q.nx * spiral, q.y + q.ny * spiral, flow[0]! * a, flow[1]! * a, flow[2]! * a, 2.8 - s * 0.4, 0.92);
      }
    }
  }
  const drawPrim = (dots: PDot[], ax: number, ay: number, s: number, col: RGB, glow: number): void => {
    for (const d of dots) {
      const b = (0.3 + 0.7 * d.depth + d.scan * 0.7) * glow;
      field.dot(ax + d.x * s, ay + d.y * s, col[0]! * b, col[1]! * b, col[2]! * b, 1.4 + 2.2 * d.depth + d.scan * 2.6, 0.95);
    }
  };
  const at = (dots: TraceDot[], u: number): TraceDot => {
    let bi = 0;
    let bd = 9;
    for (let i = 0; i < dots.length; i++) {
      const dd = Math.abs(dots[i]!.u - u);
      if (dd < bd) {
        bd = dd;
        bi = i;
      }
    }
    return dots[bi]!;
  };
  const ring = (x: number, y: number, r: number, col: RGB, size: number, b: number): void => {
    for (let k = 0; k < 8; k++) {
      const a = (k / 8) * Math.PI * 2;
      field.dot(x + Math.cos(a) * r, y + Math.sin(a) * r, col[0]! * b, col[1]! * b, col[2]! * b, size, 0.9);
    }
  };
  const xMark = (x: number, y: number, r: number, col: RGB, b: number): void => {
    for (let k = -2; k <= 2; k++) {
      field.dot(x + k * r, y + k * r, col[0]! * b, col[1]! * b, col[2]! * b, 3, 0.9);
      field.dot(x + k * r, y - k * r, col[0]! * b, col[1]! * b, col[2]! * b, 3, 0.9);
    }
  };

  function showOverlay(): void {
    const c = game.counts();
    const won = game.phase === 'WON';
    overlay.innerHTML =
      `<div style="font-size:22px;letter-spacing:.2em;color:${won ? '#8fd0b6' : '#d0605a'}">${won ? '◆ CIRCUIT TAKEN' : '✕ REPELLED'}</div>` +
      `<div style="font-size:12px;color:#9a9aa6">you ${c.p} · host ${c.e} · neutral ${c.n}</div>` +
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
    game.tick(dt);

    const lights = new Map<string, { p: number; owner: 'P' | 'E'; kind: string }[]>();
    for (const p of game.pulses) {
      const key = `${p.side}:${p.terminalId}:${p.cell}`;
      const arr = lights.get(key) ?? [];
      arr.push({ p: p.elapsed / p.delay, owner: p.owner, kind: p.kind });
      lights.set(key, arr);
    }
    let hoverTerm = -1;
    const hoverSide: Side | null = game.phase === 'RUN' ? game.playerSide : mouseWorld ? (mouseWorld[0] < 0 ? 'left' : 'right') : null;
    if (mouseWorld && hoverSide) hoverTerm = nearestTerminal(hoverSide, mouseWorld[0], mouseWorld[1]);
    const previewing = hoverTerm >= 0 && hoverSide;

    field.begin();

    // tubes + elements
    for (const r of routes) {
      const role = game.playerSide ? (r.side === game.playerSide ? 'P' : 'E') : 'N';
      const tone = laneTone(r.term);
      const dim = scale(role === 'P' ? C.dimP : role === 'E' ? C.dimE : C.dimN, tone);
      const flow: RGB = scale(role === 'P' ? C.p : role === 'E' ? C.e : [0.34, 0.46, 0.6], 0.85 + 0.15 * tone);
      const isPrev = previewing && r.side === hoverSide && r.term === hoverTerm;
      const active = lights.get(`${r.side}:${r.term}:${r.cell}`);
      const endU = r.kind === 'DEAD' ? 0.66 : 1;
      drawTube(
        r.dots,
        dim,
        flow,
        (u) => {
          let b = isPrev ? 0.42 : 0;
          let col: RGB = isPrev ? kindColor(r.kind) : C.white;
          if (active)
            for (const L of active) {
              const g = u <= L.p ? Math.exp(-(L.p - u) / 0.12) : Math.exp(-(u - L.p) / 0.025);
              if (g > b) {
                b = g;
                col = L.kind === 'DEAD' ? C.dead : L.owner === 'P' ? C.litP : C.litE;
              }
            }
          return { b, col };
        },
        endU,
        nowSec,
        r.term * 0.6 + (r.side === 'left' ? 0 : 1.7),
      );
      // element glyph on the tube
      const gb = isPrev ? 1 : 0.7;
      if (r.kind === 'INVERT') {
        const q = at(r.dots, 0.5);
        ring(q.x, q.y, 0.02, C.invert, 2.4, gb);
      } else if (r.kind === 'REPEAT') {
        const q = at(r.dots, 0.5);
        const pulse = 0.7 + 0.3 * Math.sin(now / 200);
        for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) field.dot(q.x + dx * 0.014, q.y + dy * 0.014, C.repeat[0] * gb * pulse, C.repeat[1] * gb * pulse, C.repeat[2] * gb * pulse, 3);
      } else if (r.kind === 'DEAD') {
        const q = at(r.dots, 0.66);
        xMark(q.x, q.y, 0.012, C.dead, gb);
      }
    }

    // pulse heads
    for (const p of game.pulses) {
      const dots = routeMap.get(`${p.side}:${p.terminalId}:${p.cell}`);
      if (!dots) continue;
      const q = at(dots, Math.min(1, p.elapsed / p.delay));
      const col = p.kind === 'DEAD' ? C.dead : mix(p.owner === 'P' ? C.litP : C.litE, C.white, 0.4);
      field.dot(q.x, q.y, col[0], col[1], col[2], 9);
    }

    // cells (+ reach-preview highlight rings)
    const previewCells = new Map<number, OutcomeKind>();
    if (previewing) for (const r of routes) if (r.side === hoverSide && r.term === hoverTerm && r.kind !== 'DEAD') previewCells.set(r.cell, r.kind);
    for (let i = 0; i < 12; i++) {
      const [x, y] = cellPos(i);
      const owner = game.owners[i]!;
      const base = owner === 'P' ? C.p : owner === 'E' ? C.e : C.cellN;
      const flash = game.claimFlash[i]! / 0.35;
      const s = 0.026;
      const col = mix(base, C.white, flash * 0.7);
      for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) field.dot(x + dx * s, y + dy * s, col[0], col[1], col[2], owner === 'NEUTRAL' ? 4.5 : 5.5);
      const pk = previewCells.get(i);
      if (pk) ring(x, y, 0.058, kindColor(pk), 3, 0.9);
    }

    // terminals — searching primitives (octahedra left, cubes right). Grow a
    // touch on tall/portrait viewports so they don't read as plain dots.
    const termS = 0.05 * Math.min(1.45, 0.86 + 0.14 * vGain());
    for (const side of ['left', 'right'] as Side[]) {
      const shape: Shape = side === 'left' ? 'octa' : 'cube';
      const role = game.playerSide ? (side === game.playerSide ? 'P' : 'E') : 'N';
      const col = role === 'P' ? C.p : role === 'E' ? C.e : C.cellN;
      for (let i = 0; i < 8; i++) {
        const [x, y] = termPos(side, i);
        const hovered = hoverSide === side && hoverTerm === i && (game.phase === 'PLAN' || side === game.playerSide);
        const glow = hovered ? 1.6 : game.phase === 'PLAN' ? 0.7 + 0.35 * Math.sin(now / 240 + i) : 1;
        drawPrim(searching(shape, nowSec + i * 0.7), x, y, termS, hovered ? mix(col, C.white, 0.4) : col, glow);
      }
    }

    const railY = 0.99 * vGain();
    for (let i = 0; i < game.pBudget; i++) field.dot(-0.24 + i * 0.05, -railY, C.p[0], C.p[1], C.p[2], 5);
    if (initial.skill >= 3) for (let i = 0; i < game.eBudget; i++) field.dot(-0.24 + i * 0.05, railY, C.e[0], C.e[1], C.e[2], 5);

    field.commit(renderer.getPixelRatio());
    composer.render();

    const frac = Math.max(0, game.timeLeft / board.params.tMatch);
    timerRing.setAttribute('r', String(3 + 18 * frac));
    timerRing.setAttribute('stroke', timerColor(frac));
    const c = game.counts();
    tally.textContent = `D${board.difficulty} · ${board.seed} · you ${c.p} — host ${c.e} · lead wins`;
    if (game.phase === 'PLAN') {
      prompt.textContent = 'READ BOTH CIRCUITS — hover a terminal to preview its reach, then click a side to take it';
      prompt.style.opacity = '1';
    } else if (game.phase === 'RUN') {
      prompt.textContent = 'fire your terminals · dead stubs waste a pulse · later light wins the cell';
      prompt.style.opacity = '0.7';
    } else prompt.style.opacity = '0';
    if ((game.phase === 'WON' || game.phase === 'LOST') && overlay.style.display === 'none') showOverlay();

    raf = requestAnimationFrame(loop);
  }
  loop();

  return {
    regenerate: (d, seed) => build(d, seed),
    chooseSide: (side) => game.chooseSide(side),
    fire: (id) => game.firePlayer(id),
    game: () => game,
    dispose() {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      field.dispose();
      composer.dispose();
      [timerSvg, prompt, tally, legend, overlay].forEach((n) => n.remove());
      renderer.dispose();
    },
  };
}
