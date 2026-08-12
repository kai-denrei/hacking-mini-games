# Circuit Duel v2 (game #8) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a refined circuit-duel (game #8) with the full Paradroid wire vocabulary, OFF→ON activation, and the 1985 manual's 7/6/≤5 win rules — keeping the dotted point-cloud identity.

**Architecture:** Extend the shared `transfer` model/play/generate/simulate with new element kinds + locked cells + threshold win rules (legacy renderers keep working). Add a shared element-glyph module (single source of truth for renderer + Rules glossary). Build a new self-contained renderer at `src/games/circuit-duel-2/view.ts`, wire it as game #8, and add a visual glossary to the Rules panel.

**Tech Stack:** TypeScript (strict, `noUnusedLocals`, `verbatimModuleSyntax`), three.js, Vite. No unit-test runner — logic is verified with `node --experimental-strip-types scripts/verify-*.ts` harnesses that `throw` on failure; rendering is verified with headless Chrome + SwiftShader screenshots (see `memory/headless-webgl-verification`).

## Global Constraints

- Spec: `docs/superpowers/specs/2026-08-12-tubes-paradroid-design.md` (authoritative).
- `OutcomeKind` is a **superset** — add `'LOCK' | 'SHORT' | 'FLIP' | 'CONVERT'`; keep `'CLAIM' | 'DEAD' | 'INVERT' | 'REPEAT'` so legacy renderers compile. New elements are emitted only by the `elements: 'full'` generator path.
- Win rules (all circuit games, shared `finish()`): your cells of 12 → **≥7 WON**, **=6 DEADLOCK**, **≤5 LOST**. `DEADLOCK` replays the **same** board.
- `LOCK`ed cells are frozen for **both** sides once locked.
- Element semantics are relative to the pulse's owner (`self` = firer, `opp` = other side): `FLIP` → cell = `opp`; `CONVERT` → `opp`→neutral, neutral→`self`, `self`→`self`; `DEAD`/`SHORT` → no cell change (wasted).
- Keep the dotted identity; no flat repaint. TypeScript strict — remove unused imports; type-only imports use `import type`.
- Commit after every task. Do not deploy until Task 11.

---

## File structure

- `src/games/transfer/model.ts` — extend `OutcomeKind`, `terminalValue`, add `WIN`/`DEADLOCK_AT` constants. (modify)
- `src/games/transfer/play.ts` — `locked` set, `resolve()` new kinds, `finish()` thresholds, `Phase` += `'DEADLOCK'`. (modify)
- `src/games/transfer/simulate.ts` — batch solver resolves new kinds + locked. (modify)
- `src/games/transfer/generate.ts` — `generateBoard(spec, seed, opts?)` with `elements:'full'` placing the new vocabulary; `board.joiners`. (modify)
- `src/games/{transfer,circuit,shapes,tubes}/view.ts` — overlay handles `DEADLOCK`. (modify)
- `src/render/circuitElements.ts` — `elementGlyphDots(kind,t)` + `ELEMENT_INFO`; single glyph source. (create)
- `src/render/tubeFlow.ts` — the `drawTube` working-torus kernel, extracted for reuse. (create)
- `src/games/circuit-duel-2/view.ts` — `mountCircuitDuel2` renderer. (create)
- `src/main.ts` — wire game #8. (modify)
- `src/devlog/rules.ts` — `GameRules.glossary`; game #8 entry. (modify)
- `src/devlog/panel.ts` — render the visual glossary. (modify)
- `scripts/verify-circuit-duel.ts` — logic harness. (create)

---

## Task 1: Model — extended element kinds + values

**Files:**
- Modify: `src/games/transfer/model.ts`
- Test: `scripts/verify-circuit-duel.ts`

**Interfaces:**
- Produces: `OutcomeKind` superset; `terminalValue(t: Terminal): number`; `WIN = 7`; `DEADLOCK_AT = 6`.

- [ ] **Step 1: Write the failing test** — create `scripts/verify-circuit-duel.ts`:

