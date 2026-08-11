// One-off checker: prove the glyph bank meets the specs' distinctness rules.
//   • CONSTELLATION 5×7: "high mutual Hamming distance" — we require >= 8 of 35.
//   • BREACH 2×4:        "pairwise Hamming >= 3" (§7).
// Run: node scripts/verify-glyphs.ts
import {
  CONSTELLATION_GLYPHS,
  BREACH_ALPHABET,
  bankStats,
  hamming,
  onCount,
} from '../src/glyphs/bank.ts';

const MIN_5x7 = 8;
const MIN_2x4 = 3;

let failed = false;

function report(label: string, glyphs: readonly (typeof CONSTELLATION_GLYPHS)[number][], min: number) {
  const s = bankStats(glyphs);
  console.log(`\n${label}: ${s.count} glyphs, min pairwise Hamming = ${s.minHamming} (${s.minPair.join(' vs ')})`);
  console.log('  on-counts:', Object.entries(s.onCounts).map(([n, c]) => `${n}=${c}`).join(', '));
  // list every pair below threshold
  const offenders: string[] = [];
  for (let i = 0; i < glyphs.length; i++) {
    for (let j = i + 1; j < glyphs.length; j++) {
      const d = hamming(glyphs[i]!, glyphs[j]!);
      if (d < min) offenders.push(`${glyphs[i]!.name}~${glyphs[j]!.name}=${d}`);
    }
  }
  if (offenders.length) {
    failed = true;
    console.log(`  ✗ ${offenders.length} pair(s) below ${min}: ${offenders.join(', ')}`);
  } else {
    console.log(`  ✓ all pairs >= ${min}`);
  }
}

report('CONSTELLATION 5×7', CONSTELLATION_GLYPHS, MIN_5x7);
report('BREACH 2×4', BREACH_ALPHABET, MIN_2x4);

// on-count coverage for CONSTELLATION K (12,14,16,18,20 across D1..D5)
const counts = CONSTELLATION_GLYPHS.map(onCount).sort((a, b) => a - b);
console.log(`\nCONSTELLATION on-count range: ${counts[0]}..${counts[counts.length - 1]} → [${counts.join(', ')}]`);

console.log(failed ? '\nRESULT: FAIL' : '\nRESULT: PASS');
process.exit(failed ? 1 : 0);
