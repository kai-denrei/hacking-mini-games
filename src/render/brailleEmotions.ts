// Braille emotion faces — a focused port of Braille Lab's emotion set (© Jakub
// Antalik). Each emotion is an 8×8 dot grid (some animated) rendered to a 4×2
// block of braille characters — a tiny animated face for the TRACE terminal.

type Grid = number[][];
interface Emotion {
  fps: number;
  frames: Grid[];
}

// 8×8 grids (row-major). 1 = dot on.
const EMOTIONS: Record<string, Emotion> = {
  scan: {
    fps: 3,
    frames: [
      [[0,0,0,0,0,0,0,0],[0,1,1,0,0,1,1,0],[0,0,0,0,0,0,0,0],[1,0,0,0,1,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0]],
      [[0,0,0,0,0,0,0,0],[0,1,1,0,0,1,1,0],[0,0,0,0,0,0,0,0],[0,1,0,0,0,0,1,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0]],
      [[0,0,0,0,0,0,0,0],[0,1,1,0,0,1,1,0],[0,0,0,0,0,0,0,0],[0,0,0,1,0,0,0,1],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0]],
    ],
  },
  suspicious: { fps: 4, frames: [[[0,0,0,0,0,0,0,0],[0,1,0,0,0,0,0,1],[0,0,0,0,0,1,0,0],[0,0,1,0,0,1,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,1,1,1,1,1,1,0],[0,0,0,0,0,0,0,0]]] },
  awe: { fps: 4, frames: [[[0,1,1,0,0,1,1,0],[0,0,0,0,0,0,0,0],[0,1,1,0,0,1,1,0],[0,1,1,0,0,1,1,0],[0,0,0,0,0,0,0,0],[0,0,1,1,1,1,0,0],[0,0,1,0,0,1,0,0],[0,0,1,1,1,1,0,0]]] },
  glee: { fps: 4, frames: [[[0,1,1,0,0,1,1,0],[0,0,0,0,0,0,0,0],[0,1,1,0,0,1,1,0],[0,1,1,0,0,1,1,0],[0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,1],[0,1,0,0,0,0,1,0],[0,0,1,1,1,1,0,0]]] },
  love: { fps: 4, frames: [[[0,1,1,0,0,1,1,0],[0,0,0,0,0,0,0,0],[0,1,0,1,1,0,1,0],[0,0,1,0,0,1,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,1,0,0,0,0,1,0],[0,0,1,1,1,1,0,0]]] },
  sad: { fps: 4, frames: [[[0,0,0,0,0,0,0,0],[0,0,1,0,0,1,0,0],[0,1,0,0,0,0,1,0],[0,0,1,0,0,1,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,1,1,1,1,0,0],[0,1,0,0,0,0,1,0]]] },
  scared: { fps: 4, frames: [[[0,0,1,0,0,1,0,0],[0,1,0,0,0,0,1,0],[0,1,1,0,0,1,1,0],[0,1,1,0,0,1,1,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,0,1,1,0,0,0],[0,0,0,1,1,0,0,0]]] },
  angry: { fps: 4, frames: [[[0,0,0,0,0,0,0,0],[1,0,0,0,0,0,0,1],[0,1,0,0,0,0,1,0],[0,0,1,0,0,1,0,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,1,1,1,1,0,0],[0,0,0,0,0,0,0,0]]] },
  worried: { fps: 4, frames: [[[0,0,0,0,0,0,0,0],[0,0,1,0,0,1,0,0],[0,1,0,0,0,0,1,0],[0,1,0,0,0,0,1,0],[0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0],[0,0,1,1,1,1,0,0],[0,0,0,0,0,0,0,0]]] },
};

export type EmotionId = keyof typeof EMOTIONS;

const DOT_BITS = [
  [0x01, 0x08],
  [0x02, 0x10],
  [0x04, 0x20],
  [0x40, 0x80],
];

// 8×8 grid → 2 lines × 4 braille chars (each char is a 4-row × 2-col cell).
function gridToBraille(grid: Grid): string {
  const lines: string[] = [];
  for (let cr = 0; cr < 2; cr++) {
    let line = '';
    for (let cc = 0; cc < 4; cc++) {
      let mask = 0;
      for (let r = 0; r < 4; r++) for (let c = 0; c < 2; c++) if (grid[cr * 4 + r]?.[cc * 2 + c]) mask |= DOT_BITS[r]![c]!;
      line += String.fromCodePoint(0x2800 + mask);
    }
    lines.push(line);
  }
  return lines.join('\n');
}

/** The braille face for `id` at time `t` (seconds), as a 2-line string. */
export function emotionFace(id: EmotionId, t: number): string {
  const e = EMOTIONS[id] ?? EMOTIONS.scan!;
  const frame = e.frames[Math.floor(t * e.fps) % e.frames.length] ?? e.frames[0]!;
  return gridToBraille(frame);
}