```ts
import { terminalValue, WIN, DEADLOCK_AT, type Terminal } from '../src/games/transfer/model.ts';

function eq(a: unknown, b: unknown, msg: string): void {
  if (JSON.stringify(a) !== JSON.stringify(b)) throw new Error(`FAIL ${msg}: got ${JSON.stringify(a)} want ${JSON.stringify(b)}`);
}
const T = (kinds: string[]): Terminal => ({ id: 0, outcomes: kinds.map((k) => ({ cell: 0, delay: 1, kind: k as never })) });

eq(WIN, 7, 'WIN');
eq(DEADLOCK_AT, 6, 'DEADLOCK_AT');
eq(terminalValue(T(['CLAIM'])), 1, 'claim=1');
eq(terminalValue(T(['CLAIM', 'CLAIM'])), 2, 'split=2');
eq(terminalValue(T(['LOCK'])), 2, 'lock=2');
eq(terminalValue(T(['CONVERT'])), 0.5, 'convert=0.5');
eq(terminalValue(T(['FLIP'])), -1, 'flip=-1');
eq(terminalValue(T(['DEAD'])), 0, 'dead=0');
eq(terminalValue(T(['SHORT'])), 0, 'short=0');
console.log('task1 OK');
```

- [ ] **Step 2: Run to verify it fails**

Run: `node --experimental-strip-types scripts/verify-circuit-duel.ts`
Expected: FAIL (kinds `LOCK`/`SHORT`/`FLIP`/`CONVERT` not in `OutcomeKind`; `terminalValue` returns wrong numbers; `WIN` exists but `DEADLOCK_AT` missing).

- [ ] **Step 3: Implement** — in `model.ts`, replace the `OutcomeKind` type and `terminalValue`, and add `DEADLOCK_AT`:

```ts
export type OutcomeKind = 'CLAIM' | 'INVERT' | 'DEAD' | 'REPEAT' | 'LOCK' | 'SHORT' | 'FLIP' | 'CONVERT';
```

Keep `export const WIN = 7;` and add below it: `export const DEADLOCK_AT = 6;`

Replace `terminalValue`:

```ts
// static value of a terminal (expected influence), used by generation balance +
// the AI's target choice. Good wires are positive; the filled transformer is a
// trap (negative); dead/short are wasted (0).
export function terminalValue(t: Terminal): number {
  let v = 0;
  for (const o of t.outcomes) {
    if (o.kind === 'CLAIM') v += 1;
    else if (o.kind === 'REPEAT' || o.kind === 'LOCK') v += 2;
    else if (o.kind === 'INVERT') v += 0.5;
    else if (o.kind === 'CONVERT') v += 0.5;
    else if (o.kind === 'FLIP') v -= 1;
    // DEAD, SHORT → 0
  }
  return v;
}
```

- [ ] **Step 4: Run to verify it passes**

Run: `node --experimental-strip-types scripts/verify-circuit-duel.ts`
Expected: `task1 OK`. Then `npx tsc --noEmit` → passes (legacy still references `INVERT`/`REPEAT`, which remain).

- [ ] **Step 5: Commit**

```bash
git add src/games/transfer/model.ts scripts/verify-circuit-duel.ts
git commit -m "Circuit v2: extend OutcomeKind + terminalValue + DEADLOCK_AT"
```

---

## Task 2: Play — resolve() new kinds + locked cells

**Files:**
- Modify: `src/games/transfer/play.ts`
- Test: `scripts/verify-circuit-duel.ts` (append)

**Interfaces:**
- Consumes: `OutcomeKind` (Task 1).
- Produces: `TransferGame.locked: Set<number>`; `resolve()` handling `LOCK/SHORT/FLIP/CONVERT`.

- [ ] **Step 1: Write the failing test** — append to `scripts/verify-circuit-duel.ts`:

