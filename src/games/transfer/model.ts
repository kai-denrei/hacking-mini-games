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

export interface Board {
  seed: string;
  difficulty: Difficulty;
  params: TierParams;
  left: Layer;
  right: Layer;
  /** which side the generator intends the player to pick (higher quality) */
  better: 'left' | 'right';
  genStats: { boardAttempts: number; qLeft: number; qRight: number };
}

export const CELLS = 12;
export const WIN = 7;

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
