import * as THREE from 'three';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { DotField } from '../../render/dotfield.ts';
import { generateBoard } from './generate.ts';
import { TraceGame } from './game.ts';
import { pDetect, type Board, type NodeType } from './model.ts';
import { emotionFace, type EmotionId } from '../../render/brailleEmotions.ts';
import { SITREP, DEVLOG, TRACEBACK, pick } from './flavor.ts';
import type { Difficulty, Skill } from '../../engine/session.ts';

// TRACE renderer — the graph as a dotted network: nodes are rating-weighted dot
// clusters with a per-type silhouette, edges are dotted runs, and the tracer is
// a bright red packet crawling your captured territory with a shrinking
// countdown ring. Click a lit node to capture (RUN) or to retreat home (EXFIL);
// FREEZE halts the tracer, NUKE captures one node silently.

type RGB = readonly [number, number, number];
const C: Record<string, RGB> = {
  entry: [0.42, 0.88, 0.72],
  registry: [1.0, 0.82, 0.4],
  store: [0.92, 0.72, 0.36],
  alarm: [0.9, 0.4, 0.36],
  spam: [0.72, 0.52, 1.0],
  dir: [0.42, 0.46, 0.56],
  player: [0.36, 0.92, 0.64],
  tracer: [1.0, 0.34, 0.3],
  white: [1, 1, 1],
  dim: [0.16, 0.17, 0.22],
};
const mix = (a: RGB, b: RGB, t: number): RGB => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
const typeColor = (ty: NodeType): RGB =>
  ty === 'ENTRY' ? C.entry! : ty === 'REGISTRY' ? C.registry! : ty === 'STORE' ? C.store! : ty === 'ALARM' ? C.alarm! : ty === 'SPAM' ? C.spam! : C.dir!;

export interface Mounted {
  regenerate(difficulty: Difficulty, seed: string): void;
  dispose(): void;
}

