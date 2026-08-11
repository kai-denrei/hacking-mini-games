// Shared glyph bank — one cross-game visual language (conventions §7).
//
// Two sets, same primitives:
//   • CONSTELLATION_GLYPHS — 5×7 dot-matrix "key glyphs". Their lit cells are
//     back-projected along the hidden alignment axis to become SIGNAL points;
//     the extracted glyph is reported as intel (CONSTELLATION §1, §7).
//   • BREACH_ALPHABET — six 2×4 braille symbols, the code-matrix alphabet
//     (BREACH §7), rendered as dot glyphs rather than hex text.
//
// Glyphs are authored as ASCII art ('#' = lit, '.' = dark) so they can be read
// and edited by eye. Everything downstream derives from `rows`.

export interface Glyph {
  readonly name: string;
  /** columns */
  readonly w: number;
  /** rows */
  readonly h: number;
  /** h strings of length w; '#' = lit dot, anything else = dark */
  readonly rows: readonly string[];
}

function glyph(name: string, rows: string[]): Glyph {
  const h = rows.length;
  const w = rows[0]?.length ?? 0;
  for (const r of rows) {
    if (r.length !== w) throw new Error(`glyph "${name}": ragged row (${r.length} != ${w})`);
  }
  return { name, w, h, rows };
}

// ── 5×7 key glyphs ────────────────────────────────────────────────────────
// Chosen for distinct silhouettes and high mutual Hamming distance so that no
// two keys read alike as a sparse point cloud. On-counts span ~11–20 to feed
// CONSTELLATION's K (signal-point) budget across difficulty tiers.

export const CONSTELLATION_GLYPHS: readonly Glyph[] = [
  glyph('ARROW_UP', ['..#..', '.###.', '##.##', '..#..', '..#..', '..#..', '..#..']),
  glyph('ARROW_DOWN', ['..#..', '..#..', '..#..', '..#..', '##.##', '.###.', '..#..']),
  glyph('DIAMOND', ['..#..', '.#.#.', '#...#', '#...#', '#...#', '.#.#.', '..#..']),
  glyph('CROSS_X', ['#...#', '.#.#.', '..#..', '..#..', '..#..', '.#.#.', '#...#']),
  glyph('SQUARE', ['#####', '#...#', '#...#', '#...#', '#...#', '#...#', '#####']),
  glyph('PLUS', ['..#..', '..#..', '..#..', '#####', '..#..', '..#..', '..#..']),
  glyph('TRIANGLE', ['..#..', '..#..', '.#.#.', '.#.#.', '#...#', '#...#', '#####']),
  glyph('ESS', ['.####', '#....', '#....', '.###.', '....#', '....#', '####.']),
  glyph('ZED', ['#####', '....#', '...#.', '..#..', '.#...', '#....', '#####']),
  glyph('H_BAR', ['#...#', '#...#', '#...#', '#####', '#...#', '#...#', '#...#']),
  glyph('VEE', ['#...#', '#...#', '.#.#.', '.#.#.', '.#.#.', '..#..', '..#..']),
  glyph('TEE', ['#####', '..#..', '..#..', '..#..', '..#..', '..#..', '..#..']),
  glyph('ELL', ['#....', '#....', '#....', '#....', '#....', '#....', '#####']),
  glyph('KAY', ['#...#', '#..#.', '#.#..', '##...', '#.#..', '#..#.', '#...#']),
  glyph('STAR', ['..#..', '#.#.#', '.###.', '#####', '.###.', '#.#.#', '..#..']),
];

// ── 2×4 braille alphabet ──────────────────────────────────────────────────
// Six symbols, pairwise Hamming ≥ 3 (BREACH §7). Standard braille cell shape.

export const BREACH_ALPHABET: readonly Glyph[] = [
  glyph('B0', ['##', '..', '..', '##']),
  glyph('B1', ['#.', '#.', '#.', '#.']),
  glyph('B2', ['.#', '.#', '.#', '.#']),
  glyph('B3', ['##', '##', '..', '..']),
  glyph('B4', ['..', '..', '##', '##']),
  glyph('B5', ['#.', '.#', '#.', '.#']),
];

