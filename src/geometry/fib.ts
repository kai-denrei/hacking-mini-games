// Point-generation math ported from the Braille PoC (renderer-agnostic).
// Fibonacci lattice = evenly distributed directions on a unit sphere via
// golden-ratio spacing. The workhorse sampler for every point cloud.

const GOLDEN = Math.PI * (3 - Math.sqrt(5));

/** i-th of n evenly spread unit directions on the sphere. */
export function fibDir(i: number, n: number): [number, number, number] {
  const y = 1 - (2 * (i + 0.5)) / n;
  const r = Math.sqrt(Math.max(0, 1 - y * y));
  const a = i * GOLDEN;
  return [Math.cos(a) * r, y, Math.sin(a) * r];
}

/** Flat [x,y,z, ...] buffer of n points on a sphere of the given radius. */
export function fibSphere(n: number, radius = 1): Float32Array {
  const out = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    const [x, y, z] = fibDir(i, n);
    out[i * 3] = x * radius;
    out[i * 3 + 1] = y * radius;
    out[i * 3 + 2] = z * radius;
  }
  return out;
}
