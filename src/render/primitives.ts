// Braille-Lab "Modes × Primitives" ported to point-cloud generators.
// searching = lat/long lattice on the solid with a scanning meridian; solving =
// rubik band-turns on the solid's own point-set. Warps: cube (max-norm) and
// octahedron (ray-cast onto face planes). Returns local dots (x,y in ~[-1.7,1.7],
// depth 0..1 front, scan 0..1 highlight) for the caller to place + colour.
// Core engine MIT © 2026 Jakub Antalik; warps/geometry original to Braille Lab.

type V3 = [number, number, number];

const hashD = (a: number, b: number): number => {
  const h = Math.sin(a * 12.9898 + b * 78.233) * 43758.5453;
  return h - Math.floor(h);
};
const angleDelta = (a: number, b: number): number => Math.atan2(Math.sin(a - b), Math.cos(a - b));
const sub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const dot = (a: V3, b: V3): number => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const norm = (v: V3): V3 => {
  const l = Math.hypot(v[0], v[1], v[2]) || 1e-6;
  return [v[0] / l, v[1] / l, v[2] / l];
};

interface Plane {
  n: V3;
  d: number;
}
function facePlanes(verts: V3[], faces: number[][]): Plane[] {
  return faces.map((f) => {
    let n = norm(cross(sub(verts[f[1]!]!, verts[f[0]!]!), sub(verts[f[2]!]!, verts[f[0]!]!)));
    let d = dot(n, verts[f[0]!]!);
    if (d < 0) {
      n = [-n[0], -n[1], -n[2]];
      d = -d;
    }
    return { n, d };
  });
}
const makeConvexWarp = (planes: Plane[]) => (dir: V3): V3 => {
  const d = norm(dir);
  let t = Infinity;
  for (const pl of planes) {
    const dn = dot(d, pl.n);
    if (dn > 1e-6) {
      const tt = pl.d / dn;
      if (tt < t) t = tt;
    }
  }
  return [d[0] * t, d[1] * t, d[2] * t];
};
function sampleFace(verts: V3[], idx: number[], density: number): V3[] {
  const out: V3[] = [];
  const v0 = verts[idx[0]!]!;
  for (let f = 1; f < idx.length - 1; f++) {
    const v1 = verts[idx[f]!]!;
    const v2 = verts[idx[f + 1]!]!;
    for (let i = 0; i <= density; i++)
      for (let j = 0; j <= density - i; j++) {
        const a = i / density;
        const b = j / density;
        const c = 1 - a - b;
        out.push([v0[0] * c + v1[0] * a + v2[0] * b, v0[1] * c + v1[1] * a + v2[1] * b, v0[2] * c + v1[2] * a + v2[2] * b]);
      }
  }
  return out;
}
function cubePoints(G: number): V3[] {
  const pts: V3[] = [];
  const lin: number[] = [];
  for (let i = 0; i < G; i++) lin.push(-1 + (2 * i) / (G - 1));
  for (const s of [-1, 1]) for (const a of lin) for (const b of lin) {
    pts.push([s, a, b]);
    pts.push([a, s, b]);
    pts.push([a, b, s]);
  }
  return pts;
}

const cubeWarp = (v: V3): V3 => {
  const m = Math.max(Math.abs(v[0]), Math.abs(v[1]), Math.abs(v[2])) || 1e-6;
  return [v[0] / m, v[1] / m, v[2] / m];
};
const OCTA_VERTS: V3[] = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
const OCTA_FACES = [[0, 2, 4], [0, 2, 5], [0, 3, 4], [0, 3, 5], [1, 2, 4], [1, 2, 5], [1, 3, 4], [1, 3, 5]];
const octaWarp = makeConvexWarp(facePlanes(OCTA_VERTS, OCTA_FACES));

const CUBE_SOLVE = cubePoints(4);
const OCTA_SOLVE = OCTA_FACES.flatMap((f) => sampleFace(OCTA_VERTS, f, 4));

