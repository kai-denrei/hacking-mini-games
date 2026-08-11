// 2D positions for the TRANSFER circuit (world units; ortho, z=0 plane).
// Central strip of 12 cells; 8 terminals down each side.

export type Side = 'left' | 'right';

export const cellPos = (i: number): [number, number] => [0, 0.86 - i * (1.72 / 11)];

export const termPos = (side: Side, i: number): [number, number] => [
  side === 'left' ? -1.32 : 1.32,
  0.82 - i * (1.64 / 7),
];
