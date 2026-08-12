/**
 * circuitElements.ts
 * Single source of truth for HDT wire-element glyphs.
 * Pure data — no DOM or Three.js dependency.
 * Consumers (DotField renderer, Rules glossary canvas) scale/offset these dots.
 */

export type GlyphKind = 'CLAIM' | 'SPLIT' | 'LOCK' | 'JOINER' | 'DEAD' | 'SHORT' | 'FLIP' | 'CONVERT';

export interface GlyphDot {
  x: number;
  y: number;
  r: number;
  col: readonly [number, number, number];
  a: number;
}

/** Color palette */
const GREEN: readonly [number, number, number] = [0.4, 0.95, 0.7];
const RED: readonly [number, number, number] = [0.95, 0.4, 0.36];
const AMBER: readonly [number, number, number] = [0.95, 0.78, 0.4];
const GOLD: readonly [number, number, number] = [1.0, 0.82, 0.4];
const ORANGE: readonly [number, number, number] = [1.0, 0.6, 0.3];

function dot(x: number, y: number, r: number, col: readonly [number, number, number], a: number): GlyphDot {
  return { x, y, r, col, a };
}

/**
 * CLAIM — single bright dot at center.
 * One dominant dot representing a claim point.
 */
function glyphCLAIM(_t: number): GlyphDot[] {
  return [
    dot(0, 0, 0.38, GREEN, 1.0),
    // faint halo
    dot(0, 0, 0.6, GREEN, 0.18),
  ];
}

/**
 * SPLIT — one dot splitting into two (fork shape, Y layout).
 * Stem at bottom, two branches diverging upward.
 */
function glyphSPLIT(_t: number): GlyphDot[] {
  return [
    // stem
    dot(0, -0.75, 0.15, GREEN, 0.9),
    dot(0, -0.45, 0.15, GREEN, 0.85),
    dot(0, -0.15, 0.15, GREEN, 0.8),
    // fork node
    dot(0, 0.1, 0.2, GREEN, 1.0),
    // left branch
    dot(-0.3, 0.42, 0.14, GREEN, 0.85),
    dot(-0.55, 0.7, 0.14, GREEN, 0.8),
    dot(-0.7, 0.9, 0.18, GREEN, 0.9),
    // right branch
    dot(0.3, 0.42, 0.14, GREEN, 0.85),
    dot(0.55, 0.7, 0.14, GREEN, 0.8),
    dot(0.7, 0.9, 0.18, GREEN, 0.9),
  ];
}

/**
 * LOCK — ◈ concentric ring of dots + center dot (gold).
 * 8-dot ring at radius ~0.65, plus a solid center.
 */
function glyphLOCK(t: number): GlyphDot[] {
  const dots: GlyphDot[] = [];
  const N = 8;
  const r = 0.65;
  for (let i = 0; i < N; i++) {
    const angle = (i / N) * Math.PI * 2 + t * 0.4;
    const x = Math.cos(angle) * r;
    const y = Math.sin(angle) * r;
    dots.push(dot(x, y, 0.15, GOLD, 0.9));
  }
  // center
  dots.push(dot(0, 0, 0.22, GOLD, 1.0));
  // inner ring (concentric ◈)
  const N2 = 4;
  for (let i = 0; i < N2; i++) {
    const angle = (i / N2) * Math.PI * 2 + Math.PI / 4;
    dots.push(dot(Math.cos(angle) * 0.33, Math.sin(angle) * 0.33, 0.11, GOLD, 0.75));
  }
  return dots;
}

/**
 * JOINER — ⋈ two branches converging into one (merge).
 * Two stems from upper-left and upper-right meeting at center, then single stem down.
 */
function glyphJOINER(_t: number): GlyphDot[] {
  return [
    // left branch in
    dot(-0.7, 0.85, 0.16, AMBER, 0.85),
    dot(-0.5, 0.55, 0.14, AMBER, 0.8),
    dot(-0.28, 0.3, 0.14, AMBER, 0.8),
    // right branch in
    dot(0.7, 0.85, 0.16, AMBER, 0.85),
    dot(0.5, 0.55, 0.14, AMBER, 0.8),
    dot(0.28, 0.3, 0.14, AMBER, 0.8),
    // merge node
    dot(0, 0.05, 0.22, AMBER, 1.0),
    // single stem out
    dot(0, -0.25, 0.15, AMBER, 0.9),
    dot(0, -0.55, 0.15, AMBER, 0.85),
    dot(0, -0.82, 0.18, AMBER, 0.9),
  ];
}

/**
 * DEAD — short stub then ✕ mark.
 * Vertical stub leading into an X (4 diagonal dots around center).
 */