// rubik solve cycle
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
function makeCubeMoves(count: number): Move[] {
  const layers = [-1, -1 / 3, 1 / 3];
  const moves: Move[] = [];
  for (let i = 0; i < count; i++) {
    const axis = Math.min(2, Math.floor(hashD(i, 2.3) * 3));
    const lo = layers[Math.min(2, Math.floor(hashD(i, 5.9) * 3))]!;
    const dir = hashD(i, 7.7) < 0.5 ? 1 : -1;
    moves.push({ axis, lo, hi: lo + 2 / 3 + 1e-4, ang: (dir * Math.PI) / 2 });
  }
  return moves;
}
const MOVES = makeCubeMoves(12);
function applyMoves(p: V3, sc: { amount: number[]; active: number }): [number, number, number, boolean] {
  let [x, y, z] = p;
  let inActive = false;
  for (let i = 0; i < MOVES.length; i++) {
    if (sc.amount[i]! <= 0) continue;
    const mv = MOVES[i]!;
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

const makeRot = (yaw: number, tilt: number) => {
  const st = Math.sin(tilt);
  const ct = Math.cos(tilt);
  const sy = Math.sin(yaw);
  const cyw = Math.cos(yaw);
  return (x: number, y: number, z: number): V3 => {
    const x1 = x * cyw + z * sy;
    const z1 = -x * sy + z * cyw;
    const y1 = y * ct - z1 * st;
    const z2 = y * st + z1 * ct;
    return [x1, y1, z2];
  };
};

export type Shape = 'cube' | 'octa';
export interface PDot {
  x: number;
  y: number;
  depth: number; // 0 back .. 1 front
  scan: number; // 0..1 highlight (scan meridian / active rubik layer)
}
const rf = (shape: Shape): number => (shape === 'cube' ? 1 : 1.7);
const warpOf = (shape: Shape) => (shape === 'cube' ? cubeWarp : octaWarp);

/** searching — lat/long lattice on the solid, a scan meridian sweeping. */
export function searching(shape: Shape, t: number): PDot[] {
  const warp = warpOf(shape);
  const Rf = rf(shape);
  const spin = 0.5;
  const yaw = t * spin;
  const rot = makeRot(yaw, 0.4 + 0.06 * Math.sin(t * 0.35));
  const scan = t * (spin + (1.7 - spin) * 4.08);
  const latRings = 10;
  const lonDensity = 18;
  const out: PDot[] = [];
  for (let li = 0; li <= latRings; li++) {
    const lat = -Math.PI / 2 + (li / latRings) * Math.PI;
    const cosLat = Math.cos(lat);
    const sinLat = Math.sin(lat);
    const lonCount = Math.max(1, Math.round(Math.abs(cosLat) * lonDensity));
    for (let lj = 0; lj < lonCount; lj++) {
      const lon = (lj / lonCount) * 2 * Math.PI;
      const c = warp([cosLat * Math.cos(lon), sinLat, cosLat * Math.sin(lon)]);
      const [x1, y1, z2] = rot(c[0], c[1], c[2]);
      const d = angleDelta(lon + yaw, scan);
      const boost = Math.exp(-(d * d) / 0.18) * Math.max(0, z2);
      out.push({ x: x1 * Rf, y: y1 * Rf, depth: (z2 + 1) / 2, scan: Math.min(1, boost) });
    }
  }
  return out;
}

/** solving — rubik band-turns on the solid's own point set. */
export function solving(shape: Shape, t: number): PDot[] {
  const pts = shape === 'cube' ? CUBE_SOLVE : OCTA_SOLVE;
  const Rf = rf(shape);
  const rot = makeRot(t * 0.5, 0.5 + 0.1 * Math.sin(t * 0.9));
  const sc = solveCycle(t, 12, 0.42, 1.2);
  const out: PDot[] = [];
  for (const p of pts) {
    const [x, y, z, inA] = applyMoves(p, sc);
    const [x1, y1, z2] = rot(x, y, z);
    out.push({ x: x1 * Rf, y: y1 * Rf, depth: (z2 + 1) / 2, scan: inA ? 1 : 0 });
  }
  return out;
}
