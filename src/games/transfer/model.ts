import type { Difficulty } from '../../engine/session.ts';

// TRANSFER — circuit-takeover duel (Paradroid/Quazatron). See 01-transfer.md.
//
// Mechanical core (the spatial lane grid is a rendering concern, added later):
// each of a layer's 8 terminals, when fired, sends a pulse that after a short
// delay produces one or more OUTCOMES on the central 12-cell strip —
//   CLAIM  = set the cell to the firer (later-claim-wins)
//   INVERT = flip the cell's owner (NEUTRAL→firer, P↔E)
//   DEAD   = absorbed (a wasted lane — the trap on tempting routes)
//   REPEAT = arm a gun that re-claims the cell every period until match end
// A terminal with two outcomes is a SPLIT.

export type Owner = 'NEUTRAL' | 'P' | 'E';
export type OutcomeKind = 'CLAIM' | 'INVERT' | 'DEAD' | 'REPEAT';

export interface Outcome {
  cell: number; // 0..11
  delay: number; // seconds terminal→cell (route length), 0.6..1.4
  kind: OutcomeKind;
  repeatPeriod?: number;
}
export interface Terminal {
  id: number;
  outcomes: Outcome[]; // 1..3 (SPLIT / split-with-trap)
}
export interface Layer {
  terminals: Terminal[]; // 8
}

export type AiPolicy = 'naive' | 'greedy' | 'greedy+' | 'optimal-ish';

export interface TierParams {
  tMatch: number;
  pPulses: number;
  ePulses: number;
  traps: number; // DEAD+INVERT outcomes per layer
  repeats: number; // REPEAT outcomes per layer
  ai: AiPolicy;
}

/** A matchup: your current host's class vs the target/defender's class (0..9).
 *  Difficulty is the gap between them, not a level number (see the design study:
 *  paradroid-difficulty-study.md). Both budgets and the board's hazards/AI derive
 *  from these two classes. */
export type Klass = number; // 0..9
export interface MatchSpec {
  attacker: Klass;
  defender: Klass;
}

export interface Board {
  seed: string;
  spec: MatchSpec;
  params: TierParams;
  left: Layer;
  right: Layer;
  /** which side the generator intends the player to pick (higher quality) */
  better: 'left' | 'right';
  genStats: { boardAttempts: number; qLeft: number; qRight: number };
}

export const CELLS = 12;
export const WIN = 7;

// Class model (study §"Concrete amendments"). Pulses = base + class; the board's
// hazard density and defender AI key off the defender's class; the timer is
// fixed (difficulty comes from the budget gap + hazards + AI, not the clock).
export const PULSE_BASE = 4;
export const T_MATCH = 16;

export function aiForClass(defender: Klass): AiPolicy {
  return defender <= 2 ? 'naive' : defender <= 5 ? 'greedy' : defender <= 7 ? 'greedy+' : 'optimal-ish';
}

export function classParams(spec: MatchSpec): TierParams {
  const ai = aiForClass(spec.defender);
  const attackerBonus = ai === 'optimal-ish' ? 1 : 0; // P90 rule: +1 pulse vs a perfect defender
  return {
    tMatch: T_MATCH,
    pPulses: PULSE_BASE + spec.attacker + attackerBonus,
    ePulses: PULSE_BASE + spec.defender,
    traps: Math.min(6, 1 + Math.round(spec.defender * 0.6)),
    repeats: spec.defender >= 6 ? 2 : spec.defender >= 3 ? 1 : 0,
    ai,
  };
}

// The scaling ladder the meta-layer walks: rung 0 is the shallow end. Each win
// climbs a rung (bigger class gap, smarter AI, more hazards); a loss reverts to
// the shallow end — proportional punishment that always reopens a winnable board.
export const LADDER: readonly MatchSpec[] = [
  { attacker: 5, defender: 2 },
  { attacker: 5, defender: 3 },
  { attacker: 4, defender: 4 },
  { attacker: 4, defender: 6 },
  { attacker: 3, defender: 7 },
  { attacker: 2, defender: 8 },
  { attacker: 2, defender: 9 },
];

/** Back-compat D1–D5 wrapper → a matchup (used by callers still on tiers). */
export const specForDifficulty = (d: Difficulty): MatchSpec =>
  ([
    { attacker: 6, defender: 2 },
    { attacker: 5, defender: 3 },
    { attacker: 4, defender: 5 },
    { attacker: 3, defender: 7 },
    { attacker: 2, defender: 9 },
  ][d - 1] ?? { attacker: 5, defender: 3 });

export const TIERS: Record<Difficulty, TierParams> = {
  1: { tMatch: 20, pPulses: 10, ePulses: 6, traps: 2, repeats: 0, ai: 'naive' },
  2: { tMatch: 16, pPulses: 9, ePulses: 7, traps: 3, repeats: 0, ai: 'naive' },
  3: { tMatch: 14, pPulses: 8, ePulses: 8, traps: 4, repeats: 1, ai: 'greedy' },
  4: { tMatch: 12, pPulses: 7, ePulses: 10, traps: 5, repeats: 1, ai: 'greedy+' },
  5: { tMatch: 10, pPulses: 6, ePulses: 12, traps: 6, repeats: 2, ai: 'optimal-ish' },
};

// static value of a terminal (expected influence): a REPEAT gun is worth more
// than a one-shot claim; a bare INVERT is contextual so counts partial.
export function terminalValue(t: Terminal): number {
  let v = 0;
  for (const o of t.outcomes) {
    if (o.kind === 'CLAIM') v += 1;
    else if (o.kind === 'REPEAT') v += 2;
    else if (o.kind === 'INVERT') v += 0.5;
  }
  return v;
}

export function layerQuality(l: Layer): number {
  return l.terminals.reduce((s, t) => s + terminalValue(t), 0);
}

/** distinct cells a layer can influence (non-dead outcomes) */
export function reachSet(l: Layer): Set<number> {
  const s = new Set<number>();
  for (const t of l.terminals) for (const o of t.outcomes) if (o.kind !== 'DEAD') s.add(o.cell);
  return s;
}

export const layerOf = (b: Board, which: 'left' | 'right'): Layer => (which === 'left' ? b.left : b.right);
