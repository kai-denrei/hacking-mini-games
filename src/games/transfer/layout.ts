// 2D positions for the TRANSFER circuit (world units; ortho, z=0 plane).
// Central strip of 12 cells; 8 terminals down each side.
//
// Responsive: a vertical gain stretches the Y axis so the board fills the
// screen height on tall/portrait viewports (phones) instead of collapsing into
// a thin band in the middle when the camera letterboxes the fixed-aspect board.
// Landscape/desktop keeps the original spread (gain clamps to 1).

export type Side = 'left' | 'right';

let vy = 1;

/** Set the current vertical gain (see gainFor). Views call this on resize. */
export const setVerticalGain = (g: number): void => {
  vy = g;
};
/** Current vertical gain — for placing off-board rails (budgets) consistently. */
export const vGain = (): number => vy;

/** Gain that makes the terminals fill ~72% of the visible half-height, never
 *  shrinking below the desktop baseline (1) and capped so it can't over-stretch. */
export const gainFor = (cameraTop: number): number => Math.max(1, Math.min(3.2, (0.72 * cameraTop) / 0.82));

export const cellPos = (i: number): [number, number] => [0, (0.86 - i * (1.72 / 11)) * vy];

export const termPos = (side: Side, i: number): [number, number] => [
  side === 'left' ? -1.32 : 1.32,
  (0.82 - i * (1.64 / 7)) * vy,
];
