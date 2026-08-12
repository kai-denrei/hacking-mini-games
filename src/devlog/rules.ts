// Rules of the mini-games, shown in the dev-log panel's Rules tab.
// CONSTELLATION is playable (Phase 1); the others are described from their
// specs and marked planned.

import { ELEMENT_INFO } from '../render/circuitElements.ts';
import { TRACE_NODE_INFO } from '../render/traceGlyphs.ts';

export interface GlossaryEntry {
  kind: string;
  name: string;
  meaning: string;
  tag: 'good' | 'bad' | 'tool';
  source: 'circuit' | 'trace'; // which glyph painter draws it
}
export interface GameRules {
  name: string;
  status: 'playable' | 'phase 1' | 'planned';
  fantasy: string;
  how: string[];
  fail: string[];
  note?: string;
  glossary?: GlossaryEntry[];
}

const circuitGlossary: GlossaryEntry[] = ELEMENT_INFO.map((e) => ({ ...e, source: 'circuit' }));
const traceGlossary: GlossaryEntry[] = TRACE_NODE_INFO.map((e) => ({ ...e, source: 'trace' }));

export const RULES: GameRules[] = [
  {
    name: 'CONSTELLATION',
    status: 'playable',
    fantasy:
      'An encrypted datastructure hangs in space as a cloud of noise. From exactly one viewpoint the noise collapses into a key. Find the angle, read the key, extract it without touching the tripwires.',
    how: [
      'Press 1. Orbit the cloud (drag). One hidden viewing angle makes the scattered thinking-orbs snap into a glyph.',
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
    name: 'TRACE',
    status: 'playable',
    fantasy:
      'You breach a network at an I/O port (your ENTRY) and spread across its nodes toward a REGISTRY. Grabbing the registry trips the alarm — now a tracer races your captured territory back to your entry. Get the data and get out before it traces you home.',
    how: [
      'Press 2. You start owning only your ENTRY ◎ (green). Click any node touching your territory to capture it — capture takes a moment, then rolls a detection chance shown on hover (higher-rated nodes are slower and riskier).',
      'Push toward a REGISTRY ◈ along the low-rated nodes. Detour to a STORE ◇ for loot if you dare — every capture is another detection roll, so greed wakes the tracer early.',
      'Grabbing a registry ALWAYS trips the alarm: the tracer spawns and crawls, node by node, back toward your ENTRY. Now retreat — click your own captured nodes to hop home before it arrives.',
      'Tools: ❄ FREEZE halts the tracer for a few seconds; ✚ NUKE captures one node silently (no roll). Read the node glossary below — ✕ ALARM and ◌ SPAM nodes bite.',
    ],
    fail: [
      'Win: reach your ENTRY on the way out after taking the registry.',
      'Critical: the tracer reaches your ENTRY first — you are traced.',
      'Greed tax: extra STORE captures raise detection, so the tracer wakes earlier and the exfil is harder.',
    ],
    note: 'Game 2: a graph capture-vs-tracer race (Deus Ex / Uplink / Invisible Inc). Still to come: fog + one-way edges at higher tiers, fortify, and the accelerating-tracer audio tick.',
    glossary: traceGlossary,
  },
  {
    name: 'HDT',
    status: 'playable',
    fantasy:
      'HanDouTai (半導体 — semiconductor). A takeover duel over 12 registers: you and the host each drive one side of a circuit. Read the dead board, take the better side, and out-claim the processor for control.',
    how: [
      'Press 3. PLAN: the board is unpowered — read both circuits and each wire’s element (see the glossary below), then click a side to power it on and take it. The host drives the other side.',
      'RUN: click your terminals to fire a limited stock of pulses. Each travels its wire to an element that claims (or wastes, or flips) the register it reaches; later light wins a contested cell — so hold some back to overwrite the host late.',
      'Read the wires: SPLIT claims two at once, LOCK freezes a register for good; DEAD-END, SHORT and the filled ■ transformer (FLIP) waste the pulse or feed the host — avoid them.',
      'Win rule (1985 Paradroid): ≥ 7 of 12 registers yours → Complete. Exactly 6 → Deadlock, replay the same board. ≤ 5 → Rejected.',
    ],
    fail: [
      'Critical: hold fewer than 6 registers when the clock runs out → Rejected.',
      'Wasted pulses: a DEAD-END or SHORT absorbs your pulse; the filled ■ transformer (FLIP) hands the register to the host.',
      'Deadlock (6–6) replays the exact same board — no win, no loss, just another try.',
    ],
    note: 'Game 3: the read-the-circuit takeover duel with the full Paradroid wire vocabulary and an unpowered→powered read. The host ramps up over the ladder (slower + fewer pulses on the low rungs).',
    glossary: circuitGlossary,
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
