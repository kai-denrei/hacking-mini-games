// Rules of the mini-games, shown in the dev-log panel's Rules tab.
// CONSTELLATION is playable (Phase 1); the others are described from their
// specs and marked planned.

import type { GlyphKind } from '../render/circuitElements.ts';
import { ELEMENT_INFO } from '../render/circuitElements.ts';

export interface GameRules {
  name: string;
  status: 'playable' | 'phase 1' | 'planned';
  fantasy: string;
  how: string[];
  fail: string[];
  note?: string;
  glossary?: { kind: GlyphKind; name: string; meaning: string; tag: 'good' | 'bad' | 'tool' }[];
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
    name: 'CIRCUIT',
    status: 'playable',
    fantasy:
      'The same takeover fight as TRANSFER, but you are inside the board: a live circuit of glowing traces. Light you fire flows through the wiring and claims the cells it reaches.',
    how: [
      'Press 3 to play. Same rules as TRANSFER — choose a side, then fire your terminals.',
      'Each pulse is light travelling the right-angle traces; watch it thread the circuit and light the cell it lands on. Later light wins a contested cell.',
    ],
    fail: ['Fail to hold the majority when the timer runs out.'],
    note: 'Game 3: TRANSFER’s mechanics with an angular, lit-circuit renderer (bloom + light-through-trace).',
  },
  {
    name: 'SHAPES',
    status: 'playable',
    fantasy:
      'The takeover duel as a lattice of thinking solids. The two sides are living primitives — octahedra searching on the left, cubes on the right — and every register you win resolves into your solid, turning like a solved puzzle.',
    how: [
      'Press 4 (experimental). Same rules as TRANSFER — choose a side, fire your terminals.',
      'Your terminals are “searching” primitives; a cell you claim becomes a “solving” one (octahedron if you took the left side, cube if the right).',
    ],
    fail: ['Fail to hold the majority when the timer runs out.'],
    note: 'Game 4: a Braille-Lab Modes × Primitives experiment over TRANSFER’s mechanics.',
  },
  {
    name: 'TUBES',
    status: 'playable',
    fantasy:
      'The takeover duel where you can finally read the wiring. Two circuits of glowing tubes; each terminal fans out through inverters, repeaters and dead-ends to the register strip. Read them, take the better side, spend your pulses well.',
    how: [
      'Press 5. PLAN: hover any terminal to light its tubes and preview which cells it reaches (rings coloured by element). Read both sides, then click the better circuit to take it.',
      'A tube carrying an ◍ inverts the cell it reaches; a ◆ arms a repeat-gun; a ✕ dead-ends and wastes the pulse. A fork is two tubes.',
      'RUN: fire your terminals; light threads the tubes and claims cells. Later light wins a contested cell.',
    ],
    fail: ['Fail to hold the majority when the timer runs out.'],
    note: 'Game 5: the read-the-circuit model. Elements are derived from the (verified) outcome sim; the deeper 8×4 lane grid with JOIN is a later step.',
  },
  {
    name: 'HDT',
    status: 'playable',
    fantasy:
      'HanDouTai (半導体 — semiconductor). The board is dead. Flip every node from OFF to ON by reading the wire vocabulary first, then activating each element in the correct sequence. One misread shorts the circuit.',
    how: [
      'Press 8. The board starts fully OFF. Read each wire element before you touch anything — hover to inspect its type.',
      'Activate elements in sequence: a CLAIM node captures its cell; a SPLIT fans one pulse into two; a LOCK freezes the cell permanently against enemy writes.',
      'JOINER and CONVERT reshape the signal flow — plan your order so dependent nodes are ready before their inputs fire.',
      'Win rule (1985 standard): ≥ 7 cells Complete → board accepted. Exactly 6 Complete → Deadlock, replay the board. ≤ 5 Complete → Rejected.',
    ],
    fail: [
      'Critical: triggering a DEAD END, SHORT, or FLIP node wastes the pulse — the cell stays off and the element is spent.',
      'A FLIP node gives the cell to the opponent side; FLIP-owned cells count against your total.',
      'Deadlock (6 Complete) replays the board from scratch — no win, no loss, just another try.',
    ],
    note: 'Game 8: the read-the-circuit model brought to a duel against the host with the full wire vocabulary. Shared with TUBES (game 5).',
    glossary: ELEMENT_INFO,
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
