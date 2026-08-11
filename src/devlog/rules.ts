// Rules of the mini-games, shown in the dev-log panel's Rules tab.
// CONSTELLATION is playable (Phase 1); the others are described from their
// specs and marked planned.

export interface GameRules {
  name: string;
  status: 'playable' | 'phase 1' | 'planned';
  fantasy: string;
  how: string[];
  fail: string[];
  note?: string;
}

export const RULES: GameRules[] = [
  {
    name: 'CONSTELLATION',
    status: 'phase 1',
    fantasy:
      'An encrypted datastructure hangs in space as a cloud of noise. From exactly one viewpoint the noise collapses into a key. Find the angle, read the key, extract it without touching the tripwires.',
    how: [
      'Orbit the cloud (drag). One hidden viewing angle makes the scattered dots snap into a glyph.',
      'As you near that angle the signal dots contract and brighten; within tolerance the view soft-snaps and the glyph is legible. The dotted arc fills toward a lock.',
      'Extract (planned): while aligned, select every glyph point to lift the key. A NOISE dot is a dud (small time cost); a TRIP dot — sitting just outside the glyph outline — is a hazard hit.',
      'Harder boards hide several glyphs on different axes (multi-lock) — solve them in any order.',
    ],
    fail: [
      'Critical: 3 TRIP hits trips the alarm.',
      'Soft: the run timer expires — attempt lost, retry allowed. You can jack out any time.',
      'Pressure: a scan wavefront sweeps the cloud; caught mid-extraction while misaligned, it wipes a recovered point. Top tiers slowly drift the axis.',
    ],
    note: 'This build: Phase 1 (find the angle) only. Extraction, sweep and scoring are next.',
  },
  {
    name: 'TRANSFER',
    status: 'planned',
    fantasy:
      'Your influence device fights a host machine’s processor for control of its 12 registers. Majority wins; you become what you defeat. (Paradroid / Quazatron.)',
    how: [
      'Pick the better of two wiring layers (a pre-commit read of the board).',
      'Fire a limited stock of pulses down input terminals; they thread through splitters/inverters/repeaters to claim central cells.',
      'Later pulse wins a contested cell — so time your overwrites against the enemy AI’s spend.',
    ],
    fail: ['Lose the majority of 12 cells. Margin (how decisively) scales the reward.'],
  },
  {
    name: 'TRACE',
    status: 'planned',
    fantasy:
      'Breach a network at an I/O port and capture a path to the registry before the system’s diagnostic subroutine traces the intrusion back to your entry.',
    how: [
      'Capture adjacent nodes; each attempt rolls a visible detection chance (node rating vs your level).',
      'Fortify nodes to slow the tracer; spend NUKE (silent capture) / FREEZE (halt tracer); grab STORE loot on detours.',
      'On detection a tracer crawls back toward your entry on per-node countdowns — outrun it or get cut off.',
    ],
    fail: ['Critical: the tracer reaches your entry node. Soft: jack out early, keep nothing.'],
  },
  {
    name: 'BREACH',
    status: 'planned',
    fantasy:
      'A code matrix scrolls before you. You have a tiny buffer. Chain one path through the grid that smuggles every daemon in at once. (Cyberpunk 2077 Breach Protocol.)',
    how: [
      'Pick glyphs into a small buffer; picks alternate axis — row, then column, then row…',
      'Complete each daemon (a target sub-sequence) as a contiguous run in the buffer; overlap them so one path completes several.',
      'Avoid the WORM hazard cell, which wastes a slot and speeds the clock.',
    ],
    fail: ['Soft: timer or buffer runs out with zero daemons completed. Margin = spare buffer + time.'],
  },
];
