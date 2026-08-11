import type { Difficulty } from '../../engine/session.ts';
import { makeRng, randRange, type RNG } from '../../engine/rng.ts';
import {
  type Board,
  type Layer,
  type Terminal,
  type Outcome,
  type OutcomeKind,
  type TierParams,
  TIERS,
  WIN,
  layerQuality,
  reachSet,
} from './model.ts';
import { simulate, aiSchedule, playerFireLate, playerFireEarly } from './simulate.ts';

// Solution-first generation (spec §7): lay routes covering ≥9 cells with value
// ≥8, decorate with traps/repeats keeping ≥5 clean terminals, enforce a genuine
// (but not giveaway) asymmetry between the two layers, then verify with the
// simulator that the better side wins vs the tier AI and — at D3+ — that a naive
// "fire everything early" run does NOT.

const GEN = {
  splitChance: 0.35,
  reachMin: 9,
  valueMin: 8,
  ratioLo: 0.75,
  ratioHi: 0.95,
  maxBoardAttempts: 60,
};

function shuffle<T>(rng: RNG, arr: readonly T[]): T[] {
  const out = arr.slice();
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j]!, out[i]!];
  }
  return out;
}
const delay = (rng: RNG): number => randRange(rng, 0.6, 1.4);

function makeLayer(rng: RNG, params: TierParams): Layer {
  const order = shuffle(rng, Array.from({ length: 12 }, (_, i) => i));
  const terminals: Terminal[] = [];
  for (let i = 0; i < 8; i++) {
    const outcomes: Outcome[] = [{ cell: order[i]!, delay: delay(rng), kind: 'CLAIM' }];
    terminals.push({ id: i, outcomes });
  }
  // guarantee reach ≥ 10: terminals 0,1 split to two fresh cells
  terminals[0]!.outcomes.push({ cell: order[8]!, delay: delay(rng), kind: 'CLAIM' });
  terminals[1]!.outcomes.push({ cell: order[9]!, delay: delay(rng), kind: 'CLAIM' });
  // a few more random splits for texture
  for (let i = 2; i < 8; i++) {
    if (rng() < GEN.splitChance) {
      const c = order[(i + 5) % 12]!;
      if (!terminals[i]!.outcomes.some((o) => o.cell === c))
        terminals[i]!.outcomes.push({ cell: c, delay: delay(rng), kind: 'CLAIM' });
    }
  }

  // repeats: promote CLAIMs on the strongest clean terminals to REPEAT guns
  for (let r = 0; r < params.repeats; r++) {
    const t = terminals[r % 4]!;
    const claim = t.outcomes.find((o) => o.kind === 'CLAIM');
    if (claim) {
      claim.kind = 'REPEAT';
      claim.repeatPeriod = randRange(rng, 1.8, 2.6);
    }
  }

  // traps: add DEAD/INVERT lanes on terminals 5,6,7 (≥5 terminals stay clean)
  let trapsLeft = params.traps;
  for (const ti of [7, 6, 5]) {
    for (let k = 0; k < 2 && trapsLeft > 0; k++) {
      const kind: OutcomeKind = rng() < 0.5 ? 'DEAD' : 'INVERT';
      terminals[ti]!.outcomes.push({ cell: order[(ti + k + 3) % 12]!, delay: delay(rng), kind });
      trapsLeft--;
    }
  }
  return { terminals };
}

const anyClaimTerminal = (l: Layer): Terminal | undefined =>
  l.terminals.find((t) => t.outcomes.some((o) => o.kind === 'CLAIM'));
const anyDeadOutcome = (l: Layer): Outcome | undefined => {
  for (const t of l.terminals) for (const o of t.outcomes) if (o.kind === 'DEAD') return o;
  return undefined;
};

/** Nudge `weak` so weak.Q / strong.Q lands in [ratioLo, ratioHi]. */
function balance(strong: Layer, weak: Layer): void {
  for (let guard = 0; guard < 30; guard++) {
    const r = layerQuality(weak) / layerQuality(strong);
    if (r > GEN.ratioHi) {
      const t = anyClaimTerminal(weak);
      const c = t?.outcomes.find((o) => o.kind === 'CLAIM');
      if (c) c.kind = 'DEAD';
      else break;
    } else if (r < GEN.ratioLo) {
      const d = anyDeadOutcome(weak);
      if (d) d.kind = 'CLAIM';
      else break;
    } else return;
  }
}

export function generateBoard(difficulty: Difficulty, seed: string): Board {
  const params = TIERS[difficulty];
  const rng = makeRng(`${seed}:transfer:${difficulty}`);

  for (let attempt = 1; attempt <= GEN.maxBoardAttempts; attempt++) {
    const a = makeLayer(rng, params);
    const b = makeLayer(rng, params);
    if (reachSet(a).size < GEN.reachMin || reachSet(b).size < GEN.reachMin) continue;
    if (layerQuality(a) < GEN.valueMin || layerQuality(b) < GEN.valueMin) continue;

    // make `a` the stronger, then weaken `b` into the asymmetry band
    const strong = layerQuality(a) >= layerQuality(b) ? a : b;
    const weak = strong === a ? b : a;
    balance(strong, weak);
    if (layerQuality(weak) < GEN.valueMin || reachSet(weak).size < GEN.reachMin) continue;
    const ratio = layerQuality(weak) / layerQuality(strong);
    if (ratio < GEN.ratioLo || ratio > GEN.ratioHi) continue;

    // solver: better side (strong) as player, worse (weak) drives the AI
    const aiRng = makeRng(`${seed}:ai:${difficulty}:${attempt}`);
    const eSched = aiSchedule(params.ai, weak, params.ePulses, params.tMatch, aiRng);
    const perfect = simulate(strong, weak, playerFireLate(strong, params.pPulses, params.tMatch), eSched, params.pPulses, params.ePulses, params.tMatch);
    if (perfect.p < WIN) continue;
    if (difficulty >= 3) {
      const naive = simulate(strong, weak, playerFireEarly(strong, params.pPulses, params.tMatch), eSched, params.pPulses, params.ePulses, params.tMatch);
      if (naive.p >= WIN) continue; // naive early-fire must NOT win at D3+
    }

    const left = a;
    const right = b;
    return {
      seed,
      difficulty,
      params,
      left,
      right,
      better: strong === left ? 'left' : 'right',
      genStats: { boardAttempts: attempt, qLeft: layerQuality(left), qRight: layerQuality(right) },
    };
  }
  throw new Error(`transfer generateBoard: no valid board after ${GEN.maxBoardAttempts} attempts (seed=${seed}, D${difficulty})`);
}
