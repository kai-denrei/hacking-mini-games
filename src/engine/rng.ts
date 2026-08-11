// Deterministic seeded RNG. Every game draws from a seeded stream so that
// "same seed + same input log => identical outcome" (an acceptance test in
// every spec). Replaces Braille's sin-based hashD, which is deterministic but
// not a proper uniform stream.

export type RNG = () => number;

/** mulberry32 — small, fast, good-enough uniform PRNG in [0, 1). */
export function mulberry32(seed: number): RNG {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** FNV-1a: stable string seed -> uint32, so seeds can be human-readable. */
export function hashSeed(str: string): number {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export const makeRng = (seed: string | number): RNG =>
  mulberry32(typeof seed === 'string' ? hashSeed(seed) : seed);

export const randRange = (rng: RNG, lo: number, hi: number): number =>
  lo + (hi - lo) * rng();

export const randInt = (rng: RNG, lo: number, hi: number): number =>
  Math.floor(randRange(rng, lo, hi + 1));

export function pick<T>(rng: RNG, arr: readonly T[]): T {
  const item = arr[Math.floor(rng() * arr.length)];
  if (item === undefined) throw new Error('pick() on empty array');
  return item;
}
