import { drawOrb } from './render/thinkingOrbs.ts';

// Landing hub: pick a game from cards. Each card's hero is a live dotted motif
// from that game's own world (a rotating searching-orb globe for CONSTELLATION,
// a crawling network for TRACE, a flowing dotted tube for HDT) — the point-cloud
// identity is the preview.

export type GameName = 'constellation-orbs' | 'trace' | 'circuit-duel-2';

interface CardSpec {
  game: GameName;
  slot: string; // the keyboard shortcut / slot number, shown big
  name: string;
  desc: string;
  accent: string; // hex
  tint: readonly [number, number, number]; // 0..1 motif ink tint
  motif: 'globe' | 'tube' | 'network';
}

const CARDS: CardSpec[] = [
  {
    game: 'constellation-orbs',
    slot: '01',
    name: 'CONSTELLATION',
    desc: 'Orbit a cloud of thinking-orbs until one hidden angle snaps the scatter into a glyph, then extract it before the sweep.',
    accent: '#6fe0b8',
    tint: [0.44, 0.88, 0.72],
    motif: 'globe',
  },
  {
    game: 'trace',
    slot: '02',
    name: 'TRACE',
    desc: 'Capture a path across the network to a registry, then race your own tracer back to the entry before it traces you home.',
    accent: '#e0b070',
    tint: [0.95, 0.72, 0.4],
    motif: 'network',
  },
  {
    game: 'circuit-duel-2',
    slot: '03',
    name: 'HDT',
    desc: 'Read an unpowered circuit, take the better side, and fire pulses so your light claims 7 of 12 registers — dead ends, short-circuits and color-traps waste a pulse.',
    accent: '#8aa0ff',
    tint: [0.58, 0.68, 1.0],
    motif: 'tube',
  },
];

export interface Landing {
  show(): void;
  hide(): void;
  dispose(): void;
}

