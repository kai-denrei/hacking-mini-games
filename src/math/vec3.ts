// Minimal, dependency-free 3D vector math. The game logic + solvers must run
// in plain Node for deterministic testing, so this deliberately does NOT depend
// on three.js (the renderer converts these to THREE.Vector3 at the boundary).

import type { RNG } from '../engine/rng.ts';

export type Vec3 = readonly [number, number, number];

export const add = (a: Vec3, b: Vec3): Vec3 => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
export const sub = (a: Vec3, b: Vec3): Vec3 => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
export const scale = (a: Vec3, s: number): Vec3 => [a[0] * s, a[1] * s, a[2] * s];
export const dot = (a: Vec3, b: Vec3): number => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

export const cross = (a: Vec3, b: Vec3): Vec3 => [
  a[1] * b[2] - a[2] * b[1],
  a[2] * b[0] - a[0] * b[2],
  a[0] * b[1] - a[1] * b[0],
];

export const length = (a: Vec3): number => Math.sqrt(dot(a, a));

export function normalize(a: Vec3): Vec3 {
  const len = length(a);
  return len > 1e-12 ? scale(a, 1 / len) : [0, 0, 1];
}

/** Angle between two vectors, in radians. */
export const angle = (a: Vec3, b: Vec3): number =>
  Math.acos(Math.max(-1, Math.min(1, dot(normalize(a), normalize(b)))));

export const angleDeg = (a: Vec3, b: Vec3): number => (angle(a, b) * 180) / Math.PI;

/**
 * A deterministic orthonormal basis {e1, e2} spanning the plane perpendicular
 * to `v`. Canonical: same `v` always yields the same basis. This is what lets a
 * glyph back-projected along axis A reproduce exactly when viewed along A.
 */
export function basis(v: Vec3): [Vec3, Vec3] {
  const n = normalize(v);
  const helper: Vec3 = Math.abs(n[2]) < 0.9 ? [0, 0, 1] : [1, 0, 0];
  const e1 = normalize(cross(n, helper));
  const e2 = cross(n, e1); // already unit: n ⟂ e1, both unit
  return [e1, e2];
}

/** Uniformly random unit vector on the sphere (Marsaglia z-method). */
export function randDir(rng: RNG): Vec3 {
  const z = 2 * rng() - 1;
  const phi = 2 * Math.PI * rng();
  const r = Math.sqrt(Math.max(0, 1 - z * z));
  return [r * Math.cos(phi), r * Math.sin(phi), z];
}

/** Uniformly random point inside a ball of the given radius. */
export function randInBall(rng: RNG, radius: number): Vec3 {
  return scale(randDir(rng), radius * Math.cbrt(rng()));
}

/** Rotate v around a unit-ish axis by angle (radians) — Rodrigues' formula. */
export function rotateAroundAxis(v: Vec3, axis: Vec3, angle: number): Vec3 {
  const k = normalize(axis);
  const c = Math.cos(angle);
  const s = Math.sin(angle);
  const kv = cross(k, v);
  const kd = dot(k, v) * (1 - c);
  return [v[0] * c + kv[0] * s + k[0] * kd, v[1] * c + kv[1] * s + k[1] * kd, v[2] * c + kv[2] * s + k[2] * kd];
}
