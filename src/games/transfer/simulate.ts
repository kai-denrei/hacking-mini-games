import { type RNG } from '../../engine/rng.ts';
import {
  type Layer,
  type Owner,
  type OutcomeKind,
  type AiPolicy,
  type Terminal,
  terminalValue,
  CELLS,
} from './model.ts';

// Deterministic pulse simulator + scheduling helpers (AI + player strategies).

export interface Fire {
  t: number;
  terminal: number;
}
export interface SimResult {
  p: number;
  e: number;
  neutral: number;
  owners: Owner[];
}

interface Ev {
  time: number;
  seq: number; // insertion order → stable tie-break (P scheduled before E)
  cell: number;
  kind: OutcomeKind;
  owner: 'P' | 'E';
}

/** Simulate a match to completion. Later-claim-wins; in-flight pulses still land. */
export function simulate(
  pLayer: Layer,
  eLayer: Layer,
  pSchedule: Fire[],
  eSchedule: Fire[],
  pBudget: number,
  eBudget: number,
  tMatch: number,
): SimResult {
  const owners: Owner[] = new Array(CELLS).fill('NEUTRAL');
  const events: Ev[] = [];
  let seq = 0;

  const emit = (layer: Layer, schedule: Fire[], budget: number, who: 'P' | 'E'): void => {
    const sched = schedule
      .filter((f) => f.t >= 0 && f.t <= tMatch)
      .sort((a, b) => a.t - b.t)
      .slice(0, budget);
    for (const f of sched) {
      const term = layer.terminals[f.terminal];
      if (!term) continue;
      for (const o of term.outcomes) {
        if (o.kind === 'DEAD') continue;
        const rt = f.t + o.delay;
        if (o.kind === 'REPEAT') {
          const period = o.repeatPeriod ?? 2;
          for (let tt = rt; tt <= tMatch; tt += period)
            events.push({ time: tt, seq: seq++, cell: o.cell, kind: 'CLAIM', owner: who });
        } else {
          events.push({ time: rt, seq: seq++, cell: o.cell, kind: o.kind, owner: who });
        }
      }
    }
  };
  emit(pLayer, pSchedule, pBudget, 'P');
  emit(eLayer, eSchedule, eBudget, 'E');

  events.sort((a, b) => a.time - b.time || a.seq - b.seq);
  for (const ev of events) {
    if (ev.kind === 'CLAIM') owners[ev.cell] = ev.owner;
    else if (ev.kind === 'INVERT') {
      const cur = owners[ev.cell]!;
      owners[ev.cell] = cur === 'NEUTRAL' ? ev.owner : cur === 'P' ? 'E' : 'P';
    }
  }

  let p = 0;
  let e = 0;
  let n = 0;
  for (const o of owners) o === 'P' ? p++ : o === 'E' ? e++ : n++;
  return { p, e, neutral: n, owners };
}

// ── scheduling helpers ──────────────────────────────────────────────────────

const liveCells = (t: Terminal): number[] => t.outcomes.filter((o) => o.kind !== 'DEAD').map((o) => o.cell);
const maxDelay = (t: Terminal): number => Math.max(0, ...t.outcomes.map((o) => o.delay));

/** Greedily choose `k` terminals maximizing distinct influenced cells. */
export function pickCoverage(layer: Layer, k: number): number[] {
  const chosen: number[] = [];
  const covered = new Set<number>();
  while (chosen.length < k) {
    let best = -1;
    let bestGain = -1;
    layer.terminals.forEach((t, i) => {
      if (chosen.includes(i)) return;
      const gain = liveCells(t).filter((c) => !covered.has(c)).length + terminalValue(t) * 0.01;
      if (gain > bestGain) {
        bestGain = gain;
        best = i;
      }
    });
    if (best < 0) break;
    chosen.push(best);
    for (const c of liveCells(layer.terminals[best]!)) covered.add(c);
  }
  return chosen;
}

/** Strong player: max coverage, fired as late as possible (win contested cells by claiming last). */
export function playerFireLate(layer: Layer, budget: number, tMatch: number): Fire[] {
  return pickCoverage(layer, budget).map((id) => ({
    t: Math.max(0, tMatch - maxDelay(layer.terminals[id]!) - 0.05),
    terminal: id,
  }));
}

/** Naive player: max coverage fired immediately (the "claim early, never contest" trap). */
export function playerFireEarly(layer: Layer, budget: number, _tMatch: number): Fire[] {
  return pickCoverage(layer, budget).map((id, k) => ({ t: k * 0.03, terminal: id }));
}

/** Enemy AI schedule by policy. */
export function aiSchedule(
  policy: AiPolicy,
  layer: Layer,
  budget: number,
  tMatch: number,
  rng: RNG,
): Fire[] {
  const valued = layer.terminals
    .map((t, i) => ({ i, v: terminalValue(t), repeat: t.outcomes.some((o) => o.kind === 'REPEAT') }))
    .filter((x) => x.v > 0);
  valued.sort((a, b) => b.v - a.v);
  if (valued.length === 0) return [];

  if (policy === 'naive') {
    const pool = valued.slice().sort(() => rng() - 0.5).slice(0, budget);
    return pool.map((x, k) => ({ t: ((k + 0.5) / Math.max(1, pool.length)) * tMatch * 0.9, terminal: x.i }));
  }
  if (policy === 'greedy') {
    // exhausts budget with ~30% of the timer left (exploitable by late overwrite)
    const top = valued.slice(0, budget);
    return top.map((x, k) => ({ t: (k / Math.max(1, top.length)) * tMatch * 0.7, terminal: x.i }));
  }
  // greedy+ / optimal-ish: hold 2 for the last 15%; optimal-ish arms REPEATs first
  const order = policy === 'optimal-ish' ? valued.slice().sort((a, b) => Number(b.repeat) - Number(a.repeat) || b.v - a.v) : valued;
  const hold = Math.min(2, budget);
  const early = order.slice(0, Math.max(0, budget - hold));
  const fires: Fire[] = early.map((x, k) => ({ t: (k / Math.max(1, early.length)) * tMatch * 0.6, terminal: x.i }));
  for (let j = 0; j < hold; j++) fires.push({ t: tMatch * (0.85 + 0.03 * j), terminal: order[j % order.length]!.i });
  return fires;
}
