# Paradroid: How the Original's Difficulty Progression Worked

*Design study for the TRANSFER spec. Sources: Andrew Braybrook's "Birth of a Paradroid" development diary (Zzap!64, 1985, 4 parts), his Paradroid 90 "From Start to Finish" diary (1990), the original manual, c64-wiki, Data Driven Gamer's 2026 playthrough analysis, Zzap!64 review. Direct quotes attributed.*

---

## The central finding

Paradroid has almost no scripted difficulty curve. The ship is a **fixed difficulty landscape** and the player's current host is a **self-chosen difficulty slider**. Nearly everything that feels like "progression" is an emergent property of five interlocking economies. That's why it stayed interesting for 400+ screens with one repeated minigame: the minigame's difficulty was never a level number — it was the *gap between what you are and what you're trying to become*, and the player set that gap themselves every time.

Braybrook, on the intent: *"Since it's deliberately difficult for a lowly servant droid to transfer to a great big hairy battle droid, the transfer is difficult. This is because you start off as the lowest of the low."*

## The five interlocking systems

### 1. Both sides of the duel scale independently — difficulty is the class gap

Your pulse budget in the transfer game comes from **your current host's** class; the defender's budget comes from **its** class. (Qualitatively confirmed across sources; exact per-class numbers were never documented — we get to choose our own.) So the same 12-cell board is a stroll as an 821 attacking a 247, and a cliff as an 001 attacking a 711. There is no "level 3 transfer puzzle" anywhere in the game — only matchups.

