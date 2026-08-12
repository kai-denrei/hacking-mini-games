import * as THREE from 'three';
import { DotField } from '../../render/dotfield.ts';
import { generateBoard } from './generate.ts';
import { TransferGame } from './play.ts';
import { layerOf, type Board, type MatchSpec } from './model.ts';
import { cellPos, termPos, setVerticalGain, gainFor, vGain, type Side } from './layout.ts';
import type { Skill } from '../../engine/session.ts';

// TRANSFER renderer + play loop. A flat dot-circuit: a central 12-cell strip
// flanked by two 8-terminal wiring layers. PLAN: click a side to take it. RUN:
// click your terminals to fire pulses that travel the wires and claim cells
// (later-claim-wins). Both layers are always visible — the read is the skill.

const C = {
  neutral: [0.3, 0.3, 0.36],
  p: [0.36, 0.79, 0.65],
  e: [0.82, 0.88, 1.0], // host = white (was red)
  pDim: [0.14, 0.26, 0.22],
  eDim: [0.19, 0.21, 0.27],
  gray: [0.16, 0.16, 0.2],
  pBright: [0.62, 1.0, 0.86],
  eBright: [1.05, 1.08, 1.16],
} as const;
type RGB = readonly [number, number, number] | number[];
const lerpC = (a: RGB, b: RGB, t: number): [number, number, number] => [
  a[0]! + (b[0]! - a[0]!) * t,
  a[1]! + (b[1]! - a[1]!) * t,
  a[2]! + (b[2]! - a[2]!) * t,
];
const scale = (a: RGB, k: number): [number, number, number] => [a[0]! * k, a[1]! * k, a[2]! * k];
// Subtle per-terminal tone alternation so adjacent wires read as distinct lanes.
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
  regenerate(spec: MatchSpec, seed: string): void;
  chooseSide(side: Side): void;
  fire(terminalId: number): void;
  game(): TransferGame;
  dispose(): void;
}

