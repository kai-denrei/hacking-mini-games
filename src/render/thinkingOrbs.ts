// Mini "thinking orbs" for the CONSTELLATION-orbs variant — a faithful port of
// the dotted 3D thought-orb painters from Braille Lab's Thinking Orbs
// (github.com/Jakubantalik/thinking-orbs, MIT © Jakub Antalik; "inkform /
// PlotterLab HalftoneSphere" lineage). Each orb is an honestly-3D dotted solid:
// rotated, depth-shaded, z-sorted, drawn with plain 2D-canvas arcs.
//
// Adapted here to draw ONE small orb at an arbitrary centre (cx, cy) and screen
// radius R, so a whole point cloud can be a field of tiny living orbs. Density
// and dot radii are re-tuned for the small (≈ "20 · inline") scale; the motion
// and geometry are kept. Depth reads as dot size + shade, exactly as upstream.

export type OrbMode = 'searching' | 'listening' | 'solving';

interface Dot {
  x: number;
  y: number;
  z: number; // projected depth: larger = nearer (drawn on top)
  r: number;
  white: number; // 0 bright .. 1 dim on the dark background
  a: number;
}

const hashD = (a: number, b: number): number => {
  const h = Math.sin(a * 12.9898 + b * 78.233) * 43758.5453;
  return h - Math.floor(h);
};
const angleDelta = (a: number, b: number): number => Math.atan2(Math.sin(a - b), Math.cos(a - b));

/** Shared spin + tilt + orthographic projection about (cx, cy) at scale R. */
function makeProj(yaw: number, tilt: number, cx: number, cy: number, R: number) {
  const st = Math.sin(tilt);
  const ct = Math.cos(tilt);
  const sy = Math.sin(yaw);
  const cyw = Math.cos(yaw);
  return (x: number, y: number, z: number): [number, number, number] => {
    const x1 = x * cyw + z * sy;
    const z1 = -x * sy + z * cyw;
    const y1 = y * ct - z1 * st;
    const z2 = y * st + z1 * ct;
    return [cx + x1 * R, cy - y1 * R, z2];
  };
}

// ── solving (rubik) helpers ────────────────────────────────────────────────
function solveCycle(time: number, count: number, slotDur: number, rest: number): { amount: number[]; active: number } {
  const cyc = 2 * count * slotDur + rest;
  const tc = time % cyc;
  const amount = new Array(count).fill(0);
  let active = -1;
  if (tc < 2 * count * slotDur) {
    const slot = Math.floor(tc / slotDur);
    const p = (tc - slot * slotDur) / slotDur;
    const ep = 1 - (1 - Math.min(1, p / 0.7)) ** 3;
    if (slot < count) {
      for (let i = 0; i < slot; i++) amount[i] = 1;
      amount[slot] = ep;
      active = slot;
    } else {
      const u = 2 * count - 1 - slot;
      for (let i = 0; i < u; i++) amount[i] = 1;
      amount[u] = 1 - ep;
      active = u;
    }
  }
  return { amount, active };
}
interface Move {
  axis: number;
  lo: number;
  hi: number;
  ang: number;
}
function makeMoves(count: number): Move[] {
  const moves: Move[] = [];
  for (let i = 0; i < count; i++) {
    const axis = Math.min(2, Math.floor(hashD(i, 2.3) * 3));
    const lo = -1.0 + 0.5 * Math.min(3, Math.floor(hashD(i, 5.9) * 4));
    const dir = hashD(i, 7.7) < 0.5 ? 1 : -1;
    moves.push({ axis, lo, hi: lo + 0.5, ang: (dir * Math.PI) / 2 });
  }
  return moves;
}
const RUBIK_MOVES = makeMoves(12);
function applyMoves(x0: number, y0: number, z0: number, sc: { amount: number[]; active: number }): [number, number, number, boolean] {
  let x = x0;
  let y = y0;
  let z = z0;
  let inActive = false;
  for (let i = 0; i < RUBIK_MOVES.length; i++) {
    if (sc.amount[i]! <= 0) continue;
    const mv = RUBIK_MOVES[i]!;
    const coord = mv.axis === 0 ? x : mv.axis === 1 ? y : z;
    if (coord < mv.lo || coord >= mv.hi) continue;
    if (i === sc.active) inActive = true;
    const a = mv.ang * sc.amount[i]!;
    const ca = Math.cos(a);
    const sa = Math.sin(a);
    if (mv.axis === 0) {
      const y2 = y * ca - z * sa;
      z = y * sa + z * ca;
      y = y2;
    } else if (mv.axis === 1) {
      const x2 = x * ca + z * sa;
      z = -x * sa + z * ca;
      x = x2;
    } else {
      const x2 = x * ca - y * sa;
      y = x * sa + y * ca;
      x = x2;
    }
  }
  return [x, y, z, inActive];
}

