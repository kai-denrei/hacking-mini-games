// CONSTELLATION — solution-first, seeded board generator (spec §6, §1).
//
// Build order per lock: pick a hidden alignment axis A, choose a key glyph,
// back-project its lit cells along A (at random depths) into SIGNAL points,
// scatter TRIP hazards into the glyph's 1-dot margin ring, then fill the cloud
// with NOISE. Finally verify uniqueness: no viewpoint far from A may reproduce
// the glyph (the false-constellation check).
//
// Coherence model (used by both this check and gameplay later): project every
// point into the canonical basis ⟂ V; a template cell is "covered" if some
// point lands within one coverage radius of it. At V=A every SIGNAL point lands
// exactly on its cell → coherence 1. Off-axis, depth leaks into the projection
// and scatters them → coherence falls. NOISE can accidentally cover cells, so
// re-rolling noise can fix a marginal board — matching the spec's wording.

import type { Difficulty } from '../../engine/session.ts';
import { makeRng, randRange, type RNG } from '../../engine/rng.ts';
import {
  CONSTELLATION_GLYPHS,
  onCount,
  onPoints,
  marginRing,
  type Glyph,
  type Point2,
} from '../../glyphs/bank.ts';
import {
  type Vec3,
  add,
  scale,
  dot,
  angleDeg,
  basis,
  randDir,
  randInBall,
} from '../../math/vec3.ts';

// ── Difficulty envelope (spec §4) ───────────────────────────────────────────
export interface TierParams {
  /** total points */ M: number;
  /** signal points (target; actual = chosen glyph's on-count) */ K: number;
  /** trip hazards per lock */ H: number;
  /** locks */ L: number;
  thetaLockDeg: number;
  tRun: number;
  tSweep: number | null;
  drift: boolean;
}

export const TIERS: Record<Difficulty, TierParams> = {
  1: { M: 60, K: 12, H: 0, L: 1, thetaLockDeg: 6, tRun: 60, tSweep: null, drift: false },
  2: { M: 90, K: 14, H: 2, L: 1, thetaLockDeg: 5, tRun: 60, tSweep: 12, drift: false },
  3: { M: 120, K: 16, H: 4, L: 2, thetaLockDeg: 4, tRun: 75, tSweep: 10, drift: false },
  4: { M: 150, K: 18, H: 6, L: 2, thetaLockDeg: 3.5, tRun: 75, tSweep: 8, drift: true },
  5: { M: 200, K: 20, H: 8, L: 3, thetaLockDeg: 3, tRun: 90, tSweep: 7, drift: true },
};

// ── Generation tuning (exposed so the feel/uniqueness bar can be dialed) ─────
export const GEN = {
  glyphScale: 0.15, //     world units per glyph cell (bigger = more legible glyph)
  depthMin: 0.3,
  depthMax: 1.0,
  depthScale: 0.875, //    scales with glyphScale to keep off-axis scatter (uniqueness)
  noiseRadius: 0.9, //     noise fills a ball of this radius
  // The renderer's initial sighting vector is +Z (normalize(camPos - target)),
  // so A must not sit near +Z or the board would be solved without moving (§6.1).
  defaultViewDir: [0, 0, 1] as Vec3,
  minAxisFromViewDeg: 15, // spec §6.1
  minAxisSeparationDeg: 35, // spec §6.1 (L > 1)
  checkViewpoints: 400, //  spec §6.4
  checkSkipDeg: 30, //      viewpoints nearer than this to A are the intended solution zone
  coherenceSigmaCells: 1.0, // RMSE (in cells) that maps to coherence e^-1
  coherenceThreshold: 0.7, // spec §6.4 / §8
  maxBoardRerolls: 24,
};

// ── Board types ─────────────────────────────────────────────────────────────
export type Population = 'SIGNAL' | 'NOISE' | 'TRIP';

export interface CloudPoint {
  pos: Vec3;
  pop: Population;
  /** owning lock index for SIGNAL/TRIP; -1 for NOISE */
  lock: number;
}

export interface Lock {
  index: number;
  axis: Vec3;
  glyph: string;
  /** actual number of signal points = glyph on-count */
  signalCount: number;
}

