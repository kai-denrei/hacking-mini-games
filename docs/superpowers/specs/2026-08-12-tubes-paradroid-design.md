# CIRCUIT DUEL v2 (game #8) — full Paradroid wire vocabulary

*Design spec. Iterates the TUBES circuit-duel toward the real 1985 Paradroid
transfer game: a fuller wire vocabulary, an unpowered→powered read, and the
manual's exact win thresholds. Lands as a new renderer, game **#8** (slot to be
reassigned later; old transfer/circuit/shapes/tubes renderers stay as legacy
until erased).*

## Goal

Add "room for bad choices on top of timing." Today a wire is one of a few kinds
and the read is shallow. This makes reading each tube to its end the core skill:
is it a clean claim, an efficient split, a locked prize — or a joiner /
dead-end / short-circuit / color-trap you must avoid.

## Decisions locked in

- **Slot**: new renderer wired as game **#8** (`/8`, key `8`). Not on the picker.
- **Model**: *extend* the shared `transfer` model/generator/AI (verified) with
  new element kinds + locked cells. Legacy renderers keep functioning.
- **Look**: keep the dotted point-cloud identity (living tubes); each element is
  a crisp dot-drawn glyph in Paradroid's symbol language (squares, forks,
  sparks) — not a flat C64 repaint.

## Wire vocabulary

A terminal fires a pulse down a tube that ends in an **element**. Semantics are
relative to the pulse's owner (`self` = firer, `opp` = the other side).

| Kind | On resolve | Render glyph | Value to firer |
|---|---|---|---|
| `CLAIM` (autopulser) | cell → `self` | clean tube to cell | +1 |
| `SPLIT` (1→2) | terminal has 2 outcomes → two cells | fork node at branch | +2 (efficient) |
| `LOCK` (constant pulse) | cell → `self` **and locked** (no one can change it after) | ◈ solid node before cell | +2 (prize) |
| `DEAD` (pure dead-end) | nothing; pulser wasted | tube ends in a short stub, no cell | 0 (obvious) |
| `SHORT` (short-circuit) | nothing; pulser wasted | tube drawn to the cell but a ⚡ spark kills it partway | 0 (deceptive) |
| `FLIP` (filled ■ transformer) | cell → `opp` | filled square | −1 (trap: feeds the enemy) |
| `CONVERT` (half ▤ transformer) | `opp`→neutral, neutral→`self`, `self`→`self` | half-filled square | +0.5 (advance-only tool) |

**JOINER (2→1)** is not a kind — it's a generation shape: two of a layer's
terminals route `CLAIM`/`SPLIT` outcomes to the **same** cell. Firing one claims
it; the second is a guaranteed wasted pulser (already yours). Both tubes get a
⋈ merge marker near the shared cell so a careful reader can spot the redundancy.