// ── the three mini painters (dots only; caller paints) ─────────────────────
function searchingDots(cx: number, cy: number, R: number, t: number): Dot[] {
  const spin = 0.5;
  const pt = makeProj(t * spin, 0.4 + 0.06 * Math.sin(t * 0.35), cx, cy, R);
  const scan = t * (spin + (1.7 - spin) * 4.0);
  const rs = R / 11;
  const dots: Dot[] = [];
  const latRings = 6;
  const lonDensity = 12;
  for (let li = 0; li <= latRings; li++) {
    const lat = -Math.PI / 2 + (li / latRings) * Math.PI;
    const cosLat = Math.cos(lat);
    const sinLat = Math.sin(lat);
    const lonCount = Math.max(1, Math.round(Math.abs(cosLat) * lonDensity));
    for (let lj = 0; lj < lonCount; lj++) {
      const lon = (lj / lonCount) * 2 * Math.PI;
      const [px, py, z] = pt(cosLat * Math.cos(lon), sinLat, cosLat * Math.sin(lon));
      const depth = (z + 1) / 2;
      const d = angleDelta(lon + t * spin, scan);
      const boost = Math.exp(-(d * d) / 0.18) * Math.max(0, z);
      dots.push({ x: px, y: py, z, r: (0.4 + 1.0 * depth + 0.8 * boost) * rs, white: 0.62 - 0.54 * depth, a: 0.6 + 0.4 * Math.min(1, boost) });
    }
  }
  return dots;
}

function solvingDots(cx: number, cy: number, R: number, t: number): Dot[] {
  const pt = makeProj(t * 0.55, 0.35 + 0.1 * Math.sin(t * 0.9), cx, cy, R);
  const rs = R / 11;
  const sc = solveCycle(t, 12, 0.42, 1.2);
  const dots: Dot[] = [];
  const latRings = 5;
  const lonDensity = 10;
  for (let li = 0; li <= latRings; li++) {
    const lat = -Math.PI / 2 + (li / latRings) * Math.PI;
    const cosLat = Math.cos(lat);
    const sinLat = Math.sin(lat);
    const lonCount = Math.max(1, Math.round(Math.abs(cosLat) * lonDensity));
    for (let lj = 0; lj < lonCount; lj++) {
      const lon = (lj / lonCount) * 2 * Math.PI;
      const [x, y, z, inA] = applyMoves(cosLat * Math.cos(lon), sinLat, cosLat * Math.sin(lon), sc);
      const [px, py, zr] = pt(x, y, z);
      const depth = (zr + 1) / 2;
      dots.push({ x: px, y: py, z: zr, r: (0.4 + 1.0 * depth + (inA ? 0.4 : 0)) * rs, white: 0.62 - 0.54 * depth - (inA ? 0.16 : 0), a: 0.85 });
    }
  }
  return dots;
}

function listeningDots(cx: number, cy: number, R: number, t: number): Dot[] {
  const pt = makeProj(t * 0.18, 0.38, cx, cy, 1);
  const rs = R / 11;
  const dots: Dot[] = [];
  const rings = 6;
  const lonDensity = 11;
  for (let ri = 0; ri <= rings; ri++) {
    const lat = -Math.PI / 2 + (ri / rings) * Math.PI;
    const cosLat = Math.cos(lat);
    const sinLat = Math.sin(lat);
    const w = 0.62 * Math.sin(t * 2.1 - ri * 0.52) + 0.38 * Math.sin(t * 1.27 + ri * 0.83);
    const rr = R * (0.9 + 0.11 * w);
    const lonCount = Math.max(1, Math.round(Math.abs(cosLat) * lonDensity));
    for (let lj = 0; lj < lonCount; lj++) {
      const lon = (lj / lonCount) * 2 * Math.PI;
      const [px, py, z] = pt(cosLat * Math.cos(lon) * rr, sinLat * rr, cosLat * Math.sin(lon) * rr);
      const depth = (z / R + 1) / 2;
      const crest = Math.max(0, w);
      dots.push({ x: px, y: py, z, r: (0.4 + 1.0 * depth) * (1 + 0.4 * crest) * rs, white: 0.66 - 0.56 * depth - 0.1 * crest, a: 0.8 });
    }
  }
  return dots;
}

const MODE_FN: Record<OrbMode, (cx: number, cy: number, R: number, t: number) => Dot[]> = {
  searching: searchingDots,
  listening: listeningDots,
  solving: solvingDots,
};

/** Pick a stable orb mode for point `i` (uncorrelated with its role). */
export function orbModeFor(i: number): OrbMode {
  const modes: OrbMode[] = ['searching', 'listening', 'solving'];
  return modes[Math.floor(hashD(i, 3.7) * 3) % 3]!;
}

/**
 * Draw one mini thinking-orb. `tint` colourises the grayscale ink (×, 0..1);
 * `intensity` scales overall alpha (and slightly the dot radii) so the caller
 * can fold in the constellation's align/emphasis feedback.
 */
export function drawOrb(
  ctx: CanvasRenderingContext2D,
  mode: OrbMode,
  cx: number,
  cy: number,
  R: number,
  t: number,
  tint: readonly [number, number, number],
  intensity: number,
): void {
  const dots = MODE_FN[mode](cx, cy, R, t);
  dots.sort((a, b) => a.z - b.z); // far → near
  const rBump = 1 + 0.35 * Math.max(0, intensity - 1);
  for (const d of dots) {
    const alpha = Math.min(1, (d.a ?? 1) * intensity);
    if (alpha < 0.02) continue;
    const g = Math.max(0, Math.min(1, 1 - d.white)); // dark bg: low white → bright
    ctx.fillStyle = `rgba(${Math.round(g * 255 * tint[0])},${Math.round(g * 255 * tint[1])},${Math.round(g * 255 * tint[2])},${alpha})`;
    ctx.beginPath();
    ctx.arc(d.x, d.y, Math.max(0.35, d.r * rBump), 0, Math.PI * 2);
    ctx.fill();
  }
}
