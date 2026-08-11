// Hand-maintained dev log shown by the version badge (bottom-right).
// The cache-bust token is a per-BUILD fingerprint, not a per-feature version;
// `build: 'live'` on the newest milestone resolves to the current build's token
// so it always reflects what you're looking at.

export interface Milestone {
  /** cache-bust token for the build that shipped this, or 'live' / null */
  build: string | 'live' | null;
  date: string;
  title: string;
  added: string[];
}

export interface RoadmapItem {
  label: string;
  done?: boolean;
}

export interface RoadmapPhase {
  phase: string;
  note?: string;
  items: RoadmapItem[];
}

export const STATUS =
  'Building CONSTELLATION — game 1 of the series. Generator is done and verified; ' +
  'a generated board now renders and resolves into its hidden glyph on alignment. ' +
  'Next up is the real gameplay loop (extraction, sweep, win/lose).';

export const MILESTONES: Milestone[] = [
  {
    build: 'live',
    date: '2026-08-11',
    title: 'Board wired into the renderer',
    added: [
      'A generated CONSTELLATION board renders as a halftone point cloud.',
      'Orbit-to-align: as your view nears a hidden axis, that lock’s signal contracts and the glyph resolves out of the noise.',
      'Live coherence readout (top-left) + R to reseed.',
      'This dev-log panel — click the version badge to open it.',
    ],
  },
  {
    build: null,
    date: '2026-08-11',
    title: 'CONSTELLATION generator',
    added: [
      'Solution-first, seeded board generator (spec §6): hidden axis, back-projected key glyph, TRIP hazards in the margin ring, noise fill.',
      'Rigid-Procrustes coherence metric (fits the whole signal set to the glyph) — also the gameplay alignment cue.',
      'False-constellation uniqueness check: verified across 1000 boards, zero spurious, all first-try.',
      'Dependency-free vec3 math so the logic runs headless in Node for testing.',
    ],
  },
  {
    build: null,
    date: '2026-08-11',
    title: 'Shared glyph bank',
    added: [
      '10× 5×7 key glyphs (CONSTELLATION) + 6× 2×4 braille symbols (BREACH) — one cross-game visual language.',
      'Distinctness verified numerically (min Hamming 9 and 4).',
      'Helpers: back-projection points, the 1-dot TRIP margin ring, Hamming distance.',
    ],
  },
  {
    build: 'e059300d',
    date: '2026-08-11',
    title: 'Scaffold, renderer & cache-busting',
    added: [
      'TypeScript + Vite + Three.js project.',
      'Dotted-halftone look as a GPU point shader (depth → grayscale + size), ported from the Braille PoC.',
      'Seeded RNG (mulberry32) + the shared session contract.',
      'Cache-busting toolkit wired into the build (this badge).',
    ],
  },
];

export const ROADMAP: RoadmapPhase[] = [
  {
    phase: 'Now',
    note: 'CONSTELLATION Phase 1',
    items: [
      { label: 'Board renders + resolves on alignment', done: true },
      { label: 'θ_lock soft-snap with hysteresis (no flicker at the boundary)' },
      { label: 'Coherence → brightness/tone, diegetic dotted-arc meter (no HUD text)' },
    ],
  },
  {
    phase: 'Next',
    note: 'CONSTELLATION Phase 2 + full loop',
    items: [
      { label: 'Extraction: select/trace the glyph points while aligned' },
      { label: 'Sweep wavefront pressure + axis drift (D4+)' },
      { label: 'TRIP hits → 3-strike critical loss; soft loss on timeout' },
      { label: 'Win, margin scoring, extracted-glyph payload (intel out)' },
      { label: 'SKILL modifiers (coherence meter, hint band, TRIP shimmer) + OVERRIDE' },
    ],
  },
  {
    phase: 'Later',
    note: 'The rest of the series',
    items: [
      { label: 'Braille dot-matrix renderer (second render target)' },
      { label: 'TRANSFER (Paradroid duel), TRACE (node capture), BREACH (matrix)' },
      { label: 'Write the 4 missing specs (deduction, flow-routing, timing, crosslink)' },
      { label: 'Host integration + deploy' },
    ],
  },
];
