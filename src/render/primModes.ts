// Enemy-variety orbs for TUBES — a focused port of Braille Lab's "Modes ×
// Primitives" + "Fun Shapes" treatments (github.com/Jakubantalik, MIT © Jakub
// Antalik; "inkform / PlotterLab HalftoneSphere" lineage). Every shape is a
// warp(dir)→surface and/or a point cloud; every mode consumes one of those.
//
// Ported only what the five enemy themes need:
//   shapes : octa · pyramid · torus (warps) · teardrop · heart (point clouds)
//   modes  : searching · connecting · composing (warp) · solving · wave · orbit
//            · jelly · twinkle (point-cloud)
// Output is depth-shaded dots the tubes renderer paints (see drawMode there).

export type PrimShape = 'octa' | 'pyramid' | 'torus' | 'teardrop' | 'heart';
export type PrimMode = 'searching' | 'solving' | 'connecting' | 'composing' | 'wave' | 'orbit' | 'jelly' | 'twinkle';

export interface MDot {
  x: number;
  y: number;
  depth: number; // 0 back .. 1 front
  scan: number; // 0..1 highlight
  a: number; // 0..1 alpha
}

type V3 = [number, number, number];

// ── small shared kernel (self-contained copies) ─────────────────────────────
const hashD = (a: number, b: number): number => {
  const h = Math.sin(a * 12.9898 + b * 78.233) * 43758.5453;
  return h - Math.floor(h);
};
const angleDelta = (a: number, b: number): number => Math.atan2(Math.sin(a - b), Math.cos(a - b));
const frac = (x: number): number => x - Math.floor(x);
const lerp = (a: number, b: number, f: number): number => a + (b - a) * f;
const sub = (a: V3, b: V3): V3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const dot3 = (a: V3, b: V3): number => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const normV = (v: V3): V3 => {
  const l = Math.hypot(v[0], v[1], v[2]) || 1e-6;
  return [v[0] / l, v[1] / l, v[2] / l];
};
const fibDir = (i: number, n: number): V3 => {
  const golden = Math.PI * (3 - Math.sqrt(5));
  const y = 1 - (2 * (i + 0.5)) / n;
  const rad = Math.sqrt(Math.max(0, 1 - y * y));
  const a = i * golden;
  return [rad * Math.cos(a), y, rad * Math.sin(a)];
};
function vnoise(x: number, y: number): number {
  const xi = Math.floor(x);
  const yi = Math.floor(y);
  let fx = x - xi;
  let fy = y - yi;
  fx = fx * fx * (3 - 2 * fx);
  fy = fy * fy * (3 - 2 * fy);
  const a = hashD(xi, yi);
  const b = hashD(xi + 1, yi);
  const c = hashD(xi, yi + 1);
  const d = hashD(xi + 1, yi + 1);
  return a + (b - a) * fx + (c - a) * fy + (a - b - c + d) * fx * fy;
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

// convex warp (ray onto nearest face plane)
interface Plane { n: V3; d: number }
function facePlanes(verts: V3[], faces: number[][]): Plane[] {
  return faces.map((f) => {
    let n = normV(cross(sub(verts[f[1]!]!, verts[f[0]!]!), sub(verts[f[2]!]!, verts[f[0]!]!)));
    let d = dot3(n, verts[f[0]!]!);
    if (d < 0) { n = [-n[0], -n[1], -n[2]]; d = -d; }
    return { n, d };
  });
}
const makeConvexWarp = (planes: Plane[]) => (dir: V3): V3 => {
  const d = normV(dir);
  let t = Infinity;
  for (const pl of planes) {
    const dn = dot3(d, pl.n);
    if (dn > 1e-6) { const tt = pl.d / dn; if (tt < t) t = tt; }
  }
  return [d[0] * t, d[1] * t, d[2] * t];
};
function sampleFace(verts: V3[], idx: number[], density: number): V3[] {
  const out: V3[] = [];
  const v0 = verts[idx[0]!]!;
  for (let f = 1; f < idx.length - 1; f++) {
    const v1 = verts[idx[f]!]!;
    const v2 = verts[idx[f + 1]!]!;
    for (let i = 0; i <= density; i++) for (let j = 0; j <= density - i; j++) {
      const a = i / density;
      const b = j / density;
      const c = 1 - a - b;
      out.push([v0[0] * c + v1[0] * a + v2[0] * b, v0[1] * c + v1[1] * a + v2[1] * b, v0[2] * c + v1[2] * a + v2[2] * b]);
    }
  }
  return out;
}
const centerVerts = (vs: V3[]): V3[] => {
  const m: V3 = [0, 0, 0];
  for (const v of vs) { m[0] += v[0]; m[1] += v[1]; m[2] += v[2]; }
  m[0] /= vs.length; m[1] /= vs.length; m[2] /= vs.length;
  return vs.map((v) => [v[0] - m[0], v[1] - m[1], v[2] - m[2]] as V3);
};
const fitUnit = (pts: V3[]): V3[] => {
  let r = 1e-6;
  for (const p of pts) r = Math.max(r, Math.hypot(p[0], p[1], p[2]));
  return pts.map((p) => [p[0] / r, p[1] / r, p[2] / r] as V3);
};

// rubik solve for 'solving'
function solveCycle(time: number, count: number, slotDur: number, rest: number): { amount: number[]; active: number } {
  const cyc = 2 * count * slotDur + rest;
  const tc = time % cyc;
  const amount = new Array(count).fill(0);
  let active = -1;
  if (tc < 2 * count * slotDur) {
    const slot = Math.floor(tc / slotDur);
    const p = (tc - slot * slotDur) / slotDur;
    const ep = 1 - (1 - Math.min(1, p / 0.7)) ** 3;
    if (slot < count) { for (let i = 0; i < slot; i++) amount[i] = 1; amount[slot] = ep; active = slot; }
    else { const u = 2 * count - 1 - slot; for (let i = 0; i < u; i++) amount[i] = 1; amount[u] = 1 - ep; active = u; }
  }
  return { amount, active };
}
interface Move { axis: number; lo: number; hi: number; ang: number }
const MOVES: Move[] = (() => {
  const layers = [-1, -1 / 3, 1 / 3];
  const out: Move[] = [];
  for (let i = 0; i < 12; i++) {
    const axis = Math.min(2, Math.floor(hashD(i, 2.3) * 3));
    const lo = layers[Math.min(2, Math.floor(hashD(i, 5.9) * 3))]!;
    const dir = hashD(i, 7.7) < 0.5 ? 1 : -1;
    out.push({ axis, lo, hi: lo + 2 / 3 + 1e-4, ang: (dir * Math.PI) / 2 });
  }
  return out;
})();
function applyMoves(p: V3, sc: { amount: number[]; active: number }): [number, number, number, boolean] {
  let [x, y, z] = p;
  let inA = false;
  for (let i = 0; i < MOVES.length; i++) {
    if (sc.amount[i]! <= 0) continue;
    const mv = MOVES[i]!;
    const coord = mv.axis === 0 ? x : mv.axis === 1 ? y : z;
    if (coord < mv.lo || coord >= mv.hi) continue;
    if (i === sc.active) inA = true;
    const a = mv.ang * sc.amount[i]!;
    const ca = Math.cos(a);
    const sa = Math.sin(a);
    if (mv.axis === 0) { const y2 = y * ca - z * sa; z = y * sa + z * ca; y = y2; }
    else if (mv.axis === 1) { const x2 = x * ca + z * sa; z = -x * sa + z * ca; x = x2; }
    else { const x2 = x * ca - y * sa; y = x * sa + y * ca; x = x2; }
  }
  return [x, y, z, inA];
}

// ── shapes: warps + point clouds ────────────────────────────────────────────
const OCTA_VERTS: V3[] = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
const OCTA_FACES = [[0, 2, 4], [0, 2, 5], [0, 3, 4], [0, 3, 5], [1, 2, 4], [1, 2, 5], [1, 3, 4], [1, 3, 5]];
const OCTA_WARP = makeConvexWarp(facePlanes(OCTA_VERTS, OCTA_FACES));
const OCTA_PTS = OCTA_FACES.flatMap((f) => sampleFace(OCTA_VERTS, f, 4));

const PYR_VERTS = centerVerts([[0, 1, 0], [0.85, -0.7, 0.85], [-0.85, -0.7, 0.85], [-0.85, -0.7, -0.85], [0.85, -0.7, -0.85]]);
const PYR_FACES = [[1, 2, 3, 4], [0, 1, 2], [0, 2, 3], [0, 3, 4], [0, 4, 1]];
const PYR_WARP = makeConvexWarp(facePlanes(PYR_VERTS, PYR_FACES));

const TOR_R = 1;
const TOR_r = 0.42;
const torPoint = (u: number, v: number): V3 => {
  const rr = TOR_R + TOR_r * Math.cos(v);
  return [rr * Math.cos(u), rr * Math.sin(u), TOR_r * Math.sin(v)];
};
const torusWarp = (dir: V3): V3 => {
  const d = normV(dir);
  const u = Math.atan2(d[1], d[0]);
  const lat = Math.asin(Math.max(-1, Math.min(1, d[2])));
  return torPoint(u, lat * 2);
};
const TOR_PTS: V3[] = (() => {
  const pts: V3[] = [];
  for (let i = 0; i < 30; i++) { const u = (i / 30) * 2 * Math.PI; for (let j = 0; j < 10; j++) pts.push(torPoint(u, (j / 10) * 2 * Math.PI)); }
  return pts;
})();

// teardrop — surface of revolution, pointed at the top
const TEARDROP_PTS: V3[] = (() => {
  const pts: V3[] = [];
  const Nv = 20;
  const Nu = 12;
  for (let iv = 0; iv < Nv; iv++) {
    const t = iv / (Nv - 1);
    const v = t * Math.PI;
    const y = Math.cos(v);
    const r = 0.95 * Math.sin(v) * Math.pow(t, 0.6);
    for (let iu = 0; iu < Nu; iu++) { const u = (iu / Nu) * 2 * Math.PI; pts.push([r * Math.cos(u), y, r * Math.sin(u)]); }
  }
  return fitUnit(pts);
})();

// heart — Taubin implicit surface, ray-marched into a warp then sampled
const heartF = (x: number, y: number, z: number): number => {
  const X = x;
  const Y = z;
  const Z = y;
  const a = X * X + 2.25 * Y * Y + Z * Z - 1;
  return a * a * a - X * X * Z * Z * Z - 0.1125 * Y * Y * Z * Z * Z;
};
const heartWarp = (dir: V3): V3 => {
  const d = normV(dir);
  let thi = 0.1;
  let f = heartF(d[0] * thi, d[1] * thi, d[2] * thi);
  let guard = 0;
  while (f < 0 && thi < 5 && guard < 50) { thi *= 1.35; f = heartF(d[0] * thi, d[1] * thi, d[2] * thi); guard++; }
  let tlo = 0;
  let th = thi;
  for (let i = 0; i < 20; i++) { const tm = (tlo + th) * 0.5; if (heartF(d[0] * tm, d[1] * tm, d[2] * tm) < 0) tlo = tm; else th = tm; }
  const t = (tlo + th) * 0.5;
  return [d[0] * t, d[1] * t, d[2] * t];
};
const HEART_PTS: V3[] = fitUnit(Array.from({ length: 200 }, (_, i) => heartWarp(fibDir(i, 200))));

interface Shape { warp?: (d: V3) => V3; pts: V3[]; Rf: number }
const SHAPES: Record<PrimShape, Shape> = {
  octa: { warp: OCTA_WARP, pts: OCTA_PTS, Rf: 1.6 },
  pyramid: { warp: PYR_WARP, pts: [], Rf: 1.3 },
  torus: { warp: torusWarp, pts: TOR_PTS, Rf: 1.25 },
  teardrop: { pts: TEARDROP_PTS, Rf: 1.5 },
  heart: { warp: heartWarp, pts: HEART_PTS, Rf: 1.55 },
};

// ── modes (each → MDot[]) ───────────────────────────────────────────────────
function searchingDots(s: Shape, t: number): MDot[] {
  const warp = s.warp!;
  const spin = 0.5;
  const yaw = t * spin;
  const rot = makeRot(yaw, 0.4 + 0.06 * Math.sin(t * 0.35));
  const scan = t * (spin + (1.7 - spin) * 4.08);
  const out: MDot[] = [];
  const latRings = 12;
  const lonDensity = 26;
  for (let li = 0; li <= latRings; li++) {
    const lat = -Math.PI / 2 + (li / latRings) * Math.PI;
    const cosLat = Math.cos(lat);
    const sinLat = Math.sin(lat);
    const lonCount = Math.max(1, Math.round(Math.abs(cosLat) * lonDensity));
    for (let lj = 0; lj < lonCount; lj++) {
      const lon = (lj / lonCount) * 2 * Math.PI;
      const c = warp([cosLat * Math.cos(lon), sinLat, cosLat * Math.sin(lon)]);
      const [x, y, z] = rot(c[0], c[1], c[2]);
      const d = angleDelta(lon + yaw, scan);
      const boost = Math.exp(-(d * d) / 0.18) * Math.max(0, z);
      out.push({ x: x * s.Rf, y: y * s.Rf, depth: (z + 1) / 2, scan: Math.min(1, boost), a: 0.5 + 0.5 * Math.min(1, boost) });
    }
  }
  return out;
}

function solvingDots(s: Shape, t: number): MDot[] {
  const rot = makeRot(t * 0.5, 0.5 + 0.1 * Math.sin(t * 0.9));
  const sc = solveCycle(t, 12, 0.42, 1.2);
  const out: MDot[] = [];
  for (const p of s.pts) {
    const [x, y, z, inA] = applyMoves(p, sc);
    const [rx, ry, rz] = rot(x, y, z);
    out.push({ x: rx * s.Rf, y: ry * s.Rf, depth: (rz + 1) / 2, scan: inA ? 1 : 0, a: 1 });
  }
  return out;
}

function connectingDots(s: Shape, t: number): MDot[] {
  const warp = s.warp!;
  const rot = makeRot(t * 0.12, 0.35);
  const nodeN = 22;
  const nodes: V3[] = [];
  for (let i = 0; i < nodeN; i++) {
    const d = fibDir(i, nodeN);
    nodes.push(warp([
      d[0] + 0.25 * (vnoise(i * 0.31 + 9, t * 0.24) - 0.5) * 2,
      d[1] + 0.25 * (vnoise(i * 0.53 + 27, t * 0.21) - 0.5) * 2,
      d[2] + 0.25 * (vnoise(i * 0.77 + 55, t * 0.27) - 0.5) * 2,
    ]));
  }
  const out: MDot[] = [];
  for (let i = 0; i < nodeN; i++) {
    const [x, y, z] = rot(nodes[i]![0], nodes[i]![1], nodes[i]![2]);
    const pulse = 0.6 + 0.4 * (0.5 + 0.5 * Math.sin(t * 1.4 + i * 2.7));
    out.push({ x: x * s.Rf, y: y * s.Rf, depth: (z + 1) / 2, scan: pulse, a: 0.85 });
  }
  // travelling signals between nearby nodes
  for (let k = 0; k < 5; k++) {
    const seg = Math.floor(t * 0.55 + k * 7.31);
    const a = Math.floor(hashD(seg, k * 3.1 + 1.7) * nodeN);
    const b = Math.floor(hashD(seg, k * 5.7 + 4.2) * nodeN);
    if (a === b) continue;
    const f = frac(t * 0.55 + k * 7.31);
    const c = warp([lerp(nodes[a]![0], nodes[b]![0], f), lerp(nodes[a]![1], nodes[b]![1], f), lerp(nodes[a]![2], nodes[b]![2], f)]);
    const [x, y, z] = rot(c[0], c[1], c[2]);
    out.push({ x: x * s.Rf, y: y * s.Rf, depth: (z + 1) / 2, scan: 1, a: 0.9 });
  }
  return out;
}

function composingDots(s: Shape, t: number): MDot[] {
  const warp = s.warp!;
  const rot = makeRot(t * 0.18, 0.32);
  const ux = 1;
  const uy = 0;
  const uz = 0;
  const ta = 0.55;
  const vx = 0;
  const vy = Math.cos(ta);
  const vz = Math.sin(ta);
  const nx = uy * vz - uz * vy;
  const ny = uz * vx - ux * vz;
  const nz = ux * vy - uy * vx;
  const lanes = 9;
  const segs = 34;
  const out: MDot[] = [];
  for (let w = 0; w < lanes; w++) {
    const laneOff = (w - (lanes - 1) / 2) * 0.075;
    const edge = Math.abs(w - (lanes - 1) / 2) / Math.max(1, (lanes - 1) / 2);
    for (let k = 0; k < segs; k++) {
      const a = (k / segs) * 2 * Math.PI;
      const wob = 0.16 * Math.sin(a * 3 - t * 1.7 + w * 0.22) + 0.07 * Math.sin(a * 5 + t * 1.1);
      const off = laneOff + wob;
      const c = warp([
        ux * Math.cos(a) + vx * Math.sin(a) + nx * off,
        uy * Math.cos(a) + vy * Math.sin(a) + ny * off,
        uz * Math.cos(a) + vz * Math.sin(a) + nz * off,
      ]);
      const [x, y, z] = rot(c[0], c[1], c[2]);
      out.push({ x: x * s.Rf, y: y * s.Rf, depth: (z + 1) / 2, scan: (1 - edge) * 0.5, a: 0.4 + 0.6 * ((z + 1) / 2) });
    }
  }
  return out;
}

// treatments (deform the point cloud, then rotate)
function treatment(s: Shape, t: number, deform: (p: V3, i: number) => V3, bright: (i: number) => number): MDot[] {
  const rot = makeRot(t * 0.3, 0.42);
  const out: MDot[] = [];
  s.pts.forEach((p, i) => {
    const q = deform(p, i);
    const [x, y, z] = rot(q[0], q[1], q[2]);
    out.push({ x: x * s.Rf, y: y * s.Rf, depth: (z + 1) / 2, scan: bright(i), a: 1 });
  });
  return out;
}
const waveDots = (s: Shape, t: number): MDot[] =>
  treatment(s, t, (p) => { const d = 1 + 0.14 * Math.sin(3 * Math.atan2(p[2], p[0]) + t * 3 - p[1] * 2); return [p[0] * d, p[1], p[2] * d]; }, () => 0.15);
const orbitDots = (s: Shape, t: number): MDot[] =>
  treatment(s, t, (p, i) => { const h = hashD(i, 1.3) * 6.283; return [p[0] + 0.07 * Math.sin(t * 2 + h), p[1] + 0.07 * Math.cos(t * 1.7 + h), p[2] + 0.07 * Math.sin(t * 2.3 + h)]; }, () => 0.1);
const jellyDots = (s: Shape, t: number): MDot[] => {
  const sy = 1 + 0.24 * Math.sin(t * 3);
  const sx = 1 / Math.sqrt(sy);
  return treatment(s, t, (p) => [p[0] * sx, p[1] * sy, p[2] * sx], () => 0.15);
};
const twinkleDots = (s: Shape, t: number): MDot[] =>
  treatment(s, t, (p) => p, (i) => 0.5 + 0.5 * Math.sin(t * 4 + hashD(i, 2.1) * 6.283));

const MODE_FN: Record<PrimMode, (s: Shape, t: number) => MDot[]> = {
  searching: searchingDots,
  solving: solvingDots,
  connecting: connectingDots,
  composing: composingDots,
  wave: waveDots,
  orbit: orbitDots,
  jelly: jellyDots,
  twinkle: twinkleDots,
};

export function modeDots(mode: PrimMode, shape: PrimShape, t: number): MDot[] {
  return MODE_FN[mode](SHAPES[shape], t);
}

// ── enemy themes (the rotation) ─────────────────────────────────────────────
export interface EnemyTheme {
  key: string;
  label: string;
  shape: PrimShape;
  terminal: PrimMode;
  node: PrimMode;
  color: readonly [number, number, number]; // base owned/lit colour
  dim: readonly [number, number, number]; // unlit tube colour
}
export const ENEMY_THEMES: readonly EnemyTheme[] = [
  { key: 'white-octa', label: 'White Octahedron', shape: 'octa', terminal: 'searching', node: 'solving', color: [0.82, 0.88, 1.0], dim: [0.19, 0.21, 0.27] },
  { key: 'purple-pyramid', label: 'Purple Pyramid', shape: 'pyramid', terminal: 'searching', node: 'connecting', color: [0.7, 0.5, 1.0], dim: [0.18, 0.14, 0.28] },
  { key: 'turquoise-torus', label: 'Turquoise Torus', shape: 'torus', terminal: 'searching', node: 'composing', color: [0.3, 0.86, 0.82], dim: [0.12, 0.24, 0.24] },
  { key: 'darkred-teardrop', label: 'Dark Red Teardrop', shape: 'teardrop', terminal: 'wave', node: 'orbit', color: [0.86, 0.32, 0.3], dim: [0.26, 0.11, 0.11] },
  { key: 'pink-heart', label: 'Pink Heart', shape: 'heart', terminal: 'jelly', node: 'twinkle', color: [1.0, 0.5, 0.72], dim: [0.3, 0.14, 0.22] },
];

/** Deterministic theme choice from the board seed, so a reseed re-rolls it. */
export const pickEnemyTheme = (seed: string): EnemyTheme => {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ENEMY_THEMES[(h >>> 0) % ENEMY_THEMES.length]!;
};