export function mountLanding(onPick: (game: GameName) => void, onRules: (gameName: string) => void): Landing {
  const mono = 'ui-monospace,SFMono-Regular,Menlo,monospace';
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const DPR = Math.min(2, window.devicePixelRatio || 1);

  const root = document.createElement('div');
  root.style.cssText =
    'position:fixed;inset:0;z-index:2147483644;display:flex;flex-direction:column;align-items:center;justify-content:center;' +
    'gap:2.4rem;padding:2rem;background:#07070c;overflow:auto';

  const head = document.createElement('div');
  head.style.cssText = 'text-align:center';
  head.innerHTML =
    `<div style="font:11px ${mono};letter-spacing:.3em;text-transform:uppercase;color:#5a5c6a">dotted-halftone intrusion puzzles</div>` +
    `<h1 style="margin:.7rem 0 0;font:400 24px/1.2 ${mono};letter-spacing:.16em;color:#dfe1ea">HACKING&nbsp;MINI-GAMES</h1>`;
  root.appendChild(head);

  const rowc = document.createElement('div');
  rowc.style.cssText = 'display:flex;gap:20px;flex-wrap:wrap;justify-content:center;max-width:600px';
  root.appendChild(rowc);

  const foot = document.createElement('div');
  foot.style.cssText = `font:11px ${mono};letter-spacing:.05em;color:#3f414d;text-align:center`;
  foot.textContent = 'press 1–3 anytime · more games soon';
  root.appendChild(foot);

  interface Motif {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    spec: CardSpec;
  }
  const motifs: Motif[] = [];

  for (const spec of CARDS) {
    const card = document.createElement('div');
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `play ${spec.name}`);
    card.style.cssText =
      `box-sizing:border-box;cursor:pointer;width:258px;background:#0e0f16;border:1px solid #1c1d29;` +
      `border-radius:12px;overflow:hidden;display:flex;flex-direction:column;transition:border-color .18s,transform .18s;` +
      `-webkit-tap-highlight-color:transparent;outline:none`;

    const preview = document.createElement('div');
    preview.style.cssText = 'position:relative;height:132px;background:#090a10;display:flex;align-items:center;justify-content:center';
    const canvas = document.createElement('canvas');
    canvas.style.cssText = 'display:block';
    canvas.width = Math.round(258 * DPR);
    canvas.height = Math.round(132 * DPR);
    canvas.style.width = '258px';
    canvas.style.height = '132px';
    preview.appendChild(canvas);
    const slot = document.createElement('div');
    slot.textContent = spec.slot;
    slot.style.cssText = `position:absolute;top:8px;left:12px;font:300 26px ${mono};letter-spacing:.05em;color:${spec.accent};opacity:.55`;
    preview.appendChild(slot);
    card.appendChild(preview);

    const bodyEl = document.createElement('div');
    bodyEl.style.cssText = 'padding:.9rem 1.1rem 1.1rem;text-align:left';
    bodyEl.innerHTML =
      `<div style="font:500 15px ${mono};letter-spacing:.14em;color:#e6e8f0">${spec.name}</div>` +
      `<div style="margin-top:.5rem;font:12px/1.6 ${mono};color:#71737f">${spec.desc}</div>`;
    // footer actions: PLAY (whole card) + Rules (opens the dev-log rules tab)
    const actions = document.createElement('div');
    actions.style.cssText = 'margin-top:.9rem;display:flex;align-items:center;gap:1rem';
    actions.innerHTML = `<span style="font:11px ${mono};letter-spacing:.14em;color:${spec.accent}">PLAY →</span>`;
    const rulesBtn = document.createElement('button');
    rulesBtn.type = 'button';
    rulesBtn.textContent = 'Rules';
    rulesBtn.style.cssText =
      `all:unset;cursor:pointer;font:11px ${mono};letter-spacing:.1em;color:#6a6c7a;border-bottom:1px solid transparent`;
    rulesBtn.addEventListener('mouseenter', () => (rulesBtn.style.color = '#c7c9d4'));
    rulesBtn.addEventListener('mouseleave', () => (rulesBtn.style.color = '#6a6c7a'));
    rulesBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      onRules(spec.name);
    });
    actions.appendChild(rulesBtn);
    bodyEl.appendChild(actions);
    card.appendChild(bodyEl);

    card.addEventListener('mouseenter', () => {
      card.style.borderColor = spec.accent;
      card.style.transform = 'translateY(-2px)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.borderColor = '#1c1d29';
      card.style.transform = 'none';
    });
    card.addEventListener('focus', () => (card.style.borderColor = spec.accent));
    card.addEventListener('blur', () => (card.style.borderColor = '#1c1d29'));
    card.addEventListener('click', () => onPick(spec.game));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        onPick(spec.game);
      }
    });

    rowc.appendChild(card);
    motifs.push({ canvas, ctx: canvas.getContext('2d')!, spec });
  }

  document.body.appendChild(root);

  // ── live motifs ────────────────────────────────────────────────────────────
  function tube(ctx: CanvasRenderingContext2D, w: number, h: number, t: number, tint: readonly [number, number, number]): void {
    const cx = w / 2;
    const cy = h / 2;
    const span = w * 0.78;
    const N = 34;
    const wob = (x: number): number => Math.sin(x * 3.1 + t * 0.6) * 9 + Math.sin(x * 6.7 - t * 0.9) * 4;
    // dim tube body
    for (let i = 0; i <= N; i++) {
      const f = i / N;
      const x = cx - span / 2 + f * span;
      const y = cy + wob(f);
      const g = 60;
      ctx.fillStyle = `rgba(${Math.round(g * tint[0])},${Math.round(g * tint[1])},${Math.round(g * tint[2])},0.9)`;
      ctx.beginPath();
      ctx.arc(x, y, 1.5, 0, Math.PI * 2);
      ctx.fill();
    }
    // flowing bright particles
    for (let p = 0; p < 3; p++) {
      const head = (t * 0.13 + p / 3) % 1;
      for (let s = 0; s < 6; s++) {
        const f = head - s * 0.03;
        if (f < 0 || f > 1) continue;
        const x = cx - span / 2 + f * span;
        const y = cy + wob(f);
        const a = (1 - s / 6) * 0.95;
        ctx.fillStyle = `rgba(${Math.round(210 * tint[0] + 45)},${Math.round(210 * tint[1] + 45)},${Math.round(210 * tint[2] + 45)},${a})`;
        ctx.beginPath();
        ctx.arc(x, y, 2.4 - s * 0.25, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  // a small crawling network: fixed nodes, faint edges, a packet running an edge
  function network(ctx: CanvasRenderingContext2D, w: number, h: number, t: number, tint: readonly [number, number, number]): void {
    const cx = w / 2;
    const cy = h / 2;
    const N = 7;
    const nodes: [number, number][] = [];
    for (let i = 0; i < N; i++) {
      const a = (i / N) * Math.PI * 2 + 0.6;
      const rr = 34 + 10 * Math.sin(i * 2.3);
      nodes.push([cx + Math.cos(a) * rr * 1.6, cy + Math.sin(a) * rr]);
    }
    const edges: [number, number][] = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [0, 3], [2, 5]];
    const col = (b: number): string => `rgba(${Math.round(210 * tint[0] + 30)},${Math.round(210 * tint[1] + 30)},${Math.round(210 * tint[2] + 30)},${b})`;
    for (const [a, b] of edges) {
      const [x1, y1] = nodes[a]!;
      const [x2, y2] = nodes[b]!;
      const steps = 8;
      for (let k = 1; k < steps; k++) {
        const f = k / steps;
        ctx.fillStyle = col(0.28);
        ctx.beginPath();
        ctx.arc(x1 + (x2 - x1) * f, y1 + (y2 - y1) * f, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    // a packet crawling edge 0→3→4 (the "tracer")
    const path = [nodes[0]!, nodes[3]!, nodes[4]!, nodes[5]!];
    const seg = (t * 0.5) % (path.length - 1);
    const si = Math.floor(seg);
    const f = seg - si;
    const p0 = path[si]!;
    const p1 = path[si + 1]!;
    ctx.fillStyle = col(1);
    ctx.beginPath();
    ctx.arc(p0[0] + (p1[0] - p0[0]) * f, p0[1] + (p1[1] - p0[1]) * f, 3, 0, Math.PI * 2);
    ctx.fill();
    for (let i = 0; i < N; i++) {
      const captured = i <= si; // nodes the packet has passed light up
      ctx.fillStyle = col(captured ? 0.9 : 0.5);
      ctx.beginPath();
      ctx.arc(nodes[i]![0], nodes[i]![1], captured ? 2.6 : 2, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function frame(m: Motif, t: number): void {
    const w = 258;
    const h = 132;
    m.ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    m.ctx.clearRect(0, 0, w, h);
    if (m.spec.motif === 'globe') drawOrb(m.ctx, 'searching', w / 2, h / 2, 42, t * 1.4, m.spec.tint, 1);
    else if (m.spec.motif === 'network') network(m.ctx, w, h, t, m.spec.tint);
    else tube(m.ctx, w, h, t, m.spec.tint);
  }

  let raf = 0;
  let running = false;
  function loop(): void {
    const t = performance.now() / 1000;
    for (const m of motifs) frame(m, t);
    if (running) raf = requestAnimationFrame(loop);
  }
  function start(): void {
    if (running) return;
    if (reduced) {
      for (const m of motifs) frame(m, 0.8);
      return;
    }
    running = true;
    raf = requestAnimationFrame(loop);
  }
  function stop(): void {
    running = false;
    cancelAnimationFrame(raf);
  }

  return {
    show(): void {
      root.style.display = 'flex';
      start();
    },
    hide(): void {
      root.style.display = 'none';
      stop();
    },
    dispose(): void {
      stop();
      root.remove();
    },
  };
}