```ts
import { TransferGame } from '../src/games/transfer/play.ts';
import type { Board } from '../src/games/transfer/model.ts';

// minimal 1-terminal-per-side board with a single cell 0, no AI schedule needed
function stubBoard(kind: string): Board {
  const term = { id: 0, outcomes: [{ cell: 0, delay: 0.01, kind: kind as never }] };
  const layer = { terminals: [term, ...Array.from({ length: 7 }, (_, i) => ({ id: i + 1, outcomes: [] })) ] };
  return {
    seed: 's', spec: { attacker: 5, defender: 2 },
    params: { tMatch: 5, pPulses: 9, ePulses: 0, traps: 0, repeats: 0, ai: 'naive' },
    left: layer, right: { terminals: Array.from({ length: 8 }, (_, i) => ({ id: i, outcomes: [] })) },
    better: 'left', genStats: { boardAttempts: 1, qLeft: 1, qRight: 0 },
  };
}
function fireAndSettle(kind: string, owner: 'P' | 'E', initial: 'NEUTRAL' | 'P' | 'E'): 'NEUTRAL' | 'P' | 'E' {
  const g = new TransferGame(stubBoard(kind));
  g.chooseSide(owner === 'P' ? 'left' : 'right'); // player left; E fires from right — but we drive P for simplicity
  g.owners[0] = initial;
  if (owner === 'P') g.firePlayer(0);
  else { g['spawn']('right', 'E', 0); } // test hook: spawn enemy pulse
  for (let i = 0; i < 100; i++) g.tick(0.05);
  return g.owners[0];
}
// FLIP: self=P fires → cell becomes E (opp)
eq(fireAndSettle('FLIP', 'P', 'NEUTRAL'), 'E', 'flip P→E');
// CONVERT: opp→neutral, neutral→self, self→self
eq(fireAndSettle('CONVERT', 'P', 'E'), 'NEUTRAL', 'convert E→neutral');
eq(fireAndSettle('CONVERT', 'P', 'NEUTRAL'), 'P', 'convert neutral→P');
eq(fireAndSettle('CONVERT', 'P', 'P'), 'P', 'convert P→P');
// DEAD/SHORT: no change
eq(fireAndSettle('DEAD', 'P', 'E'), 'E', 'dead no-op');
eq(fireAndSettle('SHORT', 'P', 'NEUTRAL'), 'NEUTRAL', 'short no-op');
// LOCK freezes: P locks cell, then E FLIP cannot change it
{
  const g = new TransferGame(stubBoard('LOCK'));
  g.chooseSide('left'); g.firePlayer(0);
  for (let i = 0; i < 100; i++) g.tick(0.05);
  eq(g.owners[0], 'P', 'lock claims P');
  eq(g.locked.has(0), true, 'cell locked');
  g['spawn']('right', 'E', 0); // an E pulse (its outcome kind irrelevant — even CLAIM)
}
console.log('task2 OK');
```

> Note: the test uses `g['spawn'](...)` as a deliberate test hook into the private spawn; acceptable for a harness. If TS complains under the harness, cast: `(g as unknown as { spawn: Function }).spawn`.

- [ ] **Step 2: Run to verify it fails**

Run: `node --experimental-strip-types scripts/verify-circuit-duel.ts`
Expected: FAIL — `resolve()` doesn't handle `FLIP/CONVERT/SHORT/LOCK`; `g.locked` undefined.

- [ ] **Step 3: Implement** — in `play.ts`:

Add the field near the other public fields:

```ts
  locked = new Set<number>();
```

Replace `resolve()`:

```ts
  private resolve(p: LivePulse): void {
    if (p.kind === 'DEAD' || p.kind === 'SHORT') return; // absorbed / short-circuited
    if (this.locked.has(p.cell)) return; // constant-pulse cells are final
    const self: Owner = p.owner === 'P' ? 'P' : 'E';
    const opp: Owner = self === 'P' ? 'E' : 'P';
    const cur = this.owners[p.cell]!;
    if (p.kind === 'CLAIM') this.owners[p.cell] = self;
    else if (p.kind === 'LOCK') {
      this.owners[p.cell] = self;
      this.locked.add(p.cell);
    } else if (p.kind === 'FLIP') this.owners[p.cell] = opp; // filled transformer: feeds the enemy
    else if (p.kind === 'CONVERT') this.owners[p.cell] = cur === opp ? 'NEUTRAL' : cur === 'NEUTRAL' ? self : self; // advance-only
    else if (p.kind === 'INVERT') this.owners[p.cell] = cur === 'NEUTRAL' ? self : cur === 'P' ? 'E' : 'P'; // legacy
    else if (p.kind === 'REPEAT') {
      this.owners[p.cell] = self;
      this.guns.push({ cell: p.cell, period: p.repeatPeriod, nextAt: this.matchElapsed + p.repeatPeriod, owner: p.owner });
    }
    this.claimFlash[p.cell] = 0.35;
  }
```

Guard the repeat-gun loop so a locked cell isn't re-claimed by a legacy gun: in `tick()`, inside the gun `while`, add `if (this.locked.has(g.cell)) break;` before `this.owners[g.cell] = g.owner;`.

- [ ] **Step 4: Run to verify it passes**

Run: `node --experimental-strip-types scripts/verify-circuit-duel.ts`
Expected: `task2 OK`. `npx tsc --noEmit` passes.

- [ ] **Step 5: Commit**

```bash
git add src/games/transfer/play.ts scripts/verify-circuit-duel.ts
git commit -m "Circuit v2: resolve() new element kinds + locked cells"
```

---

## Task 3: Play — win thresholds + DEADLOCK

**Files:**
- Modify: `src/games/transfer/play.ts`
- Test: `scripts/verify-circuit-duel.ts` (append)

**Interfaces:**
- Consumes: `WIN`, `DEADLOCK_AT` (Task 1).
- Produces: `Phase` includes `'DEADLOCK'`; `finish()` uses thresholds; `over` includes `DEADLOCK`.

