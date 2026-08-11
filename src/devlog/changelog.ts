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
  'Two games now playable. CONSTELLATION (parallax point-cloud extraction) and ' +
  'TRANSFER (Paradroid circuit-takeover duel). Press 1 / 2 to switch between them; ' +
  'R reseeds the current game.';

export const MILESTONES: Milestone[] = [
  {
    build: 'live',
    date: '2026-08-11',
    title: 'TRANSFER (game 2) — playable',
    added: [
      'The circuit renders as a flat dot-field: a central 12-cell strip flanked by two 8-terminal wiring layers, wires threading terminal → cell.',
      'PLAN: click a side to take it. RUN: click your terminals to fire pulses that travel the wires (with tails) and claim cells — later pulse wins.',
      'Owner colour (you teal / host coral), claim flash, REPEAT guns, the enemy AI firing back, shrinking timer ring, budget dots, win/lose.',
      'Built on the logic core (deterministic sim + solution-first generator, verified across 200 boards). 6-6 rematch still TODO.',
    ],
  },
  {
    build: null,
    date: '2026-08-11',
    title: 'CONSTELLATION: feel + content pass',
    added: [
      'Extraction magnetism (cursor grabs the nearest glyph point) + reticle snap + extract-pop.',
      'Glyph bank grown to 15 (min Hamming 8).',
      'Timer is a hollow thin ring that shrinks and shifts teal → amber → red.',
    ],
  },
  {
    build: null,
    date: '2026-08-11',
    title: 'Phase 2 — extraction, sweep, win/lose',
    added: [
      'Click the glyph’s points while aligned to extract them; all points → lock solved, all locks → win.',
      'TRIP hazards cost a strike + 10% of the timer (3 strikes = alarm); NOISE clicks are duds.',
      'A scan wavefront sweeps the cloud; a pass caught mid-extraction while misaligned wipes a point back. Axis drift on D4+.',
      'HUD: depleting timer, strike pips, extraction progress; win / alarm / timeout end screens with margin + extracted keys.',
    ],
  },
  {
    build: null,
    date: '2026-08-11',
    title: 'Phase 1 polish',
    added: [
      'θ_lock soft-snap with hysteresis (magnetic assist, hands-off).',
      'Coherence → per-point brightness; the noise dims as a lock forms so the glyph reads cleanly.',
      'A gold “found” shine (color tint + bloom) fires the moment a lock completes.',
      'Diegetic dotted-arc coherence meter.',
    ],
  },
  {
    build: null,
    date: '2026-08-11',
    title: 'Board wired into the renderer',
    added: [
      'A generated CONSTELLATION board renders as a halftone point cloud.',
      'Orbit-to-align: as your view nears a hidden axis, that lock’s signal contracts and the glyph resolves out of the noise.',
      'R to reseed; this dev-log panel on the version badge.',
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
    note: 'CONSTELLATION full loop',
    items: [
      { label: 'Board renders + resolves on alignment', done: true },
      { label: 'θ_lock soft-snap; coherence → brightness; found-shine', done: true },
      { label: 'Extraction, sweep + axis drift, TRIP strikes, win/lose + scoring', done: true },
      { label: 'Trace-stroke extraction variant + audio (coherence tone, ticks)' },
      { label: 'SKILL modifiers (hint band, TRIP shimmer) + OVERRIDE + exfil rule' },
    ],
  },
  {
    phase: 'Next',
    note: 'Harden + present',
    items: [
      { label: 'Difficulty/skill/seed selector UI (PLAN screen)' },
      { label: 'Feel tuning pass (extraction radius, sweep pressure, drift)' },
      { label: 'Deterministic replay (seed + input log) as an acceptance test' },
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
