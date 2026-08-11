// TRANSFER logic-core checks (spec §9), Node native TS.
// Run: node scripts/verify-transfer.ts
import type { Difficulty } from '../src/engine/session.ts';
import { generateBoard } from '../src/games/transfer/generate.ts';
import { layerQuality, reachSet, layerOf, TIERS, WIN } from '../src/games/transfer/model.ts';
import { simulate, aiSchedule, playerFireLate, playerFireEarly } from '../src/games/transfer/simulate.ts';
import { makeRng } from '../src/engine/rng.ts';

let fail = 0;
const ok = (c: boolean, m: string) => {
  if (!c) {
    console.log(`  ✗ ${m}`);
    fail++;
  }
};

const fp = (b: ReturnType<typeof generateBoard>): string =>
  JSON.stringify([b.better, b.left.terminals.map((t) => t.outcomes), b.right.terminals.map((t) => t.outcomes)]);

for (const D of [1, 2, 3, 4, 5] as Difficulty[]) {
  const p = TIERS[D];
  let minRatio = 1;
  let maxRatio = 0;
  let worstPerfect = 99;
  let naiveWins = 0;
  const N = 40;
  for (let i = 0; i < N; i++) {
    const seed = `t-${i}`;
    const b = generateBoard(D, seed);

    ok(fp(b) === fp(generateBoard(D, seed)), `D${D} ${seed}: deterministic`);

    const strong = layerOf(b, b.better);
    const weak = layerOf(b, b.better === 'left' ? 'right' : 'left');
    ok(reachSet(strong).size >= 9 && reachSet(weak).size >= 9, `D${D} ${seed}: reach ≥ 9`);
    ok(layerQuality(strong) >= 8 && layerQuality(weak) >= 8, `D${D} ${seed}: value ≥ 8`);

    const ratio = layerQuality(weak) / layerQuality(strong);
    ok(ratio >= 0.75 && ratio <= 0.95, `D${D} ${seed}: asymmetry ${ratio.toFixed(2)} in [0.75,0.95]`);
    minRatio = Math.min(minRatio, ratio);
    maxRatio = Math.max(maxRatio, ratio);

    const aiRng = makeRng(`${seed}:ai:${D}:${b.genStats.boardAttempts}`);
    const eSched = aiSchedule(p.ai, weak, p.ePulses, p.tMatch, aiRng);
    const perfect = simulate(strong, weak, playerFireLate(strong, p.pPulses, p.tMatch), eSched, p.pPulses, p.ePulses, p.tMatch);
    ok(perfect.p >= WIN, `D${D} ${seed}: perfect wins (${perfect.p}-${perfect.e})`);
    worstPerfect = Math.min(worstPerfect, perfect.p);

    if (D >= 3) {
      const naive = simulate(strong, weak, playerFireEarly(strong, p.pPulses, p.tMatch), eSched, p.pPulses, p.ePulses, p.tMatch);
      if (naive.p >= WIN) naiveWins++;
    }
  }
  const gap = D >= 3 ? ` | naive-wins ${naiveWins}/${N} (want 0)` : '';
  console.log(
    `${fail ? '✗' : '✓'} D${D}: ratio ${minRatio.toFixed(2)}–${maxRatio.toFixed(2)} | worst-perfect ${worstPerfect} cells${gap}`,
  );
  if (D >= 3 && naiveWins > 0) fail++;
}

console.log(fail ? `\nRESULT: FAIL (${fail})` : '\nRESULT: PASS');
process.exit(fail ? 1 : 0);
