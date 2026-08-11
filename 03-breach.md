# BREACH — constrained-matrix sequence assembly

*Lineage: Cyberpunk 2077 Breach Protocol. See 00-shared-conventions.md.*

## Fantasy
A code matrix scrolls before you. You have a tiny buffer. Chain one path through the grid that smuggles every daemon in at once.

## 1. Board model

- Grid `N×N` of glyphs drawn from an alphabet of **6 symbols** (rendered as braille/dot glyphs, not hex text — see §7).
- **Buffer** of `B` slots.
- **Daemons:** 1–3 target sequences, lengths 2–4, displayed beside the grid with reward tiers (daemon 1 = small, daemon 3 = big).

## 2. Traversal rule

- Pick 1 starts anywhere in **row 0**.
- Thereafter axis alternates: pick 2 from the *column* of pick 1; pick 3 from the *row* of pick 2; and so on.
- No cell may be picked twice. Each pick appends its glyph to the buffer.
- A daemon completes when its sequence appears as a **contiguous substring** of the buffer. Overlaps chain: buffer `A B C` completes both `A B` and `B C`.

## 3. Pressure & phases

- **PLAN:** unlimited inspection, clock frozen. First pick starts RUN. (`CANCEL` in PLAN = walk away clean.)
- **RUN:** timer `T_run` counts down (depleting arc). Timer zero or buffer full → resolve: completed daemons pay out; zero daemons completed = soft failure.
- **Hazard variant (D3+): counter-daemon.** One glyph position in the grid is marked as a static X-hazard. Picking it injects a `WORM` glyph into the buffer (wasting a slot) and accelerates the timer ×1.25. It is always avoidable; it sits on tempting paths (generation §6).
- **Trace variant (D5 / boss flag):** an adversary cursor makes its own pick every `3.5` s on the same grid, consuming cells (they become unpickable). Pure tempo pressure; disabled by default.

## 4. Difficulty envelope

| Param | D1 | D2 | D3 | D4 | D5 |
|---|---|---|---|---|---|
| N (grid) | 5 | 5 | 6 | 6 | 7 |
| B (buffer) | 6 | 6 | 6 | 7 | 7 |
| Daemons (count × maxlen) | 1×3 | 2×3 | 2×4 | 3×4 | 3×4 |
| T_run (s) | 45 | 40 | 35 | 30 | 25 |
| Guaranteed all-daemon solve exists | yes | yes | yes | yes | yes* |

\* at D5 the all-daemon solve requires using ≥1 overlap (generation enforces).

SKILL effects: +1 buffer slot at SKILL 2, +another at SKILL 4; SKILL≥1 highlights all grid cells matching the *next needed glyph* of each daemon during PLAN; SKILL≥3 shows a ghost-trail preview of your current hovered path's buffer outcome. `OVERRIDE`: appends any one chosen glyph to the buffer without consuming a grid pick.

## 5. Scoring

- Payout per daemon tier; completing **all** daemons flags `full_breach` (meta bonus).
- `margin` = unused buffer slots + seconds remaining. Reported for Quazatron-rule reward scaling.

## 6. Generation (solution-first, seeded)

1. Compose target super-sequence: merge daemon sequences with maximal overlap (e.g. `AB`,`BC`,`CAB` → try orderings; keep total ≤ B).
2. Walk a legal row/column-alternating path of that length on an empty grid (rejection-sample until non-self-crossing path found), imprinting the super-sequence.
3. Fill remaining cells: uniform random, then **decoy pass** — seed 2–3 near-miss prefixes of daemons ending in dead cells (paths that start right and go nowhere; the trap that makes planning real).
4. Place X-hazard (D3+) adjacent to the strongest decoy path.
5. Solver verification: exhaustive search confirms (a) the full solve exists within B, (b) at D3+ the greedy "always take the nearest matching glyph" bot completes ≤1 daemon. Reject otherwise.

## 7. Rendering notes (dots)

- Glyph alphabet: six 2×4 braille patterns chosen for maximal pairwise Hamming distance (≥3 dots differ between any two) — instantly distinguishable at halftone scale, no text.
- Grid = lattice of glyph clusters; the active row/column is the *only* illuminated lane (everything else dims to 20% density) — the axis-alternation rule is communicated purely by light.
- Picked cells collapse: their dots visibly *stream into the buffer strip* (dot migration animation — signature halftone moment).
- Buffer: horizontal strip of B empty braille cells filling left→right; a completing daemon's cells flash and lock solid.
- Daemon list: shown as dot-glyph sequences with per-glyph dim/lit state (progress visible at a glance).
- Braille terminal mode: this game is natively 1:1 — grid, buffer, daemons all already braille cells. Flagship for that renderer.
- Audio: pick = tick; daemon complete = rising 3-note; hazard = flat buzz; timer final 20% = accelerating pulse.

## 8. Acceptance tests

- Same seed → same grid, hazard, daemons; same input log → same result.
- Axis alternation enforced from row 0; illegal picks are rejected silently (no state change, small shake).
- Overlap completion: buffer `X A B C` with daemons `AB`,`BC` completes both simultaneously.
- WORM glyph occupies a slot and can *split* a would-be substring (verify daemon does not complete across a WORM).
- Generator: 1,000 seeds at each tier → 100% solvable, D3+ greedy-bot full-breach rate 0%.