- [ ] **Step 1: Write the failing test** — append:

```ts
function outcomeFor(pCount: number): string {
  const g = new TransferGame(stubBoard('CLAIM'));
  g.chooseSide('left');
  for (let i = 0; i < 12; i++) g.owners[i] = i < pCount ? 'P' : 'E';
  g['finish'](); // test hook into private finish
  return g.phase;
}
eq(outcomeFor(7), 'WON', '7→WON');
eq(outcomeFor(8), 'WON', '8→WON');
eq(outcomeFor(6), 'DEADLOCK', '6→DEADLOCK');
eq(outcomeFor(5), 'LOST', '5→LOST');
console.log('task3 OK');
```

- [ ] **Step 2: Run to verify it fails**

Run: `node --experimental-strip-types scripts/verify-circuit-duel.ts`
Expected: FAIL — `finish()` returns `WON` only when `p>e`; no `DEADLOCK`.

- [ ] **Step 3: Implement** — in `play.ts`:

Change the `Phase` type: `export type Phase = 'PLAN' | 'RUN' | 'WON' | 'LOST' | 'DEADLOCK';`

Import the constants: `import { CELLS, WIN, DEADLOCK_AT, layerOf, type Board, type Owner, type OutcomeKind } from './model.ts';`

Replace `finish()`:

```ts
  private finish(): void {
    let p = 0;
    for (const o of this.owners) if (o === 'P') p++;
    this.result = { p, e: this.owners.filter((o) => o === 'E').length };
    this.phase = p >= WIN ? 'WON' : p === DEADLOCK_AT ? 'DEADLOCK' : 'LOST'; // 1985 manual: 7 / 6 / ≤5
  }
```

Update the `over`-equivalent: the game has no `over` getter, but `tick()` early-returns on `this.phase !== 'RUN'`, so `DEADLOCK` naturally halts ticking. No change needed there.

- [ ] **Step 4: Run to verify it passes**

Run: `node --experimental-strip-types scripts/verify-circuit-duel.ts`
Expected: `task3 OK`.

- [ ] **Step 5: Commit**

```bash
git add src/games/transfer/play.ts scripts/verify-circuit-duel.ts
git commit -m "Circuit v2: 7/6/≤5 win thresholds + DEADLOCK phase"
```

---

## Task 4: Legacy views handle DEADLOCK

**Files:**
- Modify: `src/games/transfer/view.ts`, `src/games/circuit/view.ts`, `src/games/shapes/view.ts`, `src/games/tubes/view.ts`

**Interfaces:**
- Consumes: `Phase` `'DEADLOCK'` (Task 3).

- [ ] **Step 1: Implement (no separate unit test — verified by tsc + the existing screenshot harness)**

In each of the four views, find the overlay trigger line:

```ts
if ((game.phase === 'WON' || game.phase === 'LOST') && overlay.style.display === 'none') showOverlay();
```

Replace with:

```ts
if ((game.phase === 'WON' || game.phase === 'LOST' || game.phase === 'DEADLOCK') && overlay.style.display === 'none') showOverlay();
```

In each `showOverlay()`, add a deadlock branch to the title/color. Example for `tubes/view.ts` (`const won = game.phase === 'WON';`), change to:

```ts
    const dead = game.phase === 'DEADLOCK';
    const won = game.phase === 'WON';
    const title = won ? '◆ CIRCUIT TAKEN' : dead ? '⟳ DEADLOCK' : '✕ REPELLED';
    const color = won ? '#8fd0b6' : dead ? '#e0b070' : '#d0605a';
```