export function mountTrace(canvas: HTMLCanvasElement, initial: { difficulty: Difficulty; seed: string; skill: Skill }): Mounted {
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x05060a, 1);
  const scene = new THREE.Scene();
  const HALF = 1.12;
  const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.01, 100);
  camera.position.set(0, 0, 4);
  camera.lookAt(0, 0, 0);
  const field = new DotField(4000, { additive: true });
  scene.add(field.points);
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  composer.addPass(new UnrealBloomPass(new THREE.Vector2(1, 1), 0.7, 0.6, 0.2));
  composer.addPass(new OutputPass());

  const mono = 'ui-monospace,SFMono-Regular,Menlo,monospace';
  const mk = (css: string): HTMLElement => {
    const e = document.createElement('div');
    e.style.cssText = css;
    document.body.appendChild(e);
    return e;
  };
  const prompt = mk(`position:fixed;left:50%;top:12px;transform:translateX(-50%);font:12px ${mono};color:#9a9aa6;pointer-events:none;text-align:center`);
  const tally = mk(`position:fixed;left:12px;bottom:12px;font:11px ${mono};color:#6a6a76;pointer-events:none;line-height:1.5`);
  const overlay = mk(`position:fixed;inset:0;display:none;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:rgba(5,6,10,.6);font:${mono};text-align:center;pointer-events:none`);
  const bar = mk('position:fixed;left:50%;bottom:14px;transform:translateX(-50%);display:flex;gap:10px;z-index:5');
  const btn = (label: string): HTMLButtonElement => {
    const b = document.createElement('button');
    b.textContent = label;
    b.style.cssText =
      `all:unset;cursor:pointer;font:11px ${mono};letter-spacing:.08em;color:#b6b8c4;padding:7px 12px;` +
      'border:1px solid #262735;border-radius:7px;background:rgba(14,15,22,.7);-webkit-tap-highlight-color:transparent';
    bar.appendChild(b);
    return b;
  };
  const freezeBtn = btn('❄ FREEZE');
  const nukeBtn = btn('✚ NUKE');

  // ── flavor terminal ─────────────────────────────────────────────────────────
  // An old-school CRT window tucked in the top-left gap. A braille face reacts to
  // the run (scan → suspicious → awe / scared / love) and a scrolling log spits
  // out sitreps, dev notes, and — once you're made — the counter-trace.
  const term = document.createElement('div');
  term.style.cssText =
    `position:fixed;left:10px;top:10px;z-index:5;width:clamp(188px,42vw,268px);` +
    `background:rgba(3,10,6,.82);border:1px solid #1c4a30;border-radius:4px;` +
    `box-shadow:0 0 14px rgba(20,90,50,.22),inset 0 0 22px rgba(10,40,24,.4);` +
    `font:10px/1.4 ${mono};color:#5fd08a;overflow:hidden;pointer-events:none`;
  term.innerHTML =
    `<div style="display:flex;align-items:center;gap:5px;padding:3px 8px;background:rgba(20,60,36,.35);` +
    `border-bottom:1px solid #17402a;color:#7fe0a4;letter-spacing:.1em;font-size:8.5px">` +
    `<span style="color:#2f7a4c">●●●</span>&nbsp;trace.sh — root@breach</div>` +
    `<pre class="cx-face" style="margin:0;padding:9px 0 5px;text-align:center;font-size:19px;line-height:.92;` +
    `letter-spacing:3px;text-shadow:0 0 9px currentColor;white-space:pre"></pre>` +
    `<div class="cx-log" style="padding:4px 8px 7px;font-size:8.5px;line-height:1.5;min-height:46px;` +
    `border-top:1px solid #123420;color:#3f9d68"></div>`;
  document.body.appendChild(term);
  const faceEl = term.querySelector('.cx-face') as HTMLPreElement;
  const logEl = term.querySelector('.cx-log') as HTMLDivElement;

  // per-emotion CRT tint
  const EMO_COL: Record<EmotionId, string> = {
    scan: '#5fd08a',
    suspicious: '#6fb8e0',
    awe: '#7fd0ff',
    glee: '#ffd166',
    love: '#ff9ec7',
    sad: '#7f9fd0',
    scared: '#e0705a',
    angry: '#ff6b5a',
    worried: '#c0a0e0',
  };

  // flavor state (reset per board in resetFlavor)
  let emo: EmotionId = 'scan';
  let emoHold = 0; // ms — a transient emotion holds until here, then reverts to base
  let logLines: string[] = [];
  let evt = 0; // salt for deterministic message picks
  let logDirty = true;
  // prev-frame snapshot for edge detection
  let pCapNode = -1;
  let pTrips = 0;
  let pPhase = '';
  let pLoot = 0;

  const setEmo = (id: EmotionId, holdMs: number): void => {
    emo = id;
    emoHold = performance.now() + holdMs;
  };
  const pushMsg = (m: string): void => {
    logLines.push(m);
    if (logLines.length > 4) logLines.shift();
    logDirty = true;
  };
  const logPick = (list: string[]): void => pushMsg(pick(list, board.seed, evt++));
  const baseEmo = (): EmotionId =>
    game.phase === 'WON' ? 'love' : game.phase === 'LOST_CRIT' ? 'angry' : game.phase === 'LOST_SOFT' ? 'sad' : game.tracer ? 'worried' : game.capturing ? 'suspicious' : 'scan';

  function resetFlavor(): void {
    emo = 'scan';
    emoHold = 0;
    logLines = [];
    evt = 0;
    logDirty = true;
    pCapNode = -1;
    pTrips = 0;
    pPhase = game.phase;
    pLoot = 0;
    pushMsg('uplink established — mapping the subnet');
    logPick(DEVLOG);
  }

  let board!: Board;
  let game!: TraceGame;
  let mouse: [number, number] | null = null;
  let armNuke = false;

  function build(difficulty: Difficulty, seed: string): void {
    board = generateBoard(difficulty, seed);
    game = new TraceGame(board, initial.skill);
    armNuke = false;
    overlay.style.display = 'none';
    resetFlavor();
    (window as unknown as { __trace?: TraceGame }).__trace = game; // debug/headless hook
  }
  build(initial.difficulty, initial.seed);

  function resize(): void {
    const w = window.innerWidth;
    const h = window.innerHeight;
    renderer.setSize(w, h);
    composer.setSize(w, h);
    const a = w / h;
    camera.top = HALF;
    camera.bottom = -HALF;
    camera.left = -HALF * a;
    camera.right = HALF * a;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  const toWorld = (cx: number, cy: number): [number, number] => {
    const r = canvas.getBoundingClientRect();
    return [(((cx - r.left) / r.width) * 2 - 1) * camera.right, (-((cy - r.top) / r.height) * 2 + 1) * camera.top];
  };
  const nearestNode = (wx: number, wy: number, within = 0.12): number => {
    let best = -1;
    let bd = within * within;
    for (const n of board.nodes) {
      const d = (n.pos[0] - wx) ** 2 + (n.pos[1] - wy) ** 2;
      if (d < bd) {
        bd = d;
        best = n.id;
      }
    }
    return best;
  };
  canvas.addEventListener('pointermove', (e) => (mouse = toWorld(e.clientX, e.clientY)));
  canvas.addEventListener('pointerup', (e) => {
    const [wx, wy] = toWorld(e.clientX, e.clientY);
    const id = nearestNode(wx, wy);
    if (id < 0) return;
    if (game.phase === 'EXFIL') {
      game.retreat(id);
    } else if (armNuke) {
      if (game.nuke(id)) armNuke = false;
    } else {
      game.beginCapture(id);
    }
  });
  freezeBtn.addEventListener('click', () => game.freeze());
  nukeBtn.addEventListener('click', () => (armNuke = game.nukes > 0 && !armNuke));

  // ── dot helpers ─────────────────────────────────────────────────────────────
  const dotCluster = (x: number, y: number, col: RGB, count: number, spread: number, size: number, b = 1): void => {
    field.dot(x, y, col[0] * b, col[1] * b, col[2] * b, size + 1.5, 1);
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + i * 0.7;
      const rr = spread * (0.4 + 0.6 * ((i * 7) % 5) / 5);
      field.dot(x + Math.cos(a) * rr, y + Math.sin(a) * rr, col[0] * b, col[1] * b, col[2] * b, size, 0.95);
    }
  };
  const ring = (x: number, y: number, r: number, col: RGB, n: number, size: number, b = 1, phase = 0): void => {
    for (let k = 0; k < n; k++) {
      const a = (k / n) * Math.PI * 2 + phase;
      field.dot(x + Math.cos(a) * r, y + Math.sin(a) * r, col[0] * b, col[1] * b, col[2] * b, size, 0.9);
    }
  };
  const diamond = (x: number, y: number, r: number, col: RGB, b = 1): void => {
    for (const [dx, dy] of [[0, 1], [1, 0], [0, -1], [-1, 0]] as const) field.dot(x + dx * r, y + dy * r, col[0] * b, col[1] * b, col[2] * b, 3.2, 0.95);
  };
  const xMark = (x: number, y: number, r: number, col: RGB, b = 1): void => {
    for (let k = -2; k <= 2; k++) {
      field.dot(x + k * r * 0.5, y + k * r * 0.5, col[0] * b, col[1] * b, col[2] * b, 2.6, 0.9);
      field.dot(x + k * r * 0.5, y - k * r * 0.5, col[0] * b, col[1] * b, col[2] * b, 2.6, 0.9);
    }
  };
  const edgeDots = (a: readonly [number, number], b: readonly [number, number], col: RGB, bright: number, oneWay: boolean, t: number): void => {
    const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
    const steps = Math.max(4, Math.round(len / 0.045));
    for (let k = 1; k < steps; k++) {
      const f = k / steps;
      let bb = bright;
      if (oneWay) {
        const head = (t * 0.25) % 1;
        const d = Math.abs(f - head);
        bb = bright * (0.5 + 0.9 * Math.exp(-(d * d) / 0.02)); // a bead drifts a→b to show direction
      }
      field.dot(a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, col[0] * bb, col[1] * bb, col[2] * bb, 2.1, 0.8);
    }
  };

  function showOverlay(): void {
    const r = game.result();
    const won = game.phase === 'WON';
    const title = won ? '◆ EXTRACTED' : game.phase === 'LOST_CRIT' ? '⚠ TRACED' : '✕ JACKED OUT';
    const color = won ? '#8fd0b6' : game.phase === 'LOST_CRIT' ? '#d0605a' : '#e0b070';
    overlay.innerHTML =
      `<div style="font-size:22px;letter-spacing:.2em;color:${color}">${title}</div>` +
      `<div style="font-size:12px;color:#9a9aa6">loot ${r.loot} · ${r.trips} detection(s) · margin ${r.margin}</div>` +
      `<div style="font-size:11px;color:#55555f;margin-top:8px">press R or tap ⟳ to run again</div>`;
    overlay.style.display = 'flex';
  }

  let lastT = performance.now();
  let raf = 0;
  function loop(): void {
    const now = performance.now();
    const t = now / 1000;
    const dt = Math.min(0.05, (now - lastT) / 1000);
    lastT = now;
    game.tick(dt);

    // ── flavor events: diff this frame against the last ──────────────────────
    {
      const capNode = game.capturing ? game.capturing.node : -1;
      const detected = game.trips > pTrips;

      // a capture just began → run a check (suspicious)
      if (pCapNode === -1 && capNode >= 0) {
        setEmo('suspicious', 900);
        logPick(DEVLOG);
      }
      // a capture just finished (node now owned) → sitrep, and awe on a tough pass
      if (pCapNode >= 0 && capNode === -1 && game.owner[pCapNode] === 'P') {
        const nd = board.nodes[pCapNode]!;
        if (nd.type === 'STORE' && game.loot > pLoot) {
          setEmo('awe', 1200);
          logPick(SITREP);
        } else if (nd.type !== 'REGISTRY' && !detected) {
          if (pDetect(nd.rating, game.captureLevel) >= 0.4) setEmo('awe', 1500);
          logPick(SITREP);
        }
      }
      // got made mid-run → the counter-trace wakes (scared)
      if (detected && game.phase !== 'EXFIL' && game.phase !== 'WON') {
        setEmo('scared', 1500);
        logPick(TRACEBACK);
      }
      // registry cracked → prize in hand, but the trace is now inbound
      if (game.phase === 'EXFIL' && pPhase !== 'EXFIL') {
        setEmo('glee', 1400);
        pushMsg('SITREP: database exfiltrated — trace inbound, run home');
      }
      // terminal states
      if (game.phase === 'WON' && pPhase !== 'WON') {
        setEmo('glee', 2600);
        pushMsg('◆ EXTRACTION COMPLETE — gone before the trace closed');
      } else if (game.phase === 'LOST_CRIT' && pPhase !== 'LOST_CRIT') {
        setEmo('angry', 3000);
        pushMsg('⚠ TRACED — they walked it back to your door');
      } else if (game.phase === 'LOST_SOFT' && pPhase !== 'LOST_SOFT') {
        setEmo('sad', 3000);
        pushMsg('✕ JACKED OUT — connection dropped, run aborted');
      }

      if (now > emoHold) emo = baseEmo();
      pCapNode = capNode;
      pTrips = game.trips;
      pPhase = game.phase;
      pLoot = game.loot;

      faceEl.textContent = emotionFace(emo, t);
      faceEl.style.color = EMO_COL[emo] ?? '#5fd08a';
      if (logDirty) {
        logEl.innerHTML = logLines
          .map((m, i) => {
            const last = i === logLines.length - 1;
            const op = (0.45 + 0.55 * ((i + 1) / logLines.length)).toFixed(2);
            return `<div style="color:${last ? '#7fe0a4' : '#3f9d68'};opacity:${op}">› ${m}</div>`;
          })
          .join('');
        logDirty = false;
      }
    }

    const hover = mouse ? nearestNode(mouse[0], mouse[1]) : -1;
    const capSet = new Set(game.phase === 'EXFIL' ? game.retreatable() : game.capturable());

    field.begin();

    // edges
    for (const e of board.edges) {
      const a = board.nodes[e.a]!.pos;
      const b = board.nodes[e.b]!.pos;
      const lit = game.owner[e.a] === 'P' && game.owner[e.b] === 'P';
      edgeDots(a, b, lit ? C.player! : C.dim!, lit ? 0.5 : 0.32, e.oneWay, t);
    }

    // nodes
    for (const n of board.nodes) {
      const owned = game.owner[n.id] === 'P';
      const base = typeColor(n.type);
      const isTracer = game.tracer && game.tracer.node === n.id;
      let col = owned ? C.player! : mix(base, C.dim!, 0.35);
      if (isTracer) col = C.tracer!;
      const canAct = capSet.has(n.id);
      const hovered = hover === n.id && canAct;
      const pulse = canAct ? 0.85 + 0.15 * Math.sin(now / 220) : 1;
      const bright = (owned ? 1.15 : n.type === 'REGISTRY' || n.type === 'ENTRY' ? 1.0 : 0.7) * pulse * (hovered ? 1.5 : 1);
      const spread = 0.02 + 0.006 * n.rating;
      dotCluster(n.pos[0], n.pos[1], hovered ? mix(col, C.white!, 0.4) : col, 3 + n.rating * 2, spread, 3 + n.rating * 0.5, bright);

      // type silhouette
      if (n.type === 'REGISTRY') ring(n.pos[0], n.pos[1], 0.055, C.registry!, 12, 2.4, 1, now / 600);
      else if (n.type === 'ENTRY') ring(n.pos[0], n.pos[1], 0.05, C.entry!, 10, 2.2, 1);
      else if (n.type === 'STORE') diamond(n.pos[0], n.pos[1], 0.05, C.store!, owned ? 0.6 : 1);
      else if (n.type === 'ALARM') xMark(n.pos[0], n.pos[1], 0.05, C.alarm!);
      else if (n.type === 'SPAM') ring(n.pos[0], n.pos[1], 0.04, C.spam!, 6, 2.2, 1, now / 300);
      if (game.fortified.has(n.id)) ring(n.pos[0], n.pos[1], 0.07, C.player!, 8, 2, 0.7);
    }

    // capture-in-progress ring
    if (game.capturing) {
      const n = board.nodes[game.capturing.node]!;
      const f = game.capturing.elapsed / game.capturing.total;
      const seg = Math.round(16 * f);
      for (let k = 0; k < seg; k++) {
        const a = -Math.PI / 2 + (k / 16) * Math.PI * 2;
        field.dot(n.pos[0] + Math.cos(a) * 0.065, n.pos[1] + Math.sin(a) * 0.065, C.player![0], C.player![1], C.player![2], 3, 0.95);
      }
    }

    // tracer packet + countdown ring on its next node
    if (game.tracer) {
      const cur = board.nodes[game.tracer.node]!.pos;
      const nx = board.nodes[game.tracer.next]!.pos;
      const p = 1 - Math.max(0, Math.min(1, game.tracer.countdown / (board.params.tracerBase || 1)));
      const hx = cur[0] + (nx[0] - cur[0]) * p;
      const hy = cur[1] + (nx[1] - cur[1]) * p;
      const fl = 0.7 + 0.3 * Math.sin(now / 90);
      field.dot(hx, hy, C.tracer![0] * fl, C.tracer![1] * fl, C.tracer![2] * fl, 9);
      ring(nx[0], nx[1], 0.05 * (1 - p) + 0.02, C.tracer!, 10, 2.2, fl);
    }

    // player token in EXFIL
    if (game.phase === 'EXFIL') {
      let px = board.nodes[game.playerAt]!.pos[0];
      let py = board.nodes[game.playerAt]!.pos[1];
      if (game.moving) {
        const to = board.nodes[game.moving.to]!.pos;
        const f = game.moving.elapsed / game.moving.total;
        px += (to[0] - px) * f;
        py += (to[1] - py) * f;
      }
      const fl = 0.8 + 0.2 * Math.sin(now / 120);
      field.dot(px, py, C.white![0] * fl, C.white![1] * fl, C.white![2] * fl, 10);
      ring(px, py, 0.03, C.player!, 8, 2.4, fl);
    }

    field.commit(renderer.getPixelRatio());
    composer.render();

    // HUD
    const risk = hover >= 0 && capSet.has(hover) && game.phase !== 'EXFIL' ? Math.round(pDetect(board.nodes[hover]!.rating, game.captureLevel) * 100) : -1;
    freezeBtn.style.opacity = game.freezes > 0 && game.tracer ? '1' : '0.4';
    nukeBtn.style.opacity = game.nukes > 0 ? '1' : '0.4';
    nukeBtn.style.borderColor = armNuke ? '#6fe0b8' : '#262735';
    freezeBtn.textContent = `❄ FREEZE ${game.freezes}`;
    nukeBtn.textContent = `✚ NUKE ${game.nukes}`;
    if (game.phase === 'PLAN' || game.phase === 'RUN') {
      prompt.textContent = armNuke ? 'NUKE armed — click a node to capture it silently' : 'capture toward a REGISTRY ◇ · risk rises with rating · avoid the ✕ alarms';
    } else if (game.phase === 'EXFIL') {
      prompt.textContent = 'REGISTRY TAKEN — retreat to your ENTRY ◎ before the tracer traces you home';
    }
    prompt.style.opacity = game.over ? '0' : '1';
    tally.innerHTML =
      `D${board.difficulty} · ${board.seed}<br>` +
      `loot ${game.loot} · tracer ${game.tracer ? `${game.tracerHopsToEntry()} hops out` : 'dormant'}` +
      (risk >= 0 ? `<br><span style="color:#e0b070">detect ${risk}%</span>` : '');
    bar.style.display = game.over ? 'none' : 'flex';
    if (game.over && overlay.style.display === 'none') showOverlay();

    raf = requestAnimationFrame(loop);
  }
  loop();

  return {
    regenerate: (d, seed) => build(d, seed),
    dispose() {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      field.dispose();
      composer.dispose();
      [prompt, tally, overlay, bar, term].forEach((n) => n.remove());
      renderer.dispose();
    },
  };
}
