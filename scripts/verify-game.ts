// Rules check for CONSTELLATION Phase 2 (game.ts) — THREE-free, Node native TS.
// Run: node scripts/verify-game.ts
import { generateBoard } from '../src/games/constellation/generate.ts';
import { ConstellationGame } from '../src/games/constellation/game.ts';

let fail = 0;
const ok = (c: boolean, m: string) => {
  console.log(`${c ? '✓' : '✗'} ${m}`);
  if (!c) fail++;
};

const board = generateBoard(3, 'testgame'); // D3: 2 locks, H=4 trips/lock, tSweep 10
const idxByPop = (pop: string, lock?: number) =>
  board.points.map((p, i) => ({ p, i })).filter((x) => x.p.pop === pop && (lock === undefined || x.p.lock === lock)).map((x) => x.i);

// win: extract every signal of every lock
{
  const g = new ConstellationGame(board);
  for (let l = 0; l < board.locks.length; l++) for (const i of idxByPop('SIGNAL', l)) g.select(i, l);
  ok(g.phase === 'WON', `win when all locks extracted (phase=${g.phase})`);
  ok(g.result().keys.length === board.locks.length, 'result reports all keys');
}

// critical: 3 trips
{
  const g = new ConstellationGame(board);
  const trips = idxByPop('TRIP');
  for (let k = 0; k < 3; k++) g.select(trips[k]!, board.points[trips[k]!]!.lock);
  ok(g.phase === 'LOST_CRIT', `3 trips → critical (trips=${g.trips})`);
}

// soft: run the clock out
{
  const g = new ConstellationGame(board);
  g.select(idxByPop('SIGNAL', 0)[0]!, 0); // first input starts RUN
  ok(g.phase === 'RUN', 'first select starts RUN');
  g.tick(9999, false, 0);
  ok(g.phase === 'LOST_SOFT', 'timer expiry → soft loss');
}

// dud: noise click costs time but no strike
{
  const g = new ConstellationGame(board);
  const before = g.timeLeft;
  const outcome = g.select(idxByPop('NOISE')[0]!, 0);
  ok(outcome === 'dud' && g.trips === 0 && g.timeLeft < before, 'noise click is a dud (time cost, no strike)');
}

// sweep wipe: mid-extraction + misaligned + a pass → one point wiped
{
  const g = new ConstellationGame(board);
  const sig = idxByPop('SIGNAL', 0);
  g.select(sig[0]!, 0);
  g.select(sig[1]!, 0);
  const had = g.extractedCount(0);
  g.tick(board.params.tSweep!, false, 0); // one full sweep while misaligned
  ok(g.extractedCount(0) === had - 1, `sweep wipes one when misaligned mid-extraction (${had}→${g.extractedCount(0)})`);
}

console.log(fail ? `\nRESULT: FAIL (${fail})` : '\nRESULT: PASS');
process.exit(fail ? 1 : 0);