then use `title`/`color` in the innerHTML instead of the inline ternary. (Use the same pattern for the other three views, matching each one's existing title strings; deadlock title `⟳ DEADLOCK`, color `#e0b070`, sub-line `6–6 — the battle replays`.)

- [ ] **Step 2: Verify**

Run: `npx tsc --noEmit` → passes.
Run the screenshot harness on `/5` (see `memory/headless-webgl-verification`): drive a game, force `window.__cx.game().owners` to six `'P'`/six `'E'`, `window.__cx.game()['finish']()`, and confirm the deadlock overlay renders. Expected: amber "DEADLOCK" overlay, no console errors.

- [ ] **Step 3: Commit**

```bash
git add src/games/transfer/view.ts src/games/circuit/view.ts src/games/shapes/view.ts src/games/tubes/view.ts
git commit -m "Circuit v2: legacy views show the DEADLOCK overlay"
```

---

## Task 5: Simulate — new-kind semantics in the batch solver

**Files:**
- Modify: `src/games/transfer/simulate.ts`
- Test: `scripts/verify-circuit-duel.ts` (append)

**Interfaces:**
- Consumes: `OutcomeKind` (Task 1).
- Produces: `simulate(...)` resolves `LOCK/SHORT/FLIP/CONVERT` + locked cells identically to `play.resolve()`.

- [ ] **Step 1: Read `simulate.ts`** to find its per-arrival resolution (it mirrors `play.resolve`). Note the local owners array + how it applies a claim/invert.

- [ ] **Step 2: Write the failing test** — append a check that a board whose only reachable outcome is `FLIP` gives the cell to the opponent in the sim:

```ts
import { simulate, aiSchedule, playerFireLate } from '../src/games/transfer/simulate.ts';
{
  const b = stubBoard('FLIP');
  const sched = aiSchedule('naive', b.right, 0, b.params.tMatch, (() => 0.5) as never);
  const r = simulate(b.left, b.right, playerFireLate(b.left, 1, b.params.tMatch), sched, 1, 0, b.params.tMatch);
  // player fired a FLIP → their pulse claims cell 0 for E, so player count for cell 0 = 0, e = 1
  eq(r.e >= 1, true, 'sim FLIP feeds E');
}
console.log('task5 OK');
```

- [ ] **Step 3: Run to verify it fails**

Run: `node --experimental-strip-types scripts/verify-circuit-duel.ts`
Expected: FAIL — sim treats unknown kind as a claim (or ignores), so `r.e` is 0.

- [ ] **Step 4: Implement** — in `simulate.ts`, in the arrival-resolution switch, add the new kinds mirroring `play.resolve()` (relative to the firing side `owner`, using a local `locked` Set the sim maintains): `SHORT`→skip; `LOCK`→set owner + lock; `FLIP`→set opponent; `CONVERT`→advance-only; check `locked` before any mutation. (Match the exact logic block from Task 2 Step 3, adapted to the sim's owners representation.)

- [ ] **Step 5: Run to verify it passes**

Run: `node --experimental-strip-types scripts/verify-circuit-duel.ts`
Expected: `task5 OK`.

- [ ] **Step 6: Commit**

```bash
git add src/games/transfer/simulate.ts scripts/verify-circuit-duel.ts
git commit -m "Circuit v2: simulator resolves new element kinds + locked"
```

---

## Task 6: Generate — full-vocabulary boards

**Files:**
- Modify: `src/games/transfer/generate.ts`, `src/games/transfer/model.ts` (add `Board.joiners?`)
- Test: `scripts/verify-circuit-duel.ts` (append)

**Interfaces:**
- Consumes: model + simulate (Tasks 1,5).
- Produces: `generateBoard(spec, seed, opts?: { elements?: 'legacy' | 'full' })`; `Board.joiners?: [number, number][]` (pairs of terminal ids on the same layer that share a cell — for the ⋈ marker).

- [ ] **Step 1: Write the failing test** — append:

```ts
import { generateBoard } from '../src/games/transfer/generate.ts';
import { layerOf } from '../src/games/transfer/model.ts';
{
  const kinds = new Set<string>();
  let solvable = 0, deterministicOk = true;
  for (let i = 0; i < 30; i++) {
    const b = generateBoard({ attacker: 4, defender: 4 }, `full${i}`, { elements: 'full' });
    for (const side of ['left', 'right'] as const) for (const t of layerOf(b, side).terminals) for (const o of t.outcomes) kinds.add(o.kind);
    // the intended better side must beat the AI (reuse the generator's own guarantee → boardAttempts finite means it passed)
    if (b.genStats.boardAttempts >= 1) solvable++;
    const b2 = generateBoard({ attacker: 4, defender: 4 }, `full${i}`, { elements: 'full' });
    if (JSON.stringify(b) !== JSON.stringify(b2)) deterministicOk = false;
  }
  eq(solvable, 30, 'all full boards generated');
  eq(deterministicOk, true, 'deterministic');
  eq(['LOCK', 'SHORT', 'FLIP', 'CONVERT'].some((k) => kinds.has(k)), true, 'full vocabulary present');
}
console.log('task6 OK');
```

- [ ] **Step 2: Run to verify it fails**

Run: `node --experimental-strip-types scripts/verify-circuit-duel.ts`
Expected: FAIL — `generateBoard` takes no `opts`; no new kinds emitted.

- [ ] **Step 3: Implement** — in `generate.ts`:
  - Add the 3rd param `opts: { elements?: 'legacy' | 'full' } = {}`; thread it through `tryGenerate`.
  - In `makeLayer`, when `elements === 'full'`, after the existing traps loop, decorate: promote one strong CLAIM to `LOCK` (the prize), retype some trap outcomes to `FLIP` (filled) and `SHORT` (deceptive) instead of always `DEAD`/`INVERT`, and add a `CONVERT` on a mid terminal. Keep **≥5 clean (CLAIM/LOCK/SPLIT-only) terminals** per layer (the existing invariant).
  - JOINER: with `elements:'full'`, on ~1 board-half, route two terminals' CLAIM outcomes to the **same** cell; record the pair in `board.joiners`.
  - Keep the existing solvability loop (better side wins vs AI via `simulate`; naive early-fire must not win at `spec.defender >= 3`). The sim now understands the new kinds (Task 5), so the guarantee holds. Boards that fail retry (already the structure).
  - Add `joiners` to the returned `Board`.
  - `Board.joiners?: [number, number][]` in `model.ts`.

- [ ] **Step 4: Run to verify it passes**

Run: `node --experimental-strip-types scripts/verify-circuit-duel.ts`
Expected: `task6 OK`. If some seeds fail to generate (over-decorated), reduce the number of forced traps so ≥5 clean terminals always remain, and re-run.

- [ ] **Step 5: Commit**

```bash
git add src/games/transfer/generate.ts src/games/transfer/model.ts scripts/verify-circuit-duel.ts
git commit -m "Circuit v2: full-vocabulary generation (LOCK/SHORT/FLIP/CONVERT/JOINER)"
```

---

## Task 7: Shared element glyphs

**Files:**
- Create: `src/render/circuitElements.ts`
- Test: `scripts/verify-circuit-duel.ts` (append)

**Interfaces:**
- Produces:
  - `type GlyphKind = 'CLAIM' | 'SPLIT' | 'LOCK' | 'JOINER' | 'DEAD' | 'SHORT' | 'FLIP' | 'CONVERT';`
  - `interface GlyphDot { x: number; y: number; r: number; col: readonly [number, number, number]; a: number }`
  - `elementGlyphDots(kind: GlyphKind, t: number): GlyphDot[]` — local space ~[-1,1].
  - `ELEMENT_INFO: { kind: GlyphKind; name: string; meaning: string; tag: 'good' | 'bad' | 'tool' }[]`

- [ ] **Step 1: Write the failing test** — append:

```ts
import { elementGlyphDots, ELEMENT_INFO } from '../src/render/circuitElements.ts';
for (const info of ELEMENT_INFO) {
  const dots = elementGlyphDots(info.kind, 0.7);
  if (!dots.length) throw new Error(`FAIL ${info.kind} empty`);
  for (const d of dots) if (![d.x, d.y, d.r, d.a].every(Number.isFinite)) throw new Error(`FAIL ${info.kind} NaN`);
}
eq(ELEMENT_INFO.length, 8, '8 elements');
console.log('task7 OK');
```

- [ ] **Step 2: Run to verify it fails**

Run: `node --experimental-strip-types scripts/verify-circuit-duel.ts`
Expected: FAIL — module missing.

- [ ] **Step 3: Implement** — create `src/render/circuitElements.ts`. Each glyph is a small set of dots in local space (the renderer scales/offsets them onto a tube; the glossary scales them into a card). Colors: good = green `[0.4,0.95,0.7]`, bad = red `[0.95,0.4,0.36]`, tool = amber `[0.95,0.78,0.4]`, lock = gold `[1,0.82,0.4]`, spark = orange `[1,0.6,0.3]`, transformer filled = red, half = amber. Draw:
  - `CLAIM` — a single bright dot.
  - `SPLIT` — a fork: one dot splitting into two.
  - `LOCK` — a solid concentric ◈ (ring of dots + center).
  - `JOINER` — two dots merging into one (⋈).
  - `DEAD` — a short stub then an ✕.
  - `SHORT` — a line with an ⚡ zigzag spark in the middle.
  - `FLIP` — a filled square (grid of dots).
  - `CONVERT` — a half-filled square (left half filled).

Provide finite `{x,y,r,col,a}` dots for each (a static frame at `t`, with a small time wobble where natural). Keep ~8–20 dots per glyph.

- [ ] **Step 4: Run to verify it passes**

Run: `node --experimental-strip-types scripts/verify-circuit-duel.ts`
Expected: `task7 OK`.

- [ ] **Step 5: Commit**

```bash
git add src/render/circuitElements.ts scripts/verify-circuit-duel.ts
git commit -m "Circuit v2: shared element glyphs (single source for renderer + glossary)"
```

---

## Task 8: New renderer (game #8) — OFF/ON + elements

**Files:**
- Create: `src/render/tubeFlow.ts` (extract the working-torus tube kernel from `tubes/view.ts:176-236` — `drawTube`, `pointAtU`, `dirAt` — as exported functions taking a `DotField`)
- Create: `src/games/circuit-duel-2/view.ts`

**Interfaces:**
- Consumes: `DotField`, `generateBoard(...,{elements:'full'})`, `TransferGame`, `layout` (`cellPos/termPos/setVerticalGain/gainFor/vGain`), `circuit/route.traceDots`, `primModes` (enemy theme), `circuitElements.elementGlyphDots`.
- Produces: `mountCircuitDuel2(canvas, initial: { spec: MatchSpec; seed: string; skill: Skill }): Mounted` where `Mounted = { regenerate(spec, seed): void; chooseSide(side): void; fire(id): void; game(): TransferGame; dispose(): void }`.

- [ ] **Step 1: Extract the tube kernel** into `src/render/tubeFlow.ts`: move `dirAt`, `pointAtU`, and `drawTube` out of `tubes/view.ts` conceptually — but to avoid destabilizing the legacy TUBES, **copy** them into `tubeFlow.ts` as exports `drawTube(field, dots, dim, flow, lightAt, endU, nowSec, phase)` etc. (legacy TUBES keeps its own copy). Add `TUBE_R` constant. Verify `npx tsc --noEmit`.

- [ ] **Step 2: Build the renderer.** Base it on `src/games/tubes/view.ts` (copy it to `src/games/circuit-duel-2/view.ts`, rename `mountTubes`→`mountCircuitDuel2`), then change:
  - `build()` calls `generateBoard(spec, seed, { elements: 'full' })`.
  - **OFF/ON:** while `game.phase === 'PLAN'`, draw every tube with a single dim gray `dim`/`flow` (no owner color, no working-current — pass a `powered=false` flag to `drawTube` that suppresses the flowing particles, or simply skip the particle loop). Draw element glyphs in gray. When `game.phase !== 'PLAN'`, render powered exactly as TUBES does today (player green, host themed, flow on).
  - **Elements:** replace the ad-hoc INVERT/REPEAT/DEAD glyphs with `elementGlyphDots(kind, nowSec)` placed at the tube's element position (`at(dots, 0.5)` for mid-tube transformers/lock/short spark; `at(dots, 0.66)` for the dead stub; near the cell for the joiner ⋈). Map `OutcomeKind`→`GlyphKind` (`INVERT`→`CONVERT` fallback not needed since generation emits new kinds; a terminal with 2 outcomes → `SPLIT` fork at the branch).
  - **Joiners:** for each `board.joiners` pair, draw a ⋈ near the shared cell on both tubes.
  - **SHORT:** draw the tube full length to the cell but render the pulse dying at the spark (the pulse head stops at `u≈0.55`); mechanically `resolve()` already no-ops.
  - **Overlay:** handle `WON` (Complete), `DEADLOCK` (6–6, replays), `LOST` (Rejected) — three titles/colors; DEADLOCK sub-line "6–6 — the battle replays".
  - **Legend/tally:** update to name the visible elements; tally shows your count toward 7 (`you N/12 · need 7`).
  - Keep the responsive layout, ladder-compatible `spec`, and enemy theme (host side) exactly as TUBES.

- [ ] **Step 3: Verify (visual).** `npx tsc --noEmit` passes. Start `npm run dev`; with the headless-Chrome harness capture `/8`: (a) PLAN unpowered (gray, glyphs readable, no flow), (b) after `chooseSide('left')` powered (colors + flow), (c) a driven match to `owners` = 6/6 then `finish()` → DEADLOCK overlay. Expected: legible glyphs for each element, OFF→ON transition, no console errors. Iterate glyph sizes/positions until each element type is distinguishable.

- [ ] **Step 4: Commit**

```bash
git add src/render/tubeFlow.ts src/games/circuit-duel-2/view.ts
git commit -m "Circuit v2: renderer with OFF/ON activation + full element glyphs"
```

---

## Task 9: Wire game #8 in main

**Files:**
- Modify: `src/main.ts`

**Interfaces:**
- Consumes: `mountCircuitDuel2` (Task 8).

- [ ] **Step 1: Implement** — in `main.ts`:
  - `import { mountCircuitDuel2 } from './games/circuit-duel-2/view.ts';`
  - Add `'circuit-duel-2'` to `GameName` and to the end of `GAMES` (→ game 8, `/8`, key 8).
  - Add `'circuit-duel-2'` to the `DUEL` set (so the ladder applies).
  - In `mountGame`, add a branch before the constellation fallback: `name === 'circuit-duel-2' ? mountCircuitDuel2(canvas, duel('hdt'))`.
  - Update the comment listing the keys.

- [ ] **Step 2: Verify** — `npx tsc --noEmit` passes; headless screenshot `/8` loads; pressing `8` mounts it; the ladder HUD shows (it's a duel). No console errors.

- [ ] **Step 3: Commit**

```bash
git add src/main.ts
git commit -m "Circuit v2: wire as game #8 (duel ladder applies)"
```

---

## Task 10: Visual glossary in the Rules panel

**Files:**
- Modify: `src/devlog/rules.ts`, `src/devlog/panel.ts`

**Interfaces:**
- Consumes: `ELEMENT_INFO`, `elementGlyphDots` (Task 7).
- Produces: `GameRules.glossary?: { kind: GlyphKind; name: string; meaning: string; tag: 'good' | 'bad' | 'tool' }[]`.

- [ ] **Step 1: Read `panel.ts`** to see how the Rules tab renders a `GameRules` (how `how`/`fail` lists become DOM). Note the container element and styling helpers.

- [ ] **Step 2: Implement `rules.ts`** — add `glossary?` to `GameRules`; add the game #8 entry (`name: 'HDT'` (HanDouTai / 半導体 — semiconductor), `status: 'playable'`), with `glossary` built from `ELEMENT_INFO` (import it). Include a `how`/`fail`/`note` describing OFF→ON and the 7/6/≤5 rule.

- [ ] **Step 3: Implement `panel.ts`** — when a rules entry has `glossary`, render a grid: one row per element = a small `<canvas>` (≈40×40, DPR-scaled) that paints `elementGlyphDots(kind, 0.7)` as filled arcs (map each `GlyphDot` to `ctx.arc`, color `col`, alpha `a`), next to `name` + `meaning` + a `tag` chip (good=green, bad=red, tool=amber). Respect `prefers-reduced-motion` (static frame — it already is).

- [ ] **Step 4: Verify (visual)** — open the dev-log Rules tab (however `panel.ts` toggles it) via the headless harness; capture the BREAKER entry. Expected: 8 glyph rows, each glyph legible and matching the in-game element, tag chips correct, no console errors. `npx tsc --noEmit` passes.

- [ ] **Step 5: Commit**

```bash
git add src/devlog/rules.ts src/devlog/panel.ts
git commit -m "Circuit v2: visual node-type glossary in the Rules panel"
```

---

## Task 11: End-to-end verification + deploy

**Files:** none (verification + deploy)

- [ ] **Step 1: Full logic pass** — `node --experimental-strip-types scripts/verify-circuit-duel.ts` → all tasks OK. Add a driven full-match check: choose the `board.better` side, fire good terminals, tick to `tMatch`, assert the outcome is `WON` for a rush of clean terminals and that firing a `FLIP` terminal reduces your count.

- [ ] **Step 2: Full visual pass** — headless Chrome on `/8`: PLAN unpowered → choose side → powered → fire terminals → reach Complete; separately force Deadlock (6–6) and Rejected (≤5). Confirm overlays, glyphs, OFF/ON, enemy theme, ladder HUD. Capture screenshots and eyeball each element type.

- [ ] **Step 3: Build** — `npm run build` passes (tsc + vite).

- [ ] **Step 4: Commit any fixes + push**

```bash
git add -A && git commit -m "Circuit v2: end-to-end verification pass" && git push origin main
```

- [ ] **Step 5: Confirm deploy** — the GitHub Actions workflow builds and publishes to gh-pages; watch it to success (`gh run watch`), then confirm `/8` is live.

---

## Self-review notes

- **Spec coverage:** element vocabulary (Tasks 1,2,7,8), joiner (Task 6,8), OFF/ON (Task 8), 7/6/≤5 + deadlock (Tasks 3,4,8), extend-not-fork with legacy intact (Tasks 1–5 superset + Task 4), keep-identity renderer (Task 8), generation deception + solvability (Task 6), visual glossary (Tasks 7,10), wiring as #8 with ladder (Task 9). All covered.
- **Deferred to execution:** exact glyph dot layouts (Task 7 Step 3) and renderer glyph placement (Task 8 Step 2) are visual-iteration steps, not fixed code — that is intended; they carry a concrete verification (screenshot) rather than an assertion.
- **Naming:** the game key string is `'circuit-duel-2'`; the display name shown to players is decided in Task 10 = **HDT** (HanDouTai / 半導体). Display name HDT; internal game key `circuit-duel-2`.