export function mountTransfer(
  canvas: HTMLCanvasElement,
  initial: { spec: MatchSpec; seed: string; skill: Skill },
): Mounted {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x08080d, 1);
  const scene = new THREE.Scene();

  // Fit the camera to the circuit so the edge terminals are always on-screen,
  // whatever the window aspect (letterbox rather than clip).
  const CONTENT_W = 1.46; // half-width to keep visible (terminals at ±1.32)
  const CONTENT_H = 1.04; // half-height (budget dots at ±0.99)
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 100);
  camera.position.set(0, 0, 4);
  camera.lookAt(0, 0, 0);

  const field = new DotField(2000);
  scene.add(field.points);

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
  const overlay = mk(`position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(8,8,13,.55);font:${mono};text-align:center;pointer-events:none`);

  let board!: Board;
  let game!: TransferGame;
  let hoverTerm = -1;
  let mouseWorld: [number, number] | null = null;

  function build(spec: MatchSpec, seed: string): void {
    board = generateBoard(spec, seed);
    game = new TransferGame(board);
    overlay.style.display = 'none';
    hoverTerm = -1;
  }
  build(initial.spec, initial.seed);

  function resize(): void {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h);
    const aspect = w / h;
    // top grows on narrow windows so width still covers CONTENT_W (fit-contain)
    const top = Math.max(CONTENT_H, CONTENT_W / aspect);
    camera.top = top;
    camera.bottom = -top;
    camera.right = top * aspect;
    camera.left = -top * aspect;
    camera.updateProjectionMatrix();
    setVerticalGain(gainFor(top));
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

  canvas.addEventListener('pointermove', (e) => {
    mouseWorld = toWorld(e.clientX, e.clientY);
  });
  canvas.addEventListener('pointerup', (e) => {
    const [wx, wy] = toWorld(e.clientX, e.clientY);
    if (game.phase === 'PLAN') {
      game.chooseSide(wx < 0 ? 'left' : 'right');
    } else if (game.phase === 'RUN' && game.playerSide) {
      const id = nearestTerminal(game.playerSide, wx, wy);
      if (id >= 0) game.firePlayer(id);
    }
  });

  const cluster = (x: number, y: number, col: RGB, size: number, alpha = 1): void => {
    const s = 0.026;
    for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) field.dot(x + dx * s, y + dy * s, col[0]!, col[1]!, col[2]!, size, alpha);
  };
  const plus = (x: number, y: number, col: RGB, size: number): void => {
    field.dot(x, y, col[0]!, col[1]!, col[2]!, size);
    const s = 0.03;
    for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]] as const) field.dot(x + dx * s, y + dy * s, col[0]!, col[1]!, col[2]!, size * 0.8);
  };
  const wire = (a: [number, number], b: [number, number], col: RGB): void => {
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const steps = Math.max(3, Math.round(len / 0.05));
    for (let k = 1; k < steps; k++) {
      const t = k / steps;
      field.dot(a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, col[0]!, col[1]!, col[2]!, 2.6, 0.85);
    }
  };

  function showOverlay(): void {
    const c = game.counts();
    const dead = game.phase === 'DEADLOCK';
    const won = game.phase === 'WON';
    const title = won ? '◆ CIRCUIT TAKEN' : dead ? '⟳ DEADLOCK' : '✕ REPELLED';
    const color = won ? '#8fd0b6' : dead ? '#e0b070' : '#d0605a';
    overlay.innerHTML =
      `<div style="font-size:22px;letter-spacing:.2em;color:${color}">${title}</div>` +
      (dead ? `<div style="font-size:12px;color:#9a9aa6">6–6 — the battle replays</div>` : `<div style="font-size:12px;color:#9a9aa6">you ${c.p} · host ${c.e} · neutral ${c.n}</div>`) +
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

    // hover
    hoverTerm = -1;
    const hoverSide: Side | null = game.phase === 'RUN' ? game.playerSide : mouseWorld ? (mouseWorld[0] < 0 ? 'left' : 'right') : null;
    if (mouseWorld && hoverSide) hoverTerm = nearestTerminal(hoverSide, mouseWorld[0], mouseWorld[1]);

    field.begin();
    const pulseT = 0.5 + 0.5 * Math.sin(now / 220); // PLAN invite pulse

    // wires
    for (const side of ['left', 'right'] as Side[]) {
      const role = game.playerSide ? (side === game.playerSide ? 'P' : 'E') : 'N';
      const base = role === 'P' ? C.pDim : role === 'E' ? C.eDim : C.gray;
      const layer = layerOf(board, side);
      layer.terminals.forEach((t, i) => {
        const col = scale(base, laneTone(i));
        for (const o of t.outcomes) wire(termPos(side, i), cellPos(o.cell), col);
      });
    }

    // cells
    for (let i = 0; i < 12; i++) {
      const [x, y] = cellPos(i);
      const owner = game.owners[i]!;
      const base = owner === 'P' ? C.p : owner === 'E' ? C.e : C.neutral;
      const flash = game.claimFlash[i]! / 0.35;
      cluster(x, y, lerpC(base, [1, 1, 1], flash * 0.8), owner === 'NEUTRAL' ? 4.5 : 5.5);
    }

    // terminals
    for (const side of ['left', 'right'] as Side[]) {
      const role = game.playerSide ? (side === game.playerSide ? 'P' : 'E') : 'N';
      const col = role === 'P' ? C.p : role === 'E' ? C.e : C.neutral;
      const selectable = (game.phase === 'RUN' && side === game.playerSide) || game.phase === 'PLAN';
      for (let i = 0; i < 8; i++) {
        const [x, y] = termPos(side, i);
        const hovered = selectable && hoverSide === side && hoverTerm === i;
        const invite = game.phase === 'PLAN' ? 0.4 + 0.6 * pulseT : 1;
        const c = hovered ? lerpC(col, [1, 1, 1], 0.5) : col;
        plus(x, y, [c[0] * invite, c[1] * invite, c[2] * invite], hovered ? 7 : 5.5);
      }
    }

    // pulses (traveling) + short tail
    for (const p of game.pulses) {
      const a = termPos(p.side, p.terminalId);
      const b = cellPos(p.cell);
      const prog = Math.min(1, p.elapsed / p.delay);
      const col = p.kind === 'DEAD' ? C.gray : p.owner === 'P' ? C.pBright : C.eBright;
      for (let k = 0; k < 3; k++) {
        const t = Math.max(0, prog - k * 0.06);
        field.dot(a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, col[0]!, col[1]!, col[2]!, 8 - k * 2, 1 - k * 0.3);
      }
    }

    // budgets: your pulses along the bottom; host's along the top (SKILL ≥ 3)
    const railY = 0.99 * vGain();
    for (let i = 0; i < game.pBudget; i++) field.dot(-0.24 + i * 0.05, -railY, C.p[0], C.p[1], C.p[2], 5);
    if (initial.skill >= 3) for (let i = 0; i < game.eBudget; i++) field.dot(-0.24 + i * 0.05, railY, C.e[0], C.e[1], C.e[2], 5);

    field.commit(renderer.getPixelRatio());
    renderer.render(scene, camera);

    // HUD
    const frac = Math.max(0, game.timeLeft / board.params.tMatch);
    timerRing.setAttribute('r', String(3 + 18 * frac));
    timerRing.setAttribute('stroke', timerColor(frac));
    const c = game.counts();
    tally.textContent = `you c${board.spec.attacker} vs host c${board.spec.defender} · ${c.p}–${c.e} · lead wins`;
    if (game.phase === 'PLAN') {
      prompt.textContent = 'CHOOSE A SIDE — click the left or right layer to take it';
      prompt.style.opacity = '1';
    } else if (game.phase === 'RUN') {
      prompt.textContent = 'click your terminals to fire · later pulse wins the cell';
      prompt.style.opacity = '0.7';
    } else prompt.style.opacity = '0';
    if ((game.phase === 'WON' || game.phase === 'LOST' || game.phase === 'DEADLOCK') && overlay.style.display === 'none') showOverlay();

    raf = requestAnimationFrame(loop);
  }
  loop();

  return {
    regenerate: (spec, seed) => build(spec, seed),
    chooseSide: (side) => game.chooseSide(side),
    fire: (id) => game.firePlayer(id),
    game: () => game,
    dispose() {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      field.dispose();
      [timerSvg, prompt, tally, overlay].forEach((n) => n.remove());
      renderer.dispose();
    },
  };
}
