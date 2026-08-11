import { drawOrb } from './render/thinkingOrbs.ts';

// Landing hub: pick a game from cards. Each card's hero is a live dotted motif
// from that game's own world (a rotating searching-orb globe for CONSTELLATION,
// a flowing dotted tube for TUBES) — the point-cloud identity is the preview.
// Only the two finished, distinct games are offered for now; the number keys
// still reach the others.

export type GameName = 'constellation' | 'transfer' | 'circuit' | 'shapes' | 'tubes' | 'constellation-orbs';

interface CardSpec {
  game: GameName;
  slot: string; // the keyboard shortcut / slot number, shown big
  name: string;
  desc: string;
  accent: string; // hex
  tint: readonly [number, number, number]; // 0..1 motif ink tint
  motif: 'globe' | 'tube';
}

const CARDS: CardSpec[] = [
  {
    game: 'constellation',
    slot: '01',
    name: 'CONSTELLATION',
    desc: 'Orbit a cloud of signal until one hidden angle snaps the scatter into a glyph, then extract it before the sweep.',
    accent: '#6fe0b8',
    tint: [0.44, 0.88, 0.72],
    motif: 'globe',
  },
  {
    game: 'tubes',
    slot: '05',
    name: 'TUBES',
    desc: 'Read two live circuits, take the better side, and fire terminals so your light claims the registers — dead stubs waste a pulse.',
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

export function mountLanding(onPick: (game: GameName) => void): Landing {
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
  foot.textContent = 'press 1–5 anytime · more games soon';
  root.appendChild(foot);

  interface Motif {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    spec: CardSpec;
  }
  const motifs: Motif[] = [];

  for (const spec of CARDS) {
    const card = document.createElement('button');
    card.type = 'button';
    card.setAttribute('aria-label', `play ${spec.name}`);
    card.style.cssText =
      `all:unset;box-sizing:border-box;cursor:pointer;width:258px;background:#0e0f16;border:1px solid #1c1d29;` +
      `border-radius:12px;overflow:hidden;display:flex;flex-direction:column;transition:border-color .18s,transform .18s;` +
      `-webkit-tap-highlight-color:transparent`;

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
      `<div style="margin-top:.5rem;font:12px/1.6 ${mono};color:#71737f">${spec.desc}</div>` +
      `<div style="margin-top:.9rem;font:11px ${mono};letter-spacing:.14em;color:${spec.accent}">PLAY →</div>`;
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

  function frame(m: Motif, t: number): void {
    const w = 258;
    const h = 132;
    m.ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    m.ctx.clearRect(0, 0, w, h);
    if (m.spec.motif === 'globe') drawOrb(m.ctx, 'searching', w / 2, h / 2, 42, t * 1.4, m.spec.tint, 1);
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