The crucial enabler: the 1985 defender AI was **essentially random** (fed by the SID chip's noise generator), compensated with *"a couple more shots on average to make up for stupid moves."* Randomness is what keeps underdog attempts *possible* — a skilled board-reader can beat a far stronger droid whose extra pulses land stupidly. Budget asymmetry sets the odds; skill moves them. That's the whole game in one sentence.

### 2. Power is rented, never owned — decay forces tempo

Every host burns out: roughly 4 minutes for low classes, ~2 minutes for the 500–800 series, **~30 seconds for the 999** (Data Driven Gamer's measurements; telegraphed by slowing animation at ~50% energy, flashing at ~25%). Burnout reverts you to the 001. Transfer *destroys your old host* whether you win or lose, so every upgrade is a one-way bet placed under a ticking clock.

This is the anti-snowball mechanism. In most games, power compounds; in Paradroid, peak power is the most *perishable* state in the game, so the strongest moment is also the most urgent. The difficulty curve breathes: climb, decay, re-climb — and the re-climb is never from zero skill, only from zero hardware.

### 3. The rubber band punishes ambition proportionally

Fail a transfer and you revert to 001 (score penalty of class × −10 — reaching for a 999 and missing costs the most). But — and this is the elegant half — the game *softens* exactly where it punishes: as an 001 the viable targets are the weak droids, whose duels you can reliably win. Difficulty spikes on failure, then immediately offers you the shallow end of the gradient again. The punishment is severe in *position*, gentle in *possibility*.

The one exception is the famous edge case: since you've been clearing decks, the easy hosts may already be gone — you can be **stranded as an 001** on a deck of battle droids. Which leads to:

### 4. The ship is a consumable ecology, not a backdrop

Each of the 20 decks features *"a main variety of robot, along with a random selection of others"* — so space itself is the difficulty axis (staterooms: armed 476s; the bridge: 711 disruptor droids and the 999). The player routes their own curve deck by deck, and the data terminals even gate *knowledge* by class — you can only read specs of droids at or below your own rank, so information is a progression reward too.

Two ecological twists make it dynamic rather than static:
- **Droids damage each other.** Braybrook, delighted and alarmed: *"the little robots get duffed up by the bigger ones before I can get to them!"* Big droids can destroy your ladder of easy hosts before you climb it.
- **Clearing is depletion.** Every droid you destroy is a host you can never use. The 500-point deck-clear bonus (lights shut down, deck goes grey) actively tempts you to consume your own safety net. The resource you're spending all game is *the ship's population itself*.

### 5. Risk dials the player controls

Two explicit opt-in difficulty dials, both score-mediated: the **alert system** (kill quickly → green→yellow→red → 5/10/25 bonus points *per second* while hot) pays you for making the ship angrier; and **energizer pads cost −5 points/second** — even resting is taxed. Meanwhile shooting and transferring score identically (class × 25), so capturing is never the greedy score move — you transfer for *capability*, you shoot for *tempo*, and (per DDG) transfers don't raise the alert while kills do. Quiet-and-capable versus loud-and-lucrative is a real strategic identity choice.

## What the diaries say about tuning philosophy

Braybrook's balancing rule, stated outright in part 3: *"If the game system doesn't give you a more than adequate ability to complete the task in hand, then either the game must be made easier, or the weapon more powerful."* — generosity as a design invariant, remarkable for 1985.

Playtesting artifacts that became rules:
- **Ties replay instead of coin-flipping** because testers would *"rather lose every time than leave it to a 50/50 chance."* Players accept losing to a board; they revolt at losing to a coin.
- The board generator was tuned *"not to give impossible setup situations."* Solvability was a generation-time guarantee, not a hope. (Our conventions §6 independently arrived at this.)
- Enemy fire was switched on late in development and instantly transformed the game: *"All of a sudden, the ship becomes a battlefield."*

And Paradroid 90's revisions are effectively Braybrook reviewing his own 1985 balance:
- He replaced the random defender AI with a recursive evaluator that *"can be relied on not to make mistakes"* — and immediately had to hand the player **an extra pulser** because testers found it too hard. Smart AI + player bonus replaced dumb AI + AI bonus. Same equilibrium, opposite construction — and arguably worse: several retrospectives find the 90 transfer game less charming. The lesson: *a fallible opponent you can outread is more fun than a perfect one you must out-resource.*
- **"Hero syndrome":** the player takes *"about half the damage of the other robots"* — *"A small dose of hero syndrome makes the game so much more playable and therefore enjoyable."*
- **Grace periods:** *"No pirates will appear for about twenty minutes on the large freighter, enough time for good players to clear it."*
- **Guaranteed ladders:** spawning is pseudo-random but *"even with an unlucky setup I can guarantee some easy robots"* — the 1990 fix for the stranded-001 problem.

## Distilled: the seven design moves worth stealing

1. **Difficulty = gap, chosen by the player.** No tier numbers; both sides' budgets derive from what they are.
2. **Power decays faster the more of it you have.** The top of the curve is a timer, not a plateau.
3. **Punish ambition proportionally, then reopen the shallow end.** Reversion must always land somewhere winnable (and generation must *guarantee* easy hosts exist — the P90 fix).
4. **A fallible, legible opponent.** Randomness-plus-budget beats perfection-plus-handicap; the player must be able to win *because they read the board better*.
5. **Make the difficulty landscape spatial and consumable.** The player routes their own curve, and their consumption reshapes it.
6. **Opt-in heat.** Pay the player (score, loot margin) for choosing the louder, riskier line.
7. **Never coin-flip.** Ties replay; boards are always solvable; generosity is an invariant.

## Concrete amendments proposed for 01-transfer.md

- **Replace the D1–D5 tier table's budget rows with a class model.** Add `class 0–9` to both combatants: `pulses = base + class` (proposed: base 4, so 001 → 4 pulses, 999 → 13; tune in playtesting since the original numbers are undocumented). Board hazard density keys off the *defender's* class; timer stays fixed. D-tiers remain only as a wrapper for hosts that don't want the class meta.
- **Add the decay contract to the result payload.** TRANSFER already reports `margin`; add `host_ttl` guidance: won hosts carry a lifetime inversely proportional to class (e.g. `ttl = k / (1 + class)`), consumed by the meta-layer. Quazatron margin rule already covers quality.
- **Add failure pricing:** `LOST_SOFT` reports `penalty = defender_class × unit` for the meta to apply. Reversion target (001-equivalent) is meta business, but the spec should state the invariant: *the meta must guarantee at least one winnable matchup exists after any reversion* (P90's guaranteed ladder).
- **Rewrite AI policies as personality + budget, not tiers.** Keep `naive` (random-with-extra-budget — the 1985 soul; make it the default defender for low classes), `greedy`, `greedy+`, `optimal-ish` mapped to defender class bands (0–2 naive, 3–5 greedy, 6–7 greedy+, 8–9 optimal-ish with the P90 rule: when defender is optimal-ish, grant the attacker +1 pulse).
- **Keep 6–6 replay exactly as specced** (it was a playtest-derived law, now with a citation).
- **Add an "alert" hook to the session contract (conventions):** optional `heat` input/output so a meta-layer can pay margin bonuses for hacking under elevated alert — the opt-in heat dial, generalized to all four games.

---

*Uncertainties inherited from sources: exact pulse counts per class were never published (we define our own); burnout timings are one player's empirical measurements; deck count is 20 (one wiki fetch said 16 — majority of primary sources say 20).*
