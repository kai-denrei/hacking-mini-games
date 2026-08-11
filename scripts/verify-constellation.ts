// Prove the CONSTELLATION generator (spec §8 acceptance tests):
//   • deterministic: same seed → identical board
//   • exact point budget M; signal per lock = glyph on-count
//   • coherence at the true axis A ≈ 1 (the glyph IS legible there)
//   • no viewpoint far from A reaches the 0.7 coherence bar (uniqueness)
// Run: node scripts/verify-constellation.ts
import type { Difficulty } from '../src/engine/session.ts';
import { generateBoard, coherence, TIERS, GEN, type Board } from '../src/games/constellation/generate.ts';
import { CONSTELLATION_GLYPHS } from '../src/glyphs/bank.ts';

const glyphByName = (name: string) => {
  const g = CONSTELLATION_GLYPHS.find((x) => x.name === name);
  if (!g) throw new Error(`glyph ${name} not found`);
  return g;
};

const SEEDS = ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot'];
let failed = 0;

function fingerprint(b: Board): string {
  return JSON.stringify({
    locks: b.locks.map((l) => [l.glyph, l.axis, l.signalCount]),
    points: b.points.map((p) => [p.pop, p.lock, p.pos.map((n) => +n.toFixed(6))]),
  });
}

for (const D of [1, 2, 3, 4, 5] as Difficulty[]) {
  const p = TIERS[D];
  let worstOff = 0;
  let minOnAxis = 1;
  let maxAttempts = 0;
  let maxRerolls = 0;

  for (const seed of SEEDS) {
    const b = generateBoard(D, seed);

    // determinism
    if (fingerprint(b) !== fingerprint(generateBoard(D, seed))) {
      console.log(`  ✗ D${D} ${seed}: non-deterministic`);
      failed++;
    }

    // point budget
    const sig = b.points.filter((x) => x.pop === 'SIGNAL').length;
    const trip = b.points.filter((x) => x.pop === 'TRIP').length;
    const noise = b.points.filter((x) => x.pop === 'NOISE').length;
    if (b.points.length !== p.M) {
      console.log(`  ✗ D${D} ${seed}: M=${b.points.length} expected ${p.M}`);
      failed++;
    }
    const expTrip = Math.min(p.H, 999) * p.L; // ring is always >= H at these sizes
    if (trip !== expTrip) {
      console.log(`  ✗ D${D} ${seed}: trip=${trip} expected ${expTrip}`);
      failed++;
    }
    // signal per lock = glyph on-count
    for (const lock of b.locks) {
      const got = b.points.filter((x) => x.pop === 'SIGNAL' && x.lock === lock.index).length;
      if (got !== lock.signalCount) {
        console.log(`  ✗ D${D} ${seed} lock${lock.index}: signal=${got} != ${lock.signalCount}`);
        failed++;
      }
    }

    // coherence at the true axis should be ~1 for every lock
    for (const lock of b.locks) {
      const sig = b.points.filter((x) => x.pop === 'SIGNAL' && x.lock === lock.index);
      const c = coherence(sig, glyphByName(lock.glyph), lock.axis);
      minOnAxis = Math.min(minOnAxis, c);
      if (c < 0.99) {
        console.log(`  ✗ D${D} ${seed} lock${lock.index} (${lock.glyph}): on-axis coherence ${c.toFixed(3)} < 0.99`);
        failed++;
      }
    }

    worstOff = Math.max(worstOff, b.genStats.maxOffAxisCoherence);
    maxAttempts = Math.max(maxAttempts, b.genStats.boardAttempts);
    maxRerolls = Math.max(maxRerolls, b.genStats.noiseRerolls);
    void noise;
    void sig;
  }

  const line =
    `D${D}: M=${p.M} L=${p.L} H=${p.H} | ` +
    `on-axis min=${minOnAxis.toFixed(3)} | off-axis max=${worstOff.toFixed(3)} (bar ${GEN.coherenceThreshold}) | ` +
    `boardAttempts<=${maxAttempts} noiseRerolls<=${maxRerolls}`;
  console.log(worstOff >= GEN.coherenceThreshold || minOnAxis < 0.99 ? `✗ ${line}` : `✓ ${line}`);
}

// ── stress: many seeds per tier (spec §8: 1000 boards, zero spurious) ────────
console.log('\nstress (200 seeds/tier):');
for (const D of [1, 2, 3, 4, 5] as Difficulty[]) {
  let maxOff = 0;
  let maxAttempts = 0;
  let threw = 0;
  for (let i = 0; i < 200; i++) {
    try {
      const b = generateBoard(D, `stress-${i}`);
      maxOff = Math.max(maxOff, b.genStats.maxOffAxisCoherence);
      maxAttempts = Math.max(maxAttempts, b.genStats.boardAttempts);
    } catch {
      threw++;
    }
  }
  const bad = threw > 0 || maxOff >= GEN.coherenceThreshold;
  if (bad) failed++;
  console.log(
    `  ${bad ? '✗' : '✓'} D${D}: off-axis max=${maxOff.toFixed(3)} | boardAttempts<=${maxAttempts} | threw=${threw}/200`,
  );
}

console.log(failed ? `\nRESULT: FAIL (${failed})` : '\nRESULT: PASS');
process.exit(failed ? 1 : 0);
