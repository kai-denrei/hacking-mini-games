import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { DotField } from '../../render/dotfield.ts';
import { searching, solving, type Shape, type PDot } from '../../render/primitives.ts';
import { modeDots, pickEnemyTheme, type EnemyTheme, type MDot } from '../../render/primModes.ts';
import { generateBoard } from '../transfer/generate.ts';
import { TransferGame } from '../transfer/play.ts';
import { layerOf, type Board, type OutcomeKind, type Owner, type MatchSpec } from '../transfer/model.ts';
import { cellPos, termPos, setVerticalGain, gainFor, vGain, type Side } from '../transfer/layout.ts';
import { traceDots, type TraceDot } from '../circuit/route.ts';
import { drawTube } from '../../render/tubeFlow.ts';
import { elementGlyphDots, ELEMENT_INFO, type GlyphKind } from '../../render/circuitElements.ts';
import type { Skill } from '../../engine/session.ts';

// CIRCUIT DUEL 2 (game #8, "HDT") — the read-the-circuit model with the full
// element vocabulary and an OFF→ON activation beat. Wires are the shared
// "working torus" tubes (src/render/tubeFlow.ts). Before you take a side
// (game.phase === 'PLAN') the whole board is UNPOWERED: every tube is a single
// dim gray, no owner colour, no flowing current — a schematic you read. Element
// glyphs (from src/render/circuitElements.ts) mark each wire: CLAIM / SPLIT /
// LOCK / JOINER / DEAD / SHORT / FLIP / CONVERT. Once you choose a side the board
// switches ON — your side green, the host themed, current flowing. Mechanics
// reuse TRANSFER; the readable, full-vocabulary circuit is the point.

const C = {
  cellN: [0.22, 0.22, 0.28],
  p: [0.34, 0.9, 0.66],
  e: [0.82, 0.88, 1.0], // host = white (was red)
  dimP: [0.1, 0.22, 0.18],
  dimE: [0.19, 0.21, 0.27],
  dimN: [0.14, 0.14, 0.18],
  litP: [0.5, 1.1, 0.85],
  litE: [1.05, 1.08, 1.16],
  dead: [0.7, 0.34, 0.32],
  white: [1, 1, 1],
  // OFF/PLAN state — a single dim gray for every unpowered tube (no owner tone)
  offDim: [0.16, 0.17, 0.2],
  offGlyph: [0.42, 0.44, 0.5],
} as const;
type RGB = readonly number[] | number[];
const mix = (a: RGB, b: RGB, t: number): [number, number, number] => [a[0]! + (b[0]! - a[0]!) * t, a[1]! + (b[1]! - a[1]!) * t, a[2]! + (b[2]! - a[2]!) * t];
const scale = (a: RGB, k: number): [number, number, number] => [a[0]! * k, a[1]! * k, a[2]! * k];
// Three shades PER SIDE so overlapping routes read apart without mixing colours:
// the green side (you) cycles greens; the white side (host) cycles whites.
const GREEN_SHADES: readonly RGB[] = [
  [0.34, 0.9, 0.62], // base green
  [0.52, 1.0, 0.8], // bright green
  [0.24, 0.7, 0.48], // deep green
];
const WHITE_SHADES: readonly RGB[] = [
  [0.82, 0.88, 1.0], // cool white
  [0.98, 0.98, 1.0], // bright white
  [0.64, 0.72, 0.9], // deep white
];
const timerColor = (f: number): string => {
  const T = [93, 202, 165];
  const A = [224, 176, 112];
  const R = [208, 96, 90];
  const m = (x: number[], y: number[], t: number) => `rgb(${Math.round(x[0]! + (y[0]! - x[0]!) * t)},${Math.round(x[1]! + (y[1]! - x[1]!) * t)},${Math.round(x[2]! + (y[2]! - x[2]!) * t)})`;
  return f > 0.5 ? m(T, A, (1 - f) / 0.5) : m(A, R, Math.max(0, (0.5 - f) / 0.5));
};
// Map the mechanical OutcomeKind → the visual GlyphKind vocabulary. INVERT is a
// legacy kind that full-vocabulary generation mostly replaces; treat it as
// CONVERT. REPEAT is a claim-gun — show it as a CLAIM (there is no REPEAT glyph).
const glyphForKind = (k: OutcomeKind): GlyphKind => {
  switch (k) {
    case 'CLAIM':
      return 'CLAIM';
    case 'LOCK':
      return 'LOCK';
    case 'DEAD':
      return 'DEAD';
    case 'SHORT':
      return 'SHORT';
    case 'FLIP':
      return 'FLIP';
    case 'CONVERT':
      return 'CONVERT';
    case 'REPEAT':
      return 'CLAIM';
    case 'INVERT':
      return 'CONVERT';
    default:
      return 'CLAIM';
  }
};
// where along the tube each element sits (dead stubs read earlier, at 0.66)
const glyphU = (k: OutcomeKind): number => (k === 'DEAD' ? 0.66 : 0.5);
// SHORT: the working current dies before the cell (visible stop at u≈0.55)
const endUForKind = (k: OutcomeKind): number => (k === 'DEAD' ? 0.66 : k === 'SHORT' ? 0.55 : 1);

