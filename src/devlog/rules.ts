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
    status: 'playable',
    fantasy:
      'An encrypted datastructure hangs in space as a cloud of noise. From exactly one viewpoint the noise collapses into a key. Find the angle, read the key, extract it without touching the tripwires.',
    how: [
      'Orbit the cloud (drag). One hidden viewing angle makes the scattered dots snap into a glyph.',
      'As you near that angle the signal dots contract and brighten; within tolerance the view soft-snaps and the glyph is legible. The dotted arc fills toward a lock.',
      'While aligned, click every glyph point to extract it (they light up). All points solves the lock; a gold shine confirms the key.',
      'A NOISE click is a dud (small time cost); a TRIP dot — just outside the glyph outline — is a hazard hit. Harder boards hide several glyphs on different axes; solve them in any order.',
    ],
    fail: [
      'Critical: 3 TRIP hits trips the alarm.',
      'Soft: the run timer expires — attempt lost, retry allowed. You can jack out any time.',
      'Pressure: a scan wavefront sweeps the cloud; caught mid-extraction while misaligned, it wipes a recovered point. Top tiers slowly drift the axis.',
    ],
    note: 'Playable end to end. Still to come: trace-stroke variant, audio, and SKILL/OVERRIDE modifiers.',
  },
  {
    name: 'TRANSFER',
    status: 'playable',
    fantasy:
      'Your influence device fights a host machine’s processor for control of its 12 registers. Majority wins; you become what you defeat. (Paradroid / Quazatron.)',
    how: [
      'Press 2 to play. PLAN: click the left or right wiring layer to take it (the two differ in quality — read before you commit).',
      'RUN: click your terminals to fire a limited stock of pulses. Each travels its wire and claims (or inverts) central cells; REPEAT guns keep re-claiming.',
      'Later pulse wins a contested cell — hold some back to overwrite the host late, after its claims land.',
    ],
    fail: ['Fail to hold the majority of 12 cells when the timer runs out. (6-6 rematch is still TODO.)'],
    note: 'Playable MVP: firing, pulses, claims, AI, win/lose. Still to come: 6-6 rematch, richer wire visuals, side-select timer.',
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
