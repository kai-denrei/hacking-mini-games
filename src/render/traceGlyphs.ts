import type { GlyphDot } from './circuitElements.ts';

// Node-type glyphs for TRACE's Rules glossary — small dot-drawn silhouettes that
// match the in-game node rendering (trace/view.ts): ENTRY/REGISTRY concentric
// rings, STORE diamond, ALARM ✕, SPAM ring, DIR cluster, and the red TRACER
// packet. Same GlyphDot format as circuitElements, so the panel paints both the
// same way. Single source of truth shared with the renderer's intent.

export type TraceGlyphKind = 'ENTRY' | 'REGISTRY' | 'DIR' | 'STORE' | 'ALARM' | 'SPAM' | 'TRACER';

const C = {
  entry: [0.42, 0.88, 0.72],
  registry: [1.0, 0.82, 0.4],
  store: [0.92, 0.72, 0.36],
  alarm: [0.9, 0.4, 0.36],
  spam: [0.72, 0.52, 1.0],
  dir: [0.5, 0.54, 0.64],
  tracer: [1.0, 0.34, 0.3],
} as const;

const ring = (out: GlyphDot[], r: number, n: number, col: readonly [number, number, number], dr = 0.13, a = 1): void => {
  for (let k = 0; k < n; k++) {
    const t = (k / n) * Math.PI * 2;
    out.push({ x: Math.cos(t) * r, y: Math.sin(t) * r, r: dr, col, a });
  }
};

export function traceGlyphDots(kind: TraceGlyphKind, _t: number): GlyphDot[] {
  const out: GlyphDot[] = [];
  if (kind === 'ENTRY') {
    ring(out, 0.62, 10, C.entry);
    out.push({ x: 0, y: 0, r: 0.18, col: C.entry, a: 1 });
  } else if (kind === 'REGISTRY') {
    ring(out, 0.72, 12, C.registry);
    ring(out, 0.38, 7, C.registry);
    out.push({ x: 0, y: 0, r: 0.18, col: C.registry, a: 1 });
  } else if (kind === 'DIR') {
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2 + 0.6;
      const rr = 0.26 + 0.1 * (i % 2);
      out.push({ x: Math.cos(a) * rr, y: Math.sin(a) * rr, r: 0.14, col: C.dir, a: 0.9 });
    }
    out.push({ x: 0, y: 0, r: 0.16, col: C.dir, a: 1 });
  } else if (kind === 'STORE') {
    for (const [dx, dy] of [[0, 1], [1, 0], [0, -1], [-1, 0]] as const) out.push({ x: dx * 0.6, y: dy * 0.6, r: 0.16, col: C.store, a: 1 });
    out.push({ x: 0, y: 0, r: 0.16, col: C.store, a: 0.9 });
  } else if (kind === 'ALARM') {
    for (let k = -2; k <= 2; k++) {
      out.push({ x: k * 0.28, y: k * 0.28, r: 0.14, col: C.alarm, a: 1 });
      out.push({ x: k * 0.28, y: -k * 0.28, r: 0.14, col: C.alarm, a: 1 });
    }
  } else if (kind === 'SPAM') {
    ring(out, 0.5, 6, C.spam);
    out.push({ x: 0, y: 0, r: 0.15, col: C.spam, a: 0.85 });
  } else {
    // TRACER — a bright packet with a short trail
    out.push({ x: 0.35, y: 0, r: 0.28, col: C.tracer, a: 1 });
    for (let k = 1; k <= 4; k++) out.push({ x: 0.35 - k * 0.22, y: 0, r: 0.18 - k * 0.02, col: C.tracer, a: 0.9 - k * 0.18 });
  }
  return out;
}

export const TRACE_NODE_INFO: { kind: TraceGlyphKind; name: string; meaning: string; tag: 'good' | 'bad' | 'tool' }[] = [
  { kind: 'ENTRY', name: 'Entry', meaning: 'Your way in and out. If the tracer reaches it, you are traced — critical loss.', tag: 'good' },
  { kind: 'REGISTRY', name: 'Registry', meaning: 'The goal. Capture one to grab the data — which trips the alarm and starts the race home.', tag: 'good' },
  { kind: 'DIR', name: 'Node', meaning: 'A plain stepping-stone. Its rating sets the capture time and detection risk.', tag: 'tool' },
  { kind: 'STORE', name: 'Store', meaning: 'Off-path loot. Grab it for bonus, but every extra capture raises your detection odds.', tag: 'tool' },
  { kind: 'ALARM', name: 'Alarm', meaning: 'Hazard. A failed capture here speeds the tracer up for the rest of the run.', tag: 'bad' },
  { kind: 'SPAM', name: 'Spam', meaning: 'Capturing it slows the tracer, but detection is guaranteed — a deliberate speed bump.', tag: 'bad' },
  { kind: 'TRACER', name: 'Tracer', meaning: 'The counter-process. On detection it crawls your captured nodes back toward Entry.', tag: 'bad' },
];
