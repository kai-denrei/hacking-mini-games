import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { DotField } from '../../render/dotfield.ts';
import { generateBoard } from '../transfer/generate.ts';
import { TransferGame } from '../transfer/play.ts';
import { layerOf, type Board } from '../transfer/model.ts';
import { cellPos, termPos, setVerticalGain, gainFor, vGain, type Side } from '../transfer/layout.ts';
import { traceDots, type TraceDot } from './route.ts';
import type { Difficulty, Skill } from '../../engine/session.ts';

// CIRCUIT (game 3) — the Paradroid duel rendered as a live lit circuit board:
// right-angle traces, light flowing through them as pulses travel, bloom glow.
// Mechanics are TRANSFER's (verified); the renderer is the whole difference.

const C = {
  cellN: [0.22, 0.22, 0.28],
  cellP: [0.3, 0.85, 0.62],
  cellE: [0.82, 0.88, 1.0], // host = white (was red)
  dimP: [0.09, 0.2, 0.16],
  dimE: [0.19, 0.21, 0.27],
  dimN: [0.12, 0.12, 0.16],
  litP: [0.5, 1.1, 0.85],
  litE: [1.05, 1.08, 1.16],
  litD: [0.4, 0.4, 0.42],
  white: [1, 1, 1],
} as const;
type RGB = readonly number[] | number[];
const lerpC = (a: RGB, b: RGB, t: number): [number, number, number] => [
  a[0]! + (b[0]! - a[0]!) * t,
  a[1]! + (b[1]! - a[1]!) * t,
  a[2]! + (b[2]! - a[2]!) * t,
];
const scale = (a: RGB, k: number): [number, number, number] => [a[0]! * k, a[1]! * k, a[2]! * k];
// Subtle per-terminal tone alternation so adjacent traces read as distinct lanes.
const laneTone = (term: number): number => (term % 2 === 0 ? 1 : 0.76);
const timerColor = (f: number): string => {
  const T = [93, 202, 165];
  const A = [224, 176, 112];
  const R = [208, 96, 90];
  const m = (x: number[], y: number[], t: number) =>
    `rgb(${Math.round(x[0]! + (y[0]! - x[0]!) * t)},${Math.round(x[1]! + (y[1]! - x[1]!) * t)},${Math.round(x[2]! + (y[2]! - x[2]!) * t)})`;
  return f > 0.5 ? m(T, A, (1 - f) / 0.5) : m(A, R, Math.max(0, (0.5 - f) / 0.5));
};

export interface Mounted {
  regenerate(difficulty: Difficulty, seed: string): void;
  chooseSide(side: Side): void;
  fire(terminalId: number): void;
  game(): TransferGame;
  dispose(): void;
}

interface TraceView {
  side: Side;
  term: number;
  cell: number;
  dots: TraceDot[];
}

