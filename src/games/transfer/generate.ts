import { makeRng, randRange, type RNG } from '../../engine/rng.ts';
import {
  type Board,
  type Layer,
  type Terminal,
  type Outcome,
  type OutcomeKind,
  type TierParams,
  type MatchSpec,
  classParams,
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

interface MakeLayerResult {
  layer: Layer;
  joinerPair?: [number, number];
}

function makeLayer(rng: RNG, params: TierParams, elements: 'legacy' | 'full' = 'legacy'): MakeLayerResult {
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

  let joinerPair: [number, number] | undefined;

  if (elements === 'full') {
    // --- Full-vocabulary decoration ---
    // Invariant: must keep ≥5 clean (CLAIM/LOCK/REPEAT only) terminals.
    // We start with terminals 0..4 as clean (5 clean minimum), decorate 5,6,7.

    // 1. LOCK: promote the first CLAIM outcome of terminal 0 (the strongest) to LOCK
    //    This is high-value (+2 vs +1) and stays "clean" (LOCK is clean-ish — it's the prize).
    const lockTarget = terminals[0]!.outcomes.find((o) => o.kind === 'CLAIM');
    if (lockTarget) lockTarget.kind = 'LOCK';

    // 2. FLIP: replace one DEAD/INVERT trap outcome on terminal 7 with FLIP (deceptive — feeds enemy)
    //    Only do this if terminal 7 already has a trap outcome to convert (no new clean→trap demotions)
    const t7 = terminals[7]!;
    const trapOutcome7 = t7.outcomes.find((o) => o.kind === 'DEAD' || o.kind === 'INVERT');
    if (trapOutcome7) trapOutcome7.kind = 'FLIP';

    // 3. SHORT: replace one DEAD trap outcome on terminal 6 with SHORT (deceptive dead)
    const t6 = terminals[6]!;
    const deadOutcome6 = t6.outcomes.find((o) => o.kind === 'DEAD');
    if (deadOutcome6) deadOutcome6.kind = 'SHORT';

    // 4. CONVERT: add to terminal 5 (already a dirty trap terminal, so the ≥5-clean invariant holds).
    const t5 = terminals[5]!;
    const convertCell = order[(5 + 7) % 12]!; // a mid cell
    if (!t5.outcomes.some((o) => o.cell === convertCell)) {
      t5.outcomes.push({ cell: convertCell, delay: delay(rng), kind: 'CONVERT' });
    } else {
      // fallback: use a different cell offset
      const altCell = order[(5 + 10) % 12]!;
      if (!t5.outcomes.some((o) => o.cell === altCell)) {
        t5.outcomes.push({ cell: altCell, delay: delay(rng), kind: 'CONVERT' });
      }
    }

    // 5. JOINER: route terminal 1's second CLAIM outcome to the same cell as terminal 2's CLAIM
    //    Record this pair so the renderer can show the ⋈ marker.
    //    Terminal 1 currently has outcomes: [CLAIM→order[1], CLAIM→order[9]]
    //    Terminal 2 has: [CLAIM→order[2], possibly CLAIM→order[7] from split]
    //    Point terminal 1's second CLAIM at terminal 2's primary cell.
    const term1SecondClaim = terminals[1]!.outcomes.find((o, idx) => idx > 0 && o.kind === 'CLAIM');
    const term2PrimaryClaim = terminals[2]!.outcomes.find((o) => o.kind === 'CLAIM');
    if (term1SecondClaim && term2PrimaryClaim) {
      term1SecondClaim.cell = term2PrimaryClaim.cell;
      joinerPair = [1, 2];
    }

    // 6. INVERT sweep: full-vocab boards must not expose bare INVERT (HDT renders
    //    INVERT with the CONVERT glyph, which misreads — INVERT ≠ CONVERT semantics).
    //    After all decoration, retype any remaining INVERT outcome to CONVERT.
    //    Value is unchanged (CONVERT is 0.5, same as the generator treats INVERT
    //    non-terminally), and solvability is unaffected because the generator verifies
    //    with the real simulator after makeLayer returns.
    for (const t of terminals) {
      for (const o of t.outcomes) {
        if (o.kind === 'INVERT') o.kind = 'CONVERT';
      }
    }
  }

  return { layer: { terminals }, joinerPair };
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

export interface GenerateOpts {
  elements?: 'legacy' | 'full';
}

function tryGenerate(spec: MatchSpec, seed: string, opts: GenerateOpts = {}): Board | null {
  const params = classParams(spec);
  const elements = opts.elements ?? 'legacy';
  const rng = makeRng(`${seed}:transfer:${spec.attacker}:${spec.defender}`);
  // Above naive AI the board must also defeat a "fire everything early" run, so
  // reading the routes (not just spamming) is the skill.
  const requireReadSkill = spec.defender >= 3;

  for (let attempt = 1; attempt <= GEN.maxBoardAttempts; attempt++) {
    const resA = makeLayer(rng, params, elements);
    const resB = makeLayer(rng, params, elements);
    const a = resA.layer;
    const b = resB.layer;
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
    const aiRng = makeRng(`${seed}:ai:${spec.defender}:${attempt}`);
    const eSched = aiSchedule(params.ai, weak, params.ePulses, params.tMatch, aiRng);
    const perfect = simulate(strong, weak, playerFireLate(strong, params.pPulses, params.tMatch), eSched, params.pPulses, params.ePulses, params.tMatch);
    if (perfect.p < WIN) continue;
    if (requireReadSkill) {
      const naive = simulate(strong, weak, playerFireEarly(strong, params.pPulses, params.tMatch), eSched, params.pPulses, params.ePulses, params.tMatch);
      if (naive.p >= WIN) continue; // naive early-fire must NOT win when the AI is smart
    }

    const left = a;
    const right = b;

    // Collect joiner pairs from layers (only for full-vocabulary boards)
    const joiners: [number, number][] = [];
    if (resA.joinerPair) joiners.push(resA.joinerPair);
    if (resB.joinerPair) joiners.push(resB.joinerPair);

    return {
      seed,
      spec,
      params,
      left,
      right,
      better: strong === left ? 'left' : 'right',
      genStats: { boardAttempts: attempt, qLeft: layerQuality(left), qRight: layerQuality(right) },
      ...(joiners.length > 0 ? { joiners } : {}),
    };
  }
  return null;
}

// Generate a board for the matchup, easing the defender's class down if the
// requested one has no solvable board (generosity is an invariant — never crash
// the player into an impossible rung; see study §"Concrete amendments").
export function generateBoard(spec: MatchSpec, seed: string, opts: GenerateOpts = {}): Board {
  for (let d = spec.defender; d >= 1; d--) {
    const board = tryGenerate({ attacker: spec.attacker, defender: d }, seed, opts);
    if (board) return board;
  }
  throw new Error(`transfer generateBoard: no valid board even at defender 1 (seed=${seed}, attacker=${spec.attacker})`);
}