export interface Board {
  seed: string;
  difficulty: Difficulty;
  params: TierParams;
  points: CloudPoint[];
  locks: Lock[];
  genStats: {
    boardAttempts: number;
    noiseRerolls: number;
    maxOffAxisCoherence: number;
  };
}

// ── Helpers ─────────────────────────────────────────────────────────────────

function shuffle<T>(rng: RNG, arr: readonly T[]): T[] {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  return out;
}

/** Nearest-on-count glyph to the tier's K, excluding names already used. */
function pickGlyphForK(rng: RNG, targetK: number, used: Set<string>): Glyph {
  const pool = CONSTELLATION_GLYPHS.filter((g) => !used.has(g.name));
  const cands = pool.length ? pool : CONSTELLATION_GLYPHS;
  const scored = cands.map((g) => ({ g, d: Math.abs(onCount(g) - targetK) }));
  const best = Math.min(...scored.map((s) => s.d));
  const tied = scored.filter((s) => s.d === best).map((s) => s.g);
  return tied[Math.floor(rng() * tied.length)]!;
}

function pickAxis(rng: RNG, prior: Vec3[]): Vec3 {
  for (let i = 0; i < 1000; i++) {
    const a = randDir(rng);
    if (angleDeg(a, GEN.defaultViewDir) < GEN.minAxisFromViewDeg) continue;
    if (prior.some((p) => angleDeg(a, p) < GEN.minAxisSeparationDeg)) continue;
    return a;
  }
  throw new Error('pickAxis: could not satisfy separation constraints');
}

/** Back-project a 2D cell (glyph or margin) along axis A at a random depth. */
function backProject(rng: RNG, cell: Point2, e1: Vec3, e2: Vec3, axis: Vec3): Vec3 {
  const depth = (rng() < 0.5 ? -1 : 1) * randRange(rng, GEN.depthMin, GEN.depthMax) * GEN.depthScale;
  return add(
    add(scale(e1, cell.x * GEN.glyphScale), scale(e2, cell.y * GEN.glyphScale)),
    scale(axis, depth),
  );
}

/**
 * How legible the glyph is when the cloud is viewed along `view`: 1 = the
 * signal reforms the glyph exactly, ~0 = a scattered mess.
 *
 * `signal` must be a lock's SIGNAL points in glyph-cell order (as emitted by the
 * generator) — this gives point↔cell correspondence for free. We best-fit the
 * projected signal to the template with a rigid transform (rotation +
 * translation, no scale/reflection) and map the residual RMSE through a
 * Gaussian. Rigid-fit-of-the-whole-set is what defeats the central-clustering
 * problem: outliers on the glyph's rim dominate the residual, so a viewpoint
 * only scores high when the ENTIRE pattern lines up — which (by depth-scatter)
 * happens essentially only along the true axis. This is also the smooth cue
 * gameplay Phase 1 reads.
 */
export function coherence(signal: readonly CloudPoint[], glyph: Glyph, view: Vec3): number {
  const template = onPoints(glyph);
  const n = template.length;
  if (n === 0 || signal.length < n) return 0;

  const [e1, e2] = basis(view);
  const s = GEN.glyphScale;

  // template (t) and projected signal (p), then center both
  const tx: number[] = [];
  const ty: number[] = [];
  const px: number[] = [];
  const py: number[] = [];
  let mtx = 0;
  let mty = 0;
  let mpx = 0;
  let mpy = 0;
  for (let j = 0; j < n; j++) {
    const t = template[j]!;
    const P = signal[j]!.pos;
    const a = t.x * s;
    const b = t.y * s;
    const u = dot(P, e1);
    const v = dot(P, e2);
    tx.push(a);
    ty.push(b);
    px.push(u);
    py.push(v);
    mtx += a;
    mty += b;
    mpx += u;
    mpy += v;
  }
  mtx /= n;
  mty /= n;
  mpx /= n;
  mpy /= n;

  // optimal rotation (Kabsch in 2D): θ = atan2(Σ t×p, Σ t·p)
  let sumDot = 0;
  let sumCross = 0;
  for (let j = 0; j < n; j++) {
    const a = tx[j]! - mtx;
    const b = ty[j]! - mty;
    const u = px[j]! - mpx;
    const v = py[j]! - mpy;
    sumDot += a * u + b * v;
    sumCross += a * v - b * u;
  }
  const theta = Math.atan2(sumCross, sumDot);
  const c = Math.cos(theta);
  const sn = Math.sin(theta);

  // residual RMSE after aligning template→signal
  let sq = 0;
  for (let j = 0; j < n; j++) {
    const a = tx[j]! - mtx;
    const b = ty[j]! - mty;
    const rx = c * a - sn * b;
    const ry = sn * a + c * b;
    const dx = rx - (px[j]! - mpx);
    const dy = ry - (py[j]! - mpy);
    sq += dx * dx + dy * dy;
  }
  const rmse = Math.sqrt(sq / n);
  const sigma = GEN.glyphScale * GEN.coherenceSigmaCells;
  return Math.exp(-((rmse / sigma) ** 2));
}