### Locked cells
A `Set<cell>`. `resolve()` for `CLAIM`/`FLIP`/`CONVERT`/`SPLIT` ignores a locked
cell (can't revert). `LOCK` sets `owner = self` and adds the cell to the set.
Locked cells are final for the rest of the match.

### Resolution order
Unchanged tempo: pulses resolve on arrival (`delay`); a later arrival overwrites
an earlier one (the "later light wins" tension) — **except** locked cells, which
are frozen. `SHORT`/`DEAD` never touch a cell. Deterministic from the seeded RNG.

## OFF → ON activation

- **PLAN (unpowered):** the whole board is dark monochrome — tubes and element
  glyphs are legible (you *read* the diagram) but nothing flows and no owner
  colors show. Both sides look identical/neutral.
- **Select a side → RUN (powered):** both circuits power on — your side in your
  color, the host's in its color, working-current flow resumes, pulses fire.

This is the Paradroid "read the static circuit, then activate" beat.

## Win rules (1985 manual, exact)

Count your cells of the 12 when time expires:
- **≥ 7 → Complete (WON).**
- **= 6 → Deadlock** — the battle replays (same board, fresh clock; no penalty).
- **≤ 5 → Rejected (LOST).**

Replaces today's "lead wins." `deadlock` is a distinct outcome that re-arms the
same board into PLAN.

## Model changes (`src/games/transfer/model.ts` + `play.ts` + `generate.ts`)

- `OutcomeKind` becomes a **superset**: `'CLAIM' | 'DEAD' | 'INVERT' | 'REPEAT' | 'LOCK' | 'SHORT' | 'FLIP' | 'CONVERT'`.
  `LOCK`/`SHORT`/`FLIP`/`CONVERT` are new; `INVERT`/`REPEAT` are retained so the
  legacy renderers still compile (they map to the existing visuals). The new #8
  generator emits the *new* vocabulary behind a generation flag; legacy
  generation for the old games is unchanged. (`SPLIT` remains "a terminal with 2
  outcomes," not a kind.)
- `TransferGame`: add `locked: Set<number>`; `resolve()` handles the new kinds
  relative to `p.owner` (old kinds keep current behavior); `finish()` uses the
  7/6/≤5 thresholds and can emit `DEADLOCK`. Threshold + locked behavior are
  shared, so legacy games get the deadlock/threshold rule too (acceptable — it's
  the correct Paradroid rule; note it in their change).
- `Phase` gains `'DEADLOCK'` (renderer offers replay; the ⟳/R path already
  reseeds — deadlock replays the *same* seed).
- `terminalValue()` updated: CLAIM +1, SPLIT sums, LOCK +2, CONVERT +0.5,
  FLIP −1, DEAD/SHORT 0. Feeds the generator's better-side balance + the AI's
  target choice (the AI must prefer good wires and avoid FLIP/DEAD/SHORT).
- `generate.ts`: place the new elements as *deceptive* choices — FLIP/SHORT/
  JOINER on tempting-looking routes near good cells; keep ≥5 clean terminals per
  layer; keep the solvability guarantees (better side wins with good play; a
  naive "fire everything" run fails at higher tiers; boards are always winnable).
  Reuse the existing solution-first + simulator verification.

## Rendering (`src/games/circuit-duel-2/view.ts`, new)

- Reuse the tubes renderer's DotField + working-torus flow + camera/responsive
  layout + ladder/enemy-theme systems (all recent work).
- **Element glyphs** (dot-drawn): fork (split), ◈ solid node (lock), stub (dead),
  ⚡ spark mid-tube (short), filled square (flip), half square (convert), ⋈ near
  shared cell (joiner). A legend maps glyph → meaning.
- **OFF/ON:** PLAN draws tubes + glyphs in a single dim gray, no flow; RUN
  restores owner colors + flow. (The enemy-theme + green-you palettes apply only
  in RUN.)
- HUD: timer ring, prompt, tally with the Complete/Deadlock/Rejected counts, the
  legend, ladder readout. Overlay shows Complete / Deadlock (replay) / Rejected.

## Rules glossary (visual)

The Rules tab (`src/devlog/rules.ts` + `panel.ts`) is text-only today. Add a
**visual glossary** for the new game: one row per element (autopulser, splitter,
lock, joiner, dead-end, short-circuit, filled ■ transformer, half ▤ transformer)
showing its **actual dot glyph** rendered in a small canvas beside its name and
one-line meaning (good/bad tag).

- Extend `GameRules` with an optional `glossary: { key, name, meaning, tag }[]`.
- Share the glyph draw functions between the #8 renderer and the glossary (one
  small `drawElementGlyph(ctx, kind, size)` used by both — single source of
  truth, so the legend can't drift from the game). Reduced-motion → static frame.
- The glossary renders only for the new game's rules entry; other entries are
  unchanged text.

## Testing

- **Headless sim** (`node --experimental-strip-types`): unit-check `resolve()`
  for every kind incl. locked-cell immutability and FLIP/CONVERT relativity;
  verify generation is well-formed + solvable across tiers (better side wins,
  naive fails at D3+), deterministic replays; confirm 7/6/≤5 → WON/DEADLOCK/LOST.
- **Visual** (headless Chrome/SwiftShader): PLAN unpowered read, RUN powered,
  each glyph legible, deadlock overlay.

## Non-goals (this iteration)

- No move to the flat C64 look; keep our identity.
- No new consumables/verbs beyond the current fire+choose.
- Not touching the constellation/trace games.
- Erasing the legacy circuit renderers is a *later* step, on your say-so.

## Open confirmations for spec review

1. `DEAD` = *visible* stub waste vs `SHORT` = *deceptive* reaches-then-dies — is
   that the distinction you meant for (e) vs (f)?
2. Deadlock replays the **same** board (vs reseeding a new one) — OK?
3. `LOCK` cells are frozen for *both* sides once locked — OK?