export function mountCircuit(
  canvas: HTMLCanvasElement,
  initial: { difficulty: Difficulty; seed: string; skill: Skill },
): Mounted {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x05060a, 1);
  const scene = new THREE.Scene();

  const CONTENT_W = 1.46;
  const CONTENT_H = 1.04;
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 100);
  camera.position.set(0, 0, 4);
  camera.lookAt(0, 0, 0);

  const field = new DotField(3000, { additive: true });
  scene.add(field.points);

  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), 0.9, 0.55, 0.18);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  const NS = 'http://www.w3.org/2000/svg';
  const mono = 'ui-monospace,SFMono-Regular,Menlo,monospace';
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
  const prompt = mk(`position:fixed;left:50%;top:56px;transform:translateX(-50%);font:12px ${mono};color:#9a9aa6;pointer-events:none;text-align:center`);
  const tally = mk(`position:fixed;left:12px;bottom:12px;font:11px ${mono};color:#55555f;pointer-events:none`);
  const overlay = mk(`position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(5,6,10,.55);font:${mono};text-align:center;pointer-events:none`);

  let board!: Board;
  let game!: TransferGame;
  let traces: TraceView[] = [];
  let traceMap = new Map<string, TraceDot[]>();
  let mouseWorld: [number, number] | null = null;

  // Recompute traces from the current layout — rerun whenever the vertical gain
  // changes (resize), since traceDots bakes in the scaled terminal/cell positions.
  function buildTraces(): void {
    traces = [];
    traceMap = new Map();
    for (const side of ['left', 'right'] as Side[]) {
      layerOf(board, side).terminals.forEach((t, term) => {
        for (const o of t.outcomes) {
          const dots = traceDots(side, term, o.cell);
          traces.push({ side, term, cell: o.cell, dots });
          traceMap.set(`${side}:${term}:${o.cell}`, dots);
        }
      });
    }
  }
  function build(difficulty: Difficulty, seed: string): void {
    board = generateBoard(difficulty, seed);
    game = new TransferGame(board);
    buildTraces();
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
    buildTraces();
  }
  window.addEventListener('resize', resize);
  resize();

  const toWorld = (cx: number, cy: number): [number, number] => {
    const r = canvas.getBoundingClientRect();
    const nx = ((cx - r.left) / r.width) * 2 - 1;
    const ny = -((cy - r.top) / r.height) * 2 + 1;
    return [nx * camera.right, ny * camera.top];
  };
  const nearestTerminal = (side: Side, wx: number, wy: number): number => {
    let best = -1;
    let bestD = 0.2;
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

  const cluster = (x: number, y: number, col: RGB, size: number): void => {
    const s = 0.026;
    for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) field.dot(x + dx * s, y + dy * s, col[0]!, col[1]!, col[2]!, size);
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
    const dt = Math.min(0.05, (now - lastT) / 1000);
    lastT = now;
    game.tick(dt);

    // lights currently flowing on each trace
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

    field.begin();

    // traces (base dim + travelling light)
    for (const tr of traces) {
      const role = game.playerSide ? (tr.side === game.playerSide ? 'P' : 'E') : 'N';
      const dim = scale(role === 'P' ? C.dimP : role === 'E' ? C.dimE : C.dimN, laneTone(tr.term));
      const active = lights.get(`${tr.side}:${tr.term}:${tr.cell}`);
      for (const d of tr.dots) {
        let bright = 0;
        let lit: RGB = C.white;
        if (active) {
          for (const L of active) {
            const g = d.u <= L.p ? Math.exp(-(L.p - d.u) / 0.13) : Math.exp(-(d.u - L.p) / 0.025);
            if (g > bright) {
              bright = g;
              lit = L.kind === 'DEAD' ? C.litD : L.owner === 'P' ? C.litP : C.litE;
            }
          }
        }
        const col = lerpC(dim, lit, bright);
        field.dot(d.x, d.y, col[0], col[1], col[2], 2.3 + bright * 4.2, 0.9);
      }
    }

    // pulse heads (bright cores drive the bloom)
    for (const p of game.pulses) {
      const dots = traceMap.get(`${p.side}:${p.terminalId}:${p.cell}`);
      if (!dots) continue;
      const prog = Math.min(1, p.elapsed / p.delay);
      let bestI = 0;
      let bestD = 9;
      for (let i = 0; i < dots.length; i++) {
        const dd = Math.abs(dots[i]!.u - prog);
        if (dd < bestD) {
          bestD = dd;
          bestI = i;
        }
      }
      const head = dots[bestI]!;
      const col = p.kind === 'DEAD' ? C.litD : lerpC(p.owner === 'P' ? C.litP : C.litE, C.white, 0.4);
      field.dot(head.x, head.y, col[0]!, col[1]!, col[2]!, 9);
    }

    // cells
    for (let i = 0; i < 12; i++) {
      const [x, y] = cellPos(i);
      const owner = game.owners[i]!;
      const base = owner === 'P' ? C.cellP : owner === 'E' ? C.cellE : C.cellN;
      const flash = game.claimFlash[i]! / 0.35;
      cluster(x, y, lerpC(base, C.white, flash * 0.7), owner === 'NEUTRAL' ? 4.5 : 5.5);
    }

    // terminals
    for (const side of ['left', 'right'] as Side[]) {
      const role = game.playerSide ? (side === game.playerSide ? 'P' : 'E') : 'N';
      const col = role === 'P' ? C.cellP : role === 'E' ? C.cellE : C.cellN;
      const pulseInvite = game.phase === 'PLAN' ? 0.5 + 0.5 * Math.sin(now / 220) : 1;
      for (let i = 0; i < 8; i++) {
        const [x, y] = termPos(side, i);
        const hovered = hoverSide === side && hoverTerm === i && (game.phase === 'PLAN' || side === game.playerSide);
        const c = hovered ? lerpC(col, C.white, 0.5) : col;
        const b = hovered ? 1.3 : pulseInvite;
        field.dot(x, y, c[0] * b, c[1] * b, c[2] * b, hovered ? 8 : 6);
        for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]] as const)
          field.dot(x + dx * 0.03, y + dy * 0.03, c[0] * b * 0.7, c[1] * b * 0.7, c[2] * b * 0.7, 4);
      }
    }

    // budgets
    const railY = 0.99 * vGain();
    for (let i = 0; i < game.pBudget; i++) field.dot(-0.24 + i * 0.05, -railY, C.cellP[0], C.cellP[1], C.cellP[2], 5);
    if (initial.skill >= 3) for (let i = 0; i < game.eBudget; i++) field.dot(-0.24 + i * 0.05, railY, C.cellE[0], C.cellE[1], C.cellE[2], 5);

    field.commit(renderer.getPixelRatio());
    composer.render();

    const frac = Math.max(0, game.timeLeft / board.params.tMatch);
    timerRing.setAttribute('r', String(3 + 18 * frac));
    timerRing.setAttribute('stroke', timerColor(frac));
    const c = game.counts();
    tally.textContent = `D${board.difficulty} · ${board.seed} · you ${c.p} — host ${c.e} · lead wins`;
    if (game.phase === 'PLAN') {
      prompt.textContent = 'CHOOSE A SIDE — click the left or right circuit to take it';
      prompt.style.opacity = '1';
    } else if (game.phase === 'RUN') {
      prompt.textContent = 'click your terminals — light claims the cell it reaches · later pulse wins';
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
      [timerSvg, prompt, tally, overlay].forEach((n) => n.remove());
      renderer.dispose();
    },
  };
}
