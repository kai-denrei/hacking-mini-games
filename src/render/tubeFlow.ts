import type { DotField } from './dotfield.ts';
import type { TraceDot } from '../games/circuit/route.ts';

// The "working torus" tube kernel — a cut-and-straightened torus rendered as a
// thin dotted wire: a bright round core with dim walls, plus a working current
// that travels and spirals along the tube so it always reads as live. Extracted
// from tubes/view.ts as the single source of truth (DRY) so HDT (game #8) and
// TUBES (game #5) share the same wire renderer.

export type RGB = readonly number[] | number[];

const mix = (a: RGB, b: RGB, t: number): [number, number, number] => [a[0]! + (b[0]! - a[0]!) * t, a[1]! + (b[1]! - a[1]!) * t, a[2]! + (b[2]! - a[2]!) * t];

export const TUBE_R = 0.012;

/** unit direction + perpendicular at sample index i: [dx, dy, nx, ny] */
export const dirAt = (dots: TraceDot[], i: number): [number, number, number, number] => {
  const a = dots[Math.max(0, i - 1)]!;
  const c = dots[Math.min(dots.length - 1, i + 1)]!;
  let dx = c.x - a.x;
  let dy = c.y - a.y;
  const l = Math.hypot(dx, dy) || 1;
  dx /= l;
  dy /= l;
  return [dx, dy, -dy, dx]; // dir + perp
};

/** smooth interpolated point (+ perp) at fractional u — no snapping to samples */
export const pointAtU = (dots: TraceDot[], u: number): { x: number; y: number; nx: number; ny: number } => {
  let i = 0;
  while (i < dots.length - 2 && dots[i + 1]!.u < u) i++;
  const a = dots[i]!;
  const b = dots[Math.min(i + 1, dots.length - 1)]!;
  const t = Math.max(0, Math.min(1, (u - a.u) / (b.u - a.u || 1)));
  let dx = b.x - a.x;
  let dy = b.y - a.y;
  const l = Math.hypot(dx, dy) || 1;
  dx /= l;
  dy /= l;
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, nx: -dy, ny: dx };
};

/**
 * Draw one tube from its trace dots. `field` is the DotField to paint into.
 * When `powered` is false, the working-current particle stream is suppressed
 * (the OFF / PLAN state) — only the dim core + walls (and any lightAt glow) draw.
 */
export function drawTube(
  field: DotField,
  dots: TraceDot[],
  dim: RGB,
  flow: RGB,
  lightAt: (u: number) => { b: number; col: RGB },
  endU: number,
  nowSec: number,
  phase: number,
  powered = true,
): void {
  const wall: RGB = [dim[0]! * 0.7, dim[1]! * 0.7, dim[2]! * 0.7];
  for (let i = 0; i < dots.length; i++) {
    const d = dots[i]!;
    if (d.u > endU) break;
    const [, , nx, ny] = dirAt(dots, i);
    const { b, col } = lightAt(d.u);
    const amb = 0.16 * Math.max(0, Math.sin((d.u * 2.2 - nowSec * 0.09 + phase) * Math.PI * 2));
    const coreCol = mix(dim, col, Math.min(1, b));
    const cb = 0.45 + amb + 0.85 * b;
    field.dot(d.x, d.y, coreCol[0] * cb, coreCol[1] * cb, coreCol[2] * cb, 2.3 + b * 3.6, 0.95);
    for (const off of [1, -1] as const) {
      const wc = mix(wall, col, Math.min(1, b * 0.8));
      const wb = 0.3 + amb * 0.7 + 0.6 * b;
      field.dot(d.x + nx * off * TUBE_R, d.y + ny * off * TUBE_R, wc[0] * wb, wc[1] * wb, wc[2] * wb, 1.6 + b * 2.2, 0.85);
    }
  }
  if (!powered) return;
  // working current: a smooth continuous stream of light travelling +
  // spiralling along the tube (interpolated, so it glides instead of stepping)
  const PN = 5;
  for (let k = 0; k < PN; k++) {
    const head = (nowSec * 0.13 + k / PN + phase * 0.13) % 1;
    for (let s = 0; s < 5; s++) {
      const uu = head - s * 0.022;
      if (uu <= 0.005 || uu > endU) continue;
      const q = pointAtU(dots, uu);
      const spiral = Math.sin(uu * 24 + nowSec * 2.2 + phase) * TUBE_R;
      const a = (1 - s / 5) * 0.85;
      field.dot(q.x + q.nx * spiral, q.y + q.ny * spiral, flow[0]! * a, flow[1]! * a, flow[2]! * a, 2.8 - s * 0.4, 0.92);
    }
  }
}