function glyphDEAD(_t: number): GlyphDot[] {
  return [
    // stub from bottom
    dot(0, -0.85, 0.14, RED, 0.7),
    dot(0, -0.55, 0.14, RED, 0.75),
    dot(0, -0.25, 0.16, RED, 0.8),
    // X arms — 4 diagonal pairs
    dot(-0.28, 0.1, 0.14, RED, 0.9),
    dot(-0.55, 0.35, 0.16, RED, 1.0),
    dot(0.28, 0.1, 0.14, RED, 0.9),
    dot(0.55, 0.35, 0.16, RED, 1.0),
    dot(-0.28, 0.6, 0.14, RED, 0.9),
    dot(-0.55, 0.85, 0.16, RED, 1.0),
    dot(0.28, 0.6, 0.14, RED, 0.9),
    dot(0.55, 0.85, 0.16, RED, 1.0),
    // center of X
    dot(0, 0.35, 0.18, RED, 0.85),
  ];
}

/**
 * SHORT — horizontal line with ⚡ zigzag spark in the middle.
 * Line dots on left and right, plus a spark cluster at center.
 * Small t-wobble on spark brightness.
 */
function glyphSHORT(t: number): GlyphDot[] {
  const sparkA = 0.75 + Math.sin(t * 6.0) * 0.25;
  return [
    // left line segment
    dot(-0.9, 0, 0.13, AMBER, 0.8),
    dot(-0.65, 0, 0.13, AMBER, 0.8),
    dot(-0.4, 0, 0.13, AMBER, 0.8),
    // right line segment
    dot(0.4, 0, 0.13, AMBER, 0.8),
    dot(0.65, 0, 0.13, AMBER, 0.8),
    dot(0.9, 0, 0.13, AMBER, 0.8),
    // ⚡ spark: zigzag from (-0.2,-0.3) → (0,0.3) → (0.2,-0.3)
    dot(-0.2, -0.3, 0.14, ORANGE, sparkA),
    dot(-0.05, 0.0, 0.16, ORANGE, sparkA),
    dot(0.1, 0.3, 0.14, ORANGE, sparkA),
    dot(0.05, 0.0, 0.15, ORANGE, sparkA * 0.8),
    dot(0.2, -0.3, 0.13, ORANGE, sparkA),
    // bright center flash
    dot(0, 0, 0.2, ORANGE, sparkA),
  ];
}

/**
 * FLIP — filled square grid of dots (transformer, inverts ownership).
 * 4×4 grid covering ~[-0.7,0.7]×[-0.7,0.7].
 */
function glyphFLIP(_t: number): GlyphDot[] {
  const dots: GlyphDot[] = [];
  const N = 4;
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      const x = -0.7 + (col / (N - 1)) * 1.4;
      const y = -0.7 + (row / (N - 1)) * 1.4;
      dots.push(dot(x, y, 0.16, RED, 0.88));
    }
  }
  return dots;
}

/**
 * CONVERT — half-filled square (left half filled, right half empty outline).
 * 4×4 grid: left 2 columns filled (amber), right 2 columns outlined (dim).
 */
function glyphCONVERT(_t: number): GlyphDot[] {
  const dots: GlyphDot[] = [];
  const N = 4;
  for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      const x = -0.7 + (col / (N - 1)) * 1.4;
      const y = -0.7 + (row / (N - 1)) * 1.4;
      const filled = col < 2;
      dots.push(dot(x, y, filled ? 0.16 : 0.1, AMBER, filled ? 0.9 : 0.3));
    }
  }
  return dots;
}

const GLYPH_FNS: Record<GlyphKind, (t: number) => GlyphDot[]> = {
  CLAIM: glyphCLAIM,
  SPLIT: glyphSPLIT,
  LOCK: glyphLOCK,
  JOINER: glyphJOINER,
  DEAD: glyphDEAD,
  SHORT: glyphSHORT,
  FLIP: glyphFLIP,
  CONVERT: glyphCONVERT,
};

export function elementGlyphDots(kind: GlyphKind, t: number): GlyphDot[] {
  return GLYPH_FNS[kind](t);
}

export const ELEMENT_INFO: { kind: GlyphKind; name: string; meaning: string; tag: 'good' | 'bad' | 'tool' }[] = [
  {
    kind: 'CLAIM',
    name: 'Claim',
    meaning: 'Captures the cell for the firing side.',
    tag: 'good',
  },
  {
    kind: 'SPLIT',
    name: 'Split',
    meaning: 'One pulse becomes two, claiming the cell twice.',
    tag: 'good',
  },
  {
    kind: 'LOCK',
    name: 'Lock',
    meaning: 'Claims and freezes the cell — enemy pulses cannot change its owner.',
    tag: 'good',
  },
  {
    kind: 'JOINER',
    name: 'Joiner',
    meaning: 'Two incoming pulses merge into one outgoing pulse.',
    tag: 'tool',
  },
  {
    kind: 'DEAD',
    name: 'Dead End',
    meaning: 'Pulse is absorbed — no ownership change.',
    tag: 'bad',
  },
  {
    kind: 'SHORT',
    name: 'Short',
    meaning: 'Circuit shorts out — pulse is lost with a spark, no effect.',
    tag: 'bad',
  },
  {
    kind: 'FLIP',
    name: 'Flip',
    meaning: 'Inverts ownership: your pulse gives the cell to your opponent.',
    tag: 'bad',
  },
  {
    kind: 'CONVERT',
    name: 'Convert',
    meaning: 'Converts the cell one step toward neutral, then toward the firing side.',
    tag: 'tool',
  },
];
