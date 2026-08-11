# CONSTELLATION — parallax point-cloud alignment

*Lineage: Half-Life: Alyx multitool sphere puzzle, ported from VR head-motion to orbit controls. See 00-shared-conventions.md.*

## Fantasy
An encrypted datastructure hangs in space as a cloud of noise. From exactly one viewpoint, the noise collapses into a key. Find the angle; read the key; extract it without touching the tripwires.

## 1. Cloud model

- Point cloud of `M` points in a unit sphere: three populations, visually identical at rest.
  - **SIGNAL** (`K` points): back-projected from a 2D **key glyph** (a 3×5 or 5×7 dot-matrix shape) along a hidden **alignment axis** `A` (unit vector), each at random depth. Viewed along `A`, they form the glyph; from anywhere else, scattered.
  - **NOISE** (`M − K − H` points): uniform random.
  - **TRIP** (`H` points, D2+): hazards. Also back-projected along `A` into positions that, at alignment, sit *just outside* the glyph outline (1 dot-unit margin) — visually adjacent to signal but never part of the shape.
- Multi-lock: a run has `L` locks (axes `A1..AL`, each with its own glyph and populations). Locks solved in any order.

## 2. Core mechanics

**Phase 1 — find the angle.** `ORBIT(dx,dy)` rotates the view. **Coherence** `c = f(view · A)` drives feedback: as the view direction nears `A`, SIGNAL points contract toward their projected glyph positions (position-lerp, strongest cue), dot brightness rises, and an audio tone purifies from noise to a clear pitch. Within tolerance `θ_lock`, the view soft-snaps (magnetic assist, strength configurable for accessibility) and the glyph is legible.

**Phase 2 — extract.** While aligned, a cursor appears on the projected 2D lattice. Player must `SELECT` all glyph points (or, variant `trace`, visit them in a connected stroke without lifting). Selecting a TRIP point = hazard event. Selecting NOISE = dud (small time cost, no hazard). Drifting out of alignment mid-extraction pauses (doesn't reset) progress.

**Pressure — the sweep.** A scan **wavefront** (a plane of bright dots) crosses the cloud every `T_sweep` s. If the wavefront passes while the player is *mid-extraction and misaligned*, one extracted point is wiped back. At D4+, each wavefront pass also applies a small random rotation to `A` (`drift`, ≤ 2°) — the lock creeps.

## 3. Failure channels

- Soft: run timer `T_run` expires → attempt lost, retry allowed (host decides cost).
- Critical: cumulative **3 TRIP hits** → alarm (report `LOST_CRIT`). TRIP hits also cost 10% of `T_run` each.

## 4. Difficulty envelope

| Param | D1 | D2 | D3 | D4 | D5 |
|---|---|---|---|---|---|
| M points | 60 | 90 | 120 | 150 | 200 |
| K signal | 12 | 14 | 16 | 18 | 20 |
| H trip | 0 | 2 | 4 | 6 | 8 |
| L locks | 1 | 1 | 2 | 2 | 3 |
| θ_lock (deg) | 6 | 5 | 4 | 3.5 | 3 |
| T_run (s) | 60 | 60 | 75 | 75 | 90 |
| T_sweep (s) | — | 12 | 10 | 8 | 7 |
| Axis drift | no | no | no | yes | yes |

SKILL effects: SKILL≥1 shows a coherence meter (dotted arc) — else feedback is purely in the cloud; SKILL≥2 narrows the search: a faint great-circle band containing `A` is hinted; SKILL≥3 TRIP points shimmer subtly at ≥80% coherence; SKILL 4 halves drift. `OVERRIDE`: instantly solves phase 1 for the current lock (snaps to `A`); extraction still manual.

## 5. Win / scoring

- Win: all L locks extracted. `margin` = time remaining + (3 − TRIP hits).
- The extracted glyphs are *reported in the result payload* — the host can use them as actual keys/intel (the Covert Action principle: puzzle output re-enters the world).

## 6. Generation (solution-first, seeded)

1. Pick `A` uniformly on the sphere (reject within 15° of straight-on default view — never solved by not moving). For L>1, axes pairwise ≥ 35° apart.
2. Choose key glyph from the glyph bank (§7); back-project SIGNAL with depths in [0.3, 1.0] spread (depth variance is what makes misaligned views scatter).
3. Back-project TRIPs into the 1-dot margin ring around the glyph.
4. Noise fill; then **false-constellation check:** render 400 random viewpoints; if any non-A viewpoint yields ≥70% glyph-coherence by accident (noise forming the pattern), re-roll noise. (This is the solver step: uniqueness of the solution view.)

## 7. Rendering notes (dots)

- This game *is* the dots aesthetic — the renderer needs no metaphor. Key demands:
  - Per-point size/brightness attenuation with depth (parallax legibility depends on it).
  - The contraction-toward-glyph lerp under rising coherence is the core feel mechanism; ease it (smoothstep), never linear.
  - Sweep wavefront = plane of bright dots passing through the cloud with a 5-frame afterglow on points it crosses.
  - TRIPs are static X-glyph micro-patterns *only visible when hit or hinted* — otherwise identical dots (their identity is positional, learned from glyph-outline reading).
- Glyph bank: 5×7 dot-matrix set with high mutual Hamming distance; same bank shared with BREACH's alphabet for cross-game visual language.
- Braille terminal mode (honest note): true 3D parallax does not survive 2×4 cells. Braille fallback = "focus" variant: one rotation axis only (a 1D dial), coherence as raised-dot density ramp, extraction on the flattened glyph. Spec-supported but secondary; the point-cloud renderer is primary here.
- Audio: coherence = noise→pure-tone crossfade (this game is *almost* playable by ear in phase 1 — preserve that); sweep = whoosh tick; TRIP = the flat buzz shared across all four games.

## 8. Acceptance tests

- Determinism: seed → identical cloud, axes, glyphs.
- Coherence function is monotonic in angular distance to `A`; θ_lock snap engages/disengages with hysteresis (no flicker at the boundary).
- Extraction progress pauses (not resets) on alignment loss; sweep wipe removes exactly one point and only if misaligned mid-extraction.
- False-constellation check: 1,000 seeds → zero boards with a spurious ≥70%-coherence viewpoint.
- With drift on, `A` never drifts outside the SKILL≥2 hint band.