export interface Mounted {
  regenerate(spec: MatchSpec, seed: string): void;
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
  /** this terminal has ≥2 outcomes — draw a SPLIT fork on the primary route */
  fork: boolean;
  primary: boolean;
}

export function mountCircuitDuel2(canvas: HTMLCanvasElement, initial: { spec: MatchSpec; seed: string; skill: Skill }): Mounted {
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
  // Derive legend colors from the single-source ELEMENT_INFO tag (good/tool/bad).
  const glyphColorCss = Object.fromEntries(
    ELEMENT_INFO.map((e) => [
      e.kind,
      e.tag === 'bad' ? '#f26660' : e.tag === 'tool' ? '#f0c766' : '#66f0b0',
    ]),
  ) as Record<GlyphKind, string>;
  legend.innerHTML = ELEMENT_INFO.map((e) => `<span style="color:${glyphColorCss[e.kind]}">${e.name.toLowerCase()}</span>`).join(' · ');
  const overlay = mk(`position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(5,6,10,.55);font:${monoF};text-align:center;pointer-events:none`);

  let board!: Board;
  let game!: TransferGame;
  let routes: Route[] = [];
  let routeMap = new Map<string, TraceDot[]>();
  let joiners: [number, number][] = [];
  let mouseWorld: [number, number] | null = null;
  // The host (enemy) gets a random shape/mode/colour theme each board, for variety.
  let enemy: EnemyTheme = pickEnemyTheme(initial.seed);
  const enemyLit = (): RGB => mix(enemy.color, C.white, 0.28);

  // (Re)compute every tube's dot path from the current layout — must run again
  // whenever the vertical gain changes (resize), since traceDots bakes in the
  // scaled terminal/cell positions.
  function buildRoutes(): void {
    routes = [];
    routeMap = new Map();
    for (const side of ['left', 'right'] as Side[]) {
      layerOf(board, side).terminals.forEach((t, term) => {
        const fork = t.outcomes.length >= 2;
        t.outcomes.forEach((o, oi) => {
          const dots = traceDots(side, term, o.cell);
          routes.push({ side, term, cell: o.cell, kind: o.kind, dots, fork, primary: oi === 0 });
          routeMap.set(`${side}:${term}:${o.cell}`, dots);
        });
      });
    }
  }
  function build(spec: MatchSpec, seed: string): void {
    board = generateBoard(spec, seed, { elements: 'full' });
    game = new TransferGame(board);
    enemy = pickEnemyTheme(seed);
    joiners = board.joiners ?? [];
    buildRoutes();
    overlay.style.display = 'none';
  }
  build(initial.spec, initial.seed);

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

  const drawPrim = (dots: PDot[], ax: number, ay: number, s: number, col: RGB, glow: number): void => {
    for (const d of dots) {
      const b = (0.3 + 0.7 * d.depth + d.scan * 0.7) * glow;
      field.dot(ax + d.x * s, ay + d.y * s, col[0]! * b, col[1]! * b, col[2]! * b, 1.4 + 2.2 * d.depth + d.scan * 2.6, 0.95);
    }
  };
  // like drawPrim but honours per-dot alpha — for the themed enemy orbs, whose
  // modes (connecting/composing/…) carry faint ghost + bright signal dots.
  const drawMode = (dots: MDot[], ax: number, ay: number, s: number, col: RGB, glow: number): void => {
    for (const d of dots) {
      const b = (0.3 + 0.7 * d.depth + d.scan * 0.7) * glow;
      field.dot(ax + d.x * s, ay + d.y * s, col[0]! * b, col[1]! * b, col[2]! * b, 1.4 + 2.2 * d.depth + d.scan * 2.6, Math.min(1, d.a));
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
  // Paint one element glyph (from circuitElements) at a tube point. `tint` is an
  // optional override colour (used to gray glyphs while the board is unpowered);
  // otherwise each GlyphDot keeps its own semantic colour.
  const drawGlyph = (kind: GlyphKind, gx: number, gy: number, nowSec: number, glow: number, dotScale: number, tint?: RGB): void => {
    for (const g of elementGlyphDots(kind, nowSec)) {
      const col = tint ?? g.col;
      const b = glow * g.a;
      field.dot(gx + g.x * dotScale, gy + g.y * dotScale, col[0]! * b, col[1]! * b, col[2]! * b, 1.4 + g.r * 6, Math.min(1, g.a));
    }
  };

  function showOverlay(): void {
    const c = game.counts();
    const dead = game.phase === 'DEADLOCK';
    const won = game.phase === 'WON';
    const title = won ? '◆ COMPLETE' : dead ? '⟳ DEADLOCK · 6–6 replays' : '✕ REJECTED';
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
    const nowSec = now / 1000;
    const dt = Math.min(0.05, (now - lastT) / 1000);
    lastT = now;
    game.tick(dt);

    const powered = game.phase !== 'PLAN';

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
      // OFF (PLAN): every tube is a single dim gray, no owner colour, no flow.
      // ON: your side green, host themed, neutral white — per-terminal tone keeps
      // overlapping lanes distinct.
      let dim: RGB;
      let flow: RGB;
      if (!powered) {
        dim = C.offDim;
        flow = C.offDim;
      } else if (role === 'E') {
        const tone = 0.8 + 0.2 * (r.term % 2);
        dim = scale(enemy.dim, tone);
        flow = scale(enemy.color, tone);
      } else {
        const isGreen = role === 'P' || (role === 'N' && r.side === 'left');
        const fam = isGreen ? GREEN_SHADES : WHITE_SHADES;
        const sh = fam[r.term % fam.length]!;
        dim = scale(sh, role === 'N' ? 0.24 : 0.2);
        flow = sh;
      }
      const isPrev = previewing && r.side === hoverSide && r.term === hoverTerm;
      const active = lights.get(`${r.side}:${r.term}:${r.cell}`);
      const endU = endUForKind(r.kind);
      drawTube(
        field,
        r.dots,
        dim,
        flow,
        (u) => {
          let b = isPrev ? 0.42 : 0;
          let col: RGB = C.white;
          if (active)
            for (const L of active) {
              const g = u <= L.p ? Math.exp(-(L.p - u) / 0.12) : Math.exp(-(u - L.p) / 0.025);
              if (g > b) {
                b = g;
                col = L.kind === 'DEAD' ? C.dead : L.owner === 'P' ? C.litP : enemyLit();
              }
            }
          return { b, col };
        },
        endU,
        nowSec,
        r.term * 0.6 + (r.side === 'left' ? 0 : 1.7),
        powered,
      );

      // element glyph on the tube (gray while unpowered)
      const gb = (isPrev ? 1 : 0.7) * (powered ? 1 : 0.85);
      const tint: RGB | undefined = powered ? undefined : C.offGlyph;
      const gk = glyphForKind(r.kind);
      const q = at(r.dots, glyphU(r.kind));
      drawGlyph(gk, q.x, q.y, nowSec, gb, 0.03, tint);
      // a SPLIT fork glyph at the branch of any multi-outcome terminal
      // (drawn once, on the primary route, just past the terminal stub)
      if (r.fork && r.primary) {
        const f = at(r.dots, 0.22);
        drawGlyph('SPLIT', f.x, f.y, nowSec, gb * 0.85, 0.026, tint);
      }
    }

    // JOINER glyphs — for each pair, mark the shared cell approach on both tubes
    for (const [ta, tb] of joiners) {
      for (const side of ['left', 'right'] as Side[]) {
        const layer = layerOf(board, side);
        // find the cell shared by terminal ta and terminal tb
        const cellsA = new Set(layer.terminals[ta]?.outcomes.map((o) => o.cell) ?? []);
        const sharedCell = layer.terminals[tb]?.outcomes.find((o) => cellsA.has(o.cell))?.cell;
        for (const term of [ta, tb]) {
          // match on the shared cell so the marker sits on the correct tube
          const r = routes.find(
            (rr) =>
              rr.side === side &&
              rr.term === term &&
              rr.kind === 'CLAIM' &&
              (sharedCell === undefined || rr.cell === sharedCell),
          );
          if (!r) continue;
          const tint: RGB | undefined = powered ? undefined : C.offGlyph;
          const q = at(r.dots, 0.82);
          drawGlyph('JOINER', q.x, q.y, nowSec, 0.75 * (powered ? 1 : 0.85), 0.026, tint);
        }
      }
    }

    // pulse heads
    for (const p of game.pulses) {
      const dots = routeMap.get(`${p.side}:${p.terminalId}:${p.cell}`);
      if (!dots) continue;
      // SHORT dies before the cell — cap the head at the spark
      const endU = endUForKind(p.kind);
      const u = Math.min(endU, p.elapsed / p.delay);
      const q = at(dots, u);
      const col = p.kind === 'DEAD' || p.kind === 'SHORT' ? C.dead : mix(p.owner === 'P' ? C.litP : enemyLit(), C.white, 0.4);
      field.dot(q.x, q.y, col[0]!, col[1]!, col[2]!, 9);
    }

    // cells (+ reach-preview highlight rings). A captured node becomes the
    // SOLVING solid of the circuit that took it — octahedron for the left
    // circuit, cube for the right (matching each side's terminals). Neutral
    // nodes stay a dim cluster.
    const enemySide: Side | null = game.playerSide ? (game.playerSide === 'left' ? 'right' : 'left') : null;
    const ownerSide = (o: Owner): Side | null => (o === 'P' ? game.playerSide : o === 'E' ? enemySide : null);
    const previewCells = new Map<number, OutcomeKind>();
    if (previewing) for (const r of routes) if (r.side === hoverSide && r.term === hoverTerm && r.kind !== 'DEAD') previewCells.set(r.cell, r.kind);
    for (let i = 0; i < 12; i++) {
      const [x, y] = cellPos(i);
      const owner = game.owners[i]!;
      const flash = game.claimFlash[i]! / 0.35;
      const oside = ownerSide(owner);
      if (oside && owner === 'E') {
        // host-captured node: the enemy theme's node mode/shape/colour
        const col = mix(enemy.color, C.white, flash * 0.5);
        drawMode(modeDots(enemy.node, enemy.shape, nowSec + i * 0.5), x, y, 0.042, col, 0.95 + flash);
      } else if (oside) {
        const shape: Shape = oside === 'left' ? 'octa' : 'cube';
        const col = mix(C.p, C.white, flash * 0.6);
        drawPrim(solving(shape, nowSec + i * 0.5), x, y, 0.04, col, 0.95 + flash);
      } else {
        const s = 0.026;
        const col = mix(C.cellN, C.white, flash * 0.7);
        for (let dx = -1; dx <= 1; dx++) for (let dy = -1; dy <= 1; dy++) field.dot(x + dx * s, y + dy * s, col[0]!, col[1]!, col[2]!, 4.5);
      }
      const pk = previewCells.get(i);
      if (pk) ring(x, y, 0.058, glyphKindColor(pk), 3, 0.9);
    }

    // terminals — searching primitives (octahedra left, cubes right). Grow a
    // touch on tall/portrait viewports so they don't read as plain dots.
    const termS = 0.05 * Math.min(1.45, 0.86 + 0.14 * vGain());
    for (const side of ['left', 'right'] as Side[]) {
      const shape: Shape = side === 'left' ? 'octa' : 'cube';
      const role = game.playerSide ? (side === game.playerSide ? 'P' : 'E') : 'N';
      const col = role === 'P' ? C.p : role === 'E' ? enemy.color : C.cellN;
      for (let i = 0; i < 8; i++) {
        const [x, y] = termPos(side, i);
        const hovered = hoverSide === side && hoverTerm === i && (game.phase === 'PLAN' || side === game.playerSide);
        const glow = hovered ? 1.6 : game.phase === 'PLAN' ? 0.7 + 0.35 * Math.sin(now / 240 + i) : 1;
        const c = hovered ? mix(col, C.white, 0.4) : col;
        if (role === 'E') drawMode(modeDots(enemy.terminal, enemy.shape, nowSec + i * 0.7), x, y, termS, c, glow);
        else drawPrim(searching(shape, nowSec + i * 0.7), x, y, termS, c, glow);
      }
    }

    const railY = 0.99 * vGain();
    for (let i = 0; i < game.pBudget; i++) field.dot(-0.24 + i * 0.05, -railY, C.p[0], C.p[1], C.p[2], 5);
    if (initial.skill >= 3) for (let i = 0; i < game.eBudget; i++) field.dot(-0.24 + i * 0.05, railY, enemy.color[0], enemy.color[1], enemy.color[2], 5);

    field.commit(renderer.getPixelRatio());
    composer.render();

    const frac = Math.max(0, game.timeLeft / board.params.tMatch);
    timerRing.setAttribute('r', String(3 + 18 * frac));
    timerRing.setAttribute('stroke', timerColor(frac));
    const c = game.counts();
    tally.textContent = `you c${board.spec.attacker} vs ${enemy.label} c${board.spec.defender} · you ${c.p}/12 · need 7`;
    if (game.phase === 'PLAN') {
      prompt.textContent = 'READ BOTH CIRCUITS (unpowered) — hover a terminal to preview its reach, then click a side to power it up';
      prompt.style.opacity = '1';
    } else if (game.phase === 'RUN') {
      prompt.textContent = 'fire your terminals · dead/short waste a pulse · later light wins the cell';
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
      composer.dispose();
      [timerSvg, prompt, tally, legend, overlay].forEach((n) => n.remove());
      renderer.dispose();
    },
  };
}

// preview ring tint by outcome kind (green for gains, amber for tools, red for traps)
const glyphKindColor = (k: OutcomeKind): RGB => {
  const gk = ((): GlyphKind => {
    switch (k) {
      case 'CLAIM':
      case 'REPEAT':
        return 'CLAIM';
      case 'LOCK':
        return 'LOCK';
      case 'DEAD':
        return 'DEAD';
      case 'SHORT':
        return 'SHORT';
      case 'FLIP':
        return 'FLIP';
      default:
        return 'CONVERT';
    }
  })();
  const info = ELEMENT_INFO.find((e) => e.kind === gk);
  return info?.tag === 'bad' ? [0.95, 0.4, 0.36] : info?.tag === 'tool' ? [0.95, 0.78, 0.4] : [0.4, 0.95, 0.7];
};