// ── Derived primitives ──────────────────────────────────────────────────────

/** Row-major booleans, length w*h. */
export function bits(g: Glyph): boolean[] {
  const out: boolean[] = [];
  for (const row of g.rows) for (const ch of row) out.push(ch === '#');
  return out;
}

export function onCount(g: Glyph): number {
  return bits(g).reduce((n, b) => n + (b ? 1 : 0), 0);
}

export interface Cell {
  col: number;
  row: number;
}

export function onCells(g: Glyph): Cell[] {
  const out: Cell[] = [];
  for (let row = 0; row < g.h; row++) {
    const line = g.rows[row]!;
    for (let col = 0; col < g.w; col++) {
      if (line[col] === '#') out.push({ col, row });
    }
  }
  return out;
}

export interface Point2 {
  x: number;
  y: number;
}

/**
 * Lit cells as centered 2D coordinates (origin at glyph center, y-up, unit cell
 * spacing). This is the shape CONSTELLATION back-projects into SIGNAL points.
 */
export function onPoints(g: Glyph): Point2[] {
  return onCells(g).map(({ col, row }) => ({
    x: col - (g.w - 1) / 2,
    y: (g.h - 1) / 2 - row,
  }));
}

const isOn = (g: Glyph, col: number, row: number): boolean =>
  col >= 0 && row >= 0 && col < g.w && row < g.h && g.rows[row]![col] === '#';

/**
 * The 1-dot-unit margin ring: dark cells (including just outside the grid)
 * 8-adjacent to a lit cell. CONSTELLATION seeds TRIP hazards here — visually
 * adjacent to the glyph outline but never part of it (§1).
 */
export function marginRing(g: Glyph): Point2[] {
  const out: Point2[] = [];
  for (let row = -1; row <= g.h; row++) {
    for (let col = -1; col <= g.w; col++) {
      if (isOn(g, col, row)) continue;
      let adjacent = false;
      for (let dr = -1; dr <= 1 && !adjacent; dr++) {
        for (let dc = -1; dc <= 1; dc++) {
          if ((dr || dc) && isOn(g, col + dc, row + dr)) {
            adjacent = true;
            break;
          }
        }
      }
      if (adjacent) {
        out.push({ x: col - (g.w - 1) / 2, y: (g.h - 1) / 2 - row });
      }
    }
  }
  return out;
}

/** Number of differing cells between two same-sized glyphs. */
export function hamming(a: Glyph, b: Glyph): number {
  if (a.w !== b.w || a.h !== b.h) {
    throw new Error(`hamming: dim mismatch (${a.name} ${a.w}×${a.h} vs ${b.name} ${b.w}×${b.h})`);
  }
  const ba = bits(a);
  const bb = bits(b);
  let d = 0;
  for (let i = 0; i < ba.length; i++) if (ba[i] !== bb[i]) d++;
  return d;
}

export interface BankStats {
  count: number;
  minHamming: number;
  minPair: [string, string];
  onCounts: Record<string, number>;
}

/** Min pairwise Hamming + per-glyph on-counts. Used to validate a set. */
export function bankStats(glyphs: readonly Glyph[]): BankStats {
  let minHamming = Infinity;
  let minPair: [string, string] = ['', ''];
  for (let i = 0; i < glyphs.length; i++) {
    for (let j = i + 1; j < glyphs.length; j++) {
      const d = hamming(glyphs[i]!, glyphs[j]!);
      if (d < minHamming) {
        minHamming = d;
        minPair = [glyphs[i]!.name, glyphs[j]!.name];
      }
    }
  }
  const onCounts: Record<string, number> = {};
  for (const g of glyphs) onCounts[g.name] = onCount(g);
  return { count: glyphs.length, minHamming, minPair, onCounts };
}
