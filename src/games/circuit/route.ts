import { termPos, cellPos, type Side } from '../transfer/layout.ts';

// Orthogonal (right-angle) trace routing for the CIRCUIT renderer. Each
// terminal→cell wire runs: a short horizontal stub, down a per-terminal vertical
// bus, then a horizontal approach into the cell — like a PCB trace. Returns dots
// sampled along the path, each tagged with u = fraction along the trace, so a
// travelling pulse can light the trace up to (and trailing behind) its position.

export interface TraceDot {
  x: number;
  y: number;
  u: number;
}

export function traceDots(side: Side, term: number, cell: number, spacing = 0.028): TraceDot[] {
  const [sx, ty] = termPos(side, term);
  const busX = sx * (0.72 - term * 0.045); // a distinct vertical channel per terminal
  const [, cy] = cellPos(cell);
  const approachX = sx > 0 ? 0.16 : -0.16;
  const pts: [number, number][] = [
    [sx, ty],
    [busX, ty],
    [busX, cy],
    [approachX, cy],
    [0, cy],
  ];

  let total = 0;
  const segLen: number[] = [];
  for (let i = 1; i < pts.length; i++) {
    const l = Math.hypot(pts[i]![0] - pts[i - 1]![0], pts[i]![1] - pts[i - 1]![1]);
    segLen.push(l);
    total += l;
  }

  const out: TraceDot[] = [];
  let acc = 0;
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1]!;
    const [x1, y1] = pts[i]!;
    const l = segLen[i - 1]!;
    const steps = Math.max(1, Math.round(l / spacing));
    for (let k = 0; k < steps; k++) {
      const t = k / steps;
      out.push({ x: x0 + (x1 - x0) * t, y: y0 + (y1 - y0) * t, u: total > 0 ? (acc + t * l) / total : 0 });
    }
    acc += l;
  }
  out.push({ x: pts[pts.length - 1]![0], y: pts[pts.length - 1]![1], u: 1 });
  return out;
}
