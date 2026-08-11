# Shared Conventions for Hacking Mini-Game Specs

All four specs reference this document instead of repeating it. A spec is complete when an implementer can build the game from spec + conventions alone.

## 1. The four wrappers (every game must implement all four)

1. **Asymmetric failure.** Two failure channels: *soft* (lose an attempt/time/resource, retry allowed) and *critical* (touch a marked hazard / let the adversary finish → diegetic consequence: lockout, alarm state, damage to the meta-layer). Hazards are always visible or inferable — critical failure must feel earned, never random.
2. **Adversary process.** Pressure is a *visible process*, not just a number ticking down: an opponent spending pulses, a tracer wavefront advancing, a flow front spreading, a scan sweep closing in. The player can look at it and estimate time remaining.
3. **Competence as legibility.** A single integer stat `SKILL (0–4)` feeds each game. It never auto-solves; it changes perception and margins (more preview time, shown probabilities, fewer hazards, bigger buffer). Each spec defines its SKILL table.
4. **Diegetic surface.** All UI elements live inside the fiction of the rendered device. No floating HUD text outside the puzzle frame. Numbers appear as dot-matrix readouts.

## 2. Consumable valve

Every game accepts an optional consumable `OVERRIDE` at any point: instantly resolves the current sub-step in the player's favor (claims one cell, captures one node silently, fills one buffer slot legally, locks one alignment). One per run unless configured. Cost/acquisition is the host game's business (step 4); mini-games only expose the hook.

## 3. Session contract (API every mini-game implements)

```
init(config, seed) -> GameState        // deterministic from seed
tick(dt) / step()                      // real-time or turn-based advance
input(event) -> void                   // abstract input events (see §4)
state() -> { phase: PLAN|RUN|WON|LOST_SOFT|LOST_CRIT, score, detail }
result() -> { outcome, margin, timeUsed, resourcesUsed, hazardsTripped }
```

`margin` (how decisively you won: cells 8–4 vs 7–5, seconds left, noise made) must be reported — meta-layers may scale rewards by it (the Quazatron rule).

## 4. Input abstraction

Games consume abstract events so keyboard / gamepad / touch map freely:
`MOVE(dir)`, `SELECT`, `CANCEL`, `ORBIT(dx,dy)` (3D games), `COMMIT`, `OVERRIDE`.
No game may require more than: one pointer/cursor + 2 buttons, or 4-way + 2 buttons. (Deliberate constraint: keeps everything braille-terminal playable.)

## 5. Difficulty envelope

Each spec defines parameters as a table with columns `D1..D5` (difficulty tiers). Tier is chosen by the host; SKILL then modifies within the tier. Every game must be *winnable by a perfect player at D5 with SKILL 0* (validated by solver during generation — see §6).

## 6. Procedural generation rule

Generate *solution-first*: construct a known-good solution/route/board satisfying win conditions, then decorate with noise/hazards, then verify with a solver that (a) the puzzle is solvable, (b) the trivial/greedy strategy does NOT win at D3+ (there must be a gap between naive and optimal play). Reject and re-roll otherwise. All generation is seed-deterministic.

## 7. Rendering vocabulary (dots pipeline)

Target renderers: (a) 3D dotted-halftone point cloud, (b) braille dot-matrix rasterizer (2×4 dot cells, monochrome + intensity via dot density/blink).

Shared vocabulary — specs describe visuals ONLY in these terms:
- **node**: stationary dot cluster; size = importance, density = strength/rating.
- **wire/edge**: string of evenly spaced dim dots; unpowered = sparse, powered = dense.
- **pulse/agent**: bright 1–3 dot packet traveling along a wire at constant speed, with a fading 3-dot tail.
- **territory/fill**: claimed area shown by dot density ramp (empty 10% → owned 90%); two owners distinguished by blink phase (A steady, B 2 Hz) in mono, or hue when color exists.
- **hazard**: distinct glyph — X-cross dot pattern, always static, never blinking (hazards must be the calmest thing on screen).
- **wavefront**: advancing line of bright dots (flow fronts, tracers).
- **glyph**: symbol on a 2×4 braille cell or 3×5 dot matrix (used instead of text wherever possible).
- **meter**: dotted arc or bar that *depletes toward* the critical event.
- Sound: every pulse arrival, claim, and adversary action has a tick; adversary tempo accelerating = the Uplink beep principle. Audio must carry enough state to play degraded (eyes-free ≈ possible for timing-based games).

## 8. Phase structure

All games use: `PLAN` (clock frozen or slow; inspect board; SKILL extends this) → first committed input starts `RUN` → terminal phase. Games must always allow `CANCEL` during PLAN to walk away without critical failure (the Fallout back-out rule).

## 9. Naming

Working titles used across specs: **TRANSFER** (Paradroid duel), **TRACE** (node capture vs tracer), **BREACH** (matrix/buffer), **CONSTELLATION** (parallax point cloud).