/** Worst coherence over many viewpoints far from A (the uniqueness metric). */
function maxOffAxisCoherence(
  points: readonly CloudPoint[],
  glyph: Glyph,
  axis: Vec3,
  checkRng: RNG,
): number {
  let max = 0;
  for (let i = 0; i < GEN.checkViewpoints; i++) {
    const v = randDir(checkRng);
    if (angleDeg(v, axis) < GEN.checkSkipDeg) continue;
    const c = coherence(points, glyph, v);
    if (c > max) max = c;
  }
  return max;
}

// ── Generator ───────────────────────────────────────────────────────────────

export function generateBoard(difficulty: Difficulty, seed: string): Board {
  const params = TIERS[difficulty];
  const rng = makeRng(`${seed}:constellation:${difficulty}`);

  for (let boardAttempt = 1; boardAttempt <= GEN.maxBoardRerolls; boardAttempt++) {
    // Locks: axis + glyph + SIGNAL + TRIP (these are fixed for this board attempt).
    const locks: Lock[] = [];
    const glyphOf: Glyph[] = [];
    const fixedPoints: CloudPoint[] = [];
    const used = new Set<string>();
    const axes: Vec3[] = [];

    for (let l = 0; l < params.L; l++) {
      const axis = pickAxis(rng, axes);
      axes.push(axis);
      const glyph = pickGlyphForK(rng, params.K, used);
      used.add(glyph.name);
      glyphOf.push(glyph);
      const [e1, e2] = basis(axis);

      for (const cell of onPoints(glyph)) {
        fixedPoints.push({ pos: backProject(rng, cell, e1, e2, axis), pop: 'SIGNAL', lock: l });
      }
      const ring = shuffle(rng, marginRing(glyph));
      for (let h = 0; h < Math.min(params.H, ring.length); h++) {
        fixedPoints.push({ pos: backProject(rng, ring[h]!, e1, e2, axis), pop: 'TRIP', lock: l });
      }
      locks.push({ index: l, axis, glyph: glyph.name, signalCount: onCount(glyph) });
    }

    const noiseCount = params.M - fixedPoints.length;
    if (noiseCount < 0) continue; // glyphs overflowed M (won't happen at these tiers)

    // Uniqueness is decided by SIGNAL geometry (depth-scatter), independent of
    // noise, so it's checked before noise is added. Each lock uses a fixed
    // viewpoint set (seeded per lock) so the verdict is reproducible.
    let worst = 0;
    let unique = true;
    for (let l = 0; l < params.L; l++) {
      const sig = fixedPoints.filter((pt) => pt.pop === 'SIGNAL' && pt.lock === l);
      const c = maxOffAxisCoherence(sig, glyphOf[l]!, axes[l]!, makeRng(`${seed}:check:${difficulty}:${l}`));
      if (c > worst) worst = c;
      if (c >= GEN.coherenceThreshold) {
        unique = false;
        break;
      }
    }
    if (!unique) continue; // signal legible off-axis → re-roll the whole board

    const points = fixedPoints.slice();
    for (let i = 0; i < noiseCount; i++) {
      points.push({ pos: randInBall(rng, GEN.noiseRadius), pop: 'NOISE', lock: -1 });
    }

    return {
      seed,
      difficulty,
      params,
      points,
      locks,
      genStats: { boardAttempts: boardAttempt, noiseRerolls: 0, maxOffAxisCoherence: worst },
    };
  }

  throw new Error(
    `generateBoard: failed to produce a unique board after ${GEN.maxBoardRerolls} attempts (seed=${seed}, D${difficulty})`,
  );
}
