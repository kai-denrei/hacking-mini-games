# TRANSFER — circuit takeover duel

*Lineage: Paradroid (1985), Quazatron (1986). See 00-shared-conventions.md.*

## Fantasy
Your influence device fights a host machine's processor for control of its 12 control registers. Majority wins; you become what you defeat.

## 1. Board model

- Central vertical strip of **12 cells** `C0..C11`. Each cell has an owner: `NEUTRAL | P | E`.
- Two wiring layers, LEFT and RIGHT of the strip, one per combatant *after side selection* (player picks first — see §4).
- Each layer: **8 input terminals** `T0..T7` on the outer edge, connected to cells through a lane grid (8 rows × 4 columns of element slots). A terminal's wire threads through elements to reach 0, 1, or 2+ cells.

### Element vocabulary (per slot)
| Element | Glyph idea | Behavior |
|---|---|---|
| WIRE | dot string | passes pulse through |
| SPLIT | 1→2 fork | duplicates pulse into two lanes |
| JOIN | 2→1 merge | either input continues; simultaneous = single pulse |
| DEAD | X-hazard | absorbs pulse (wasted) |
| INVERT | ring of dots | pulse *flips* target cell's current owner instead of claiming (NEUTRAL→attacker; P→E; E→P) |
| REPEAT | pulsing node | first pulse arms it; it then re-claims its cell every `repeat_period` until match end (a persistent gun) |

### Timing rules (the heart of the game)
- Pulses travel at constant speed; distance terminal→cell = 0.6–1.4 s depending on route length.
- **Later-claim-wins:** a cell's owner is whoever claimed it most recently. No cell is ever locked.
- REPEAT elements make "late overwrite" contestable — the counter to the counter.

## 2. Resources & pressure

- Player pulse budget `P_pulses`, enemy budget `E_pulses` (asymmetric; see difficulty).
- Match timer `T_match` counts down as a depleting dotted arc. At zero: count owners.
- Win: ≥7 cells. 6–6: instant rematch on a fresh board, budgets NOT refreshed (pressure compounds). Loss: see §6.

## 3. Difficulty envelope

| Param | D1 | D2 | D3 | D4 | D5 |
|---|---|---|---|---|---|
| T_match (s) | 20 | 16 | 14 | 12 | 10 |
| P_pulses | 10 | 9 | 8 | 7 | 6 |
| E_pulses | 6 | 7 | 8 | 10 | 12 |
| DEAD+INVERT count per layer | 2 | 3 | 4 | 5 | 6 |
| REPEAT count per layer | 0 | 0–1 | 1 | 1–2 | 2 |
| AI policy (see §5) | naive | naive | greedy | greedy+ | optimal-ish |

SKILL effects: +2 s PLAN preview per point; SKILL≥2 shows per-terminal reach preview (which cells a terminal can touch) on hover; SKILL≥3 shows enemy remaining budget; SKILL 4 grants +1 pulse.

## 4. Flow

1. **PLAN (side select):** both candidate layers shown; player has `5 + 2×SKILL` s to choose LEFT or RIGHT. The unchosen layer goes to the enemy. (Generation guarantees the two layers differ meaningfully — §7.)
2. **RUN:** player moves a cursor over terminals (`MOVE`), fires with `SELECT` (spends 1 pulse). Enemy AI fires per its policy. Pulses animate; cells flip on arrival; REPEATs keep firing.
3. End: timer zero → count. Early end optional rule: if one side reaches 7 cells *and* the other side has 0 pulses left and no armed REPEATs, resolve immediately.

## 5. Enemy AI policies

All AIs precompute each terminal's *value* = expected cells claimed (SPLIT counts fractional through JOIN collisions) minus DEAD waste, with INVERT valued by current board state.
- **naive:** fires evenly spaced pulses on random terminals with value>0.
- **greedy:** always highest current value; fires early, exhausts budget with 30% of timer left (exploitable by late overwrites — teaches the core lesson).
- **greedy+:** holds 2 pulses in reserve; spends them in the last 15% of the timer on contested cells.
- **optimal-ish:** greedy+ but re-evaluates INVERT terminals against live board (will flip player's freshly claimed cells) and prioritizes arming REPEATs early.

## 6. Failure & meta hooks

- Soft loss (host layer decays / attempt lost): host meta decides; report `outcome=LOST_SOFT`.
- The classic risk ladder is exposed via config: `stakes: {none|host_downgrade|permadeath}` — TRANSFER itself only reports.
- `margin` = cell difference (7–5 → 2; 12–0 → 12). Quazatron rule: meta may scale rewards by margin.

## 7. Generation (solution-first, seeded)

1. For each layer: assign each of 8 terminals a route budget; lay routes to cells such that the layer's *reach set* covers ≥9 distinct cells and total expected-claims ≥ 8.
2. Decorate: insert DEAD/INVERT/REPEAT per difficulty counts, placed so at least 5 terminals remain "clean" (≥1 cell, no trap).
3. Asymmetry check: compute layer quality Q = Σ terminal values. Require `0.75 ≤ Q_left/Q_right ≤ 0.95` (one side genuinely better, never a giveaway). Reject and re-roll otherwise.
4. Solver check: simulate perfect player (better side, optimal schedule incl. late overwrites) vs. tier AI → must win; simulate greedy player (fire best terminals immediately) vs. tier AI → must *lose* at D3+.

## 8. Rendering notes (dots)

- The 12-cell strip is the visual anchor: a column of 12 dense dot blocks, owner shown by blink-phase/hue, claim events flash 3 frames.
- Wires: sparse dot strings; on fire, a bright pulse packet with tail traverses; SPLIT shows the packet visibly dividing (great halftone moment).
- INVERT: pulse packet passes through a dot ring and *inverts its own blink phase* — foreshadows what it does.
- Enemy layer is fully visible (both sides always shown; information is symmetric — the read is the skill).
- Braille mode: strip = 12 braille cells in a column; each layer compresses to 8 rows × 4 glyph columns; pulses = traveling single raised dot. Audio ticks per pulse-arrival; enemy fire = lower pitch.

## 9. Acceptance tests

- Deterministic replay: same seed + same input log = identical outcome.
- A pulse fired at T-0.5 s on a 0.6 s route still lands (pulses in flight resolve after timer zero; timer stops *inputs*, not physics).
- 6–6 rematch preserves depleted budgets.
- INVERT chain: INVERT on a cell owned by attacker flips it to defender (verify tri-state table).
- At D5/SKILL 0, scripted optimal input log wins ≥7 cells (regression fixture from generator's solver).
