# TRACE — node capture vs. counter-process

*Lineage: Deus Ex: Human Revolution/Mankind Divided capture, Midnight Protocol, Shadowrun (1994), Invisible Inc. See 00-shared-conventions.md.*

## Fantasy
You breach a network at an I/O port and race to capture a path to the registry before the system's diagnostic subroutine traces the intrusion back to your entry point.

## 1. Graph model

- Directed graph, 8–16 nodes, planar-ish layout (edges must not visually cross more than once per board).
- Node types:
  | Type | Count | Role |
  |---|---|---|
  | ENTRY | 1 | player start; if the tracer captures it → critical loss |
  | REGISTRY | 1–2 | goal; capture any one → win (after optional exfil rule §5) |
  | DIR | rest | plain stepping stones, rating 1–5 |
  | STORE | 1–3 | loot (off the critical path); rating 2–5 |
  | SPAM | 0–2 | capturing slows tracer 40% for 10 s, but detection guaranteed |
  | SHUFFLE | 0–1 | capturing re-rolls all uncaptured node ratings |
  | ALARM | 0–2 | hazard: failed roll here = instant detection + tracer speed ×1.25 |
- Edges may be one-way (D3+). Player captures only nodes adjacent to owned territory.

## 2. Core mechanics

**Capture:** select adjacent node → capture takes `0.8 × rating` s → then a **detection roll**: `p_detect = clamp(5% + 12%×(rating − capture_level), 5%, 85%)`. `capture_level = 1 + SKILL`. Detected → tracer activates (once per run).

**Fortify:** on an owned node, `COMMIT` fortifies it (tracer needs ×2.5 time there). Fortifying also makes a detection roll at `p_detect/2`. Fortify is the plan-ahead verb; nuking is the panic verb.

**Tracer:** spawns at REGISTRY on detection. Moves along the shortest path over *captured* nodes toward ENTRY, re-capturing each node on a **visible per-node countdown** (`1.1 s × (1 + fortify)` base, modified by difficulty). If the player's captured territory is disconnected from the tracer, it pathfinds through uncaptured nodes at half speed. Reaching ENTRY = critical loss.

**Consumables** (config-provided counts, default 1+1): `NUKE` = instant silent capture of one node (no roll). `FREEZE` = tracer halts 5 s. `OVERRIDE` (conventions §2) behaves as NUKE.

## 3. Two tempo modes, one spec

- **REALTIME:** as above; captures run on wall-clock, tracer races.
- **TURNS:** each player action (capture attempt, fortify, item) = 1 turn; on detection the tracer re-captures 1 node per player turn (2 per turn at D4+). All probabilities identical. The mode flag changes pacing only, never balance math.

## 4. Difficulty envelope

| Param | D1 | D2 | D3 | D4 | D5 |
|---|---|---|---|---|---|
| Nodes | 8 | 10 | 12 | 14 | 16 |
| Max rating on critical path | 2 | 3 | 3 | 4 | 5 |
| One-way edges | 0 | 0 | 1–2 | 2–3 | 3–4 |
| Tracer node-recapture base (s) | 1.6 | 1.4 | 1.2 | 1.0 | 0.85 |
| ALARM nodes | 0 | 0 | 1 | 1 | 2 |
| Fog (§6) | off | off | off | on | on |

SKILL effects: capture_level = 1+SKILL (lowers all detection odds); SKILL≥1 shows exact `p_detect` per node (else vague low/med/high glyph); SKILL≥2 shows tracer's intended path preview once active; SKILL≥3 +1 FREEZE; SKILL 4: first detection roll of the run auto-succeeds silently.

## 5. Win / lose / scoring

- Win: capture a REGISTRY. Optional exfil rule (D4+ flag): after registry capture you must also re-select ENTRY ("disconnect") while the tracer still runs — the Uplink second act.
- Soft loss: player may `CANCEL` (jack out) any time before the tracer reaches ENTRY → keep nothing, no critical consequence.
- Critical loss: tracer reaches ENTRY.
- `margin` = (uncaptured tracer distance from ENTRY in nodes) + (STOREs looted). Report loot separately: STORE captures grant meta-currency; they are the greed dial that makes optimal play non-obvious.

## 6. Fog (D4+)

Nodes beyond 2 edges from owned territory show position but hide type/rating until adjacent. SPAM/SHUFFLE/ALARM identities hidden until revealed. (Imports MD's fog; rewards scouting captures.)

## 7. Generation (solution-first, seeded)

1. Build a path ENTRY→REGISTRY of length 4–7 with ratings within tier cap; verify expected-detection along it < 85% cumulative for SKILL 0.
2. Attach branches; place STOREs 1–2 edges off-path; place SPAM/SHUFFLE/ALARM on branch junctions (so hazards guard shortcuts and loot, never the only path).
3. Solver: (a) silent-perfect run must reach REGISTRY before any forced detection; (b) a greedy shortest-path run at D3+ must have >60% chance of triggering the tracer with <50% chance of outrunning it — the fortify/consumable/detour toolbox must matter.

## 8. Rendering notes (dots)

- Nodes: dot clusters, density = rating (a rating-5 node visibly *heavier*). Types by silhouette: REGISTRY = concentric ring, STORE = diamond, ALARM = static X-hazard, SPAM/SHUFFLE = distinct 3×5 glyphs.
- Territory: owned nodes at 90% density with steady phase; enemy recaptures decay to 2 Hz blink. Capture-in-progress = clockwise dot-fill around the node.
- Tracer: a bright wavefront packet crawling the edges — the Shadowrun visible probe. Its per-node countdown = shrinking dotted ring. Audio: tracer tick accelerates as it nears ENTRY (Uplink beep).
- 3D option: layered subnets in depth; `ORBIT` to see occluded edges (imports CONSTELLATION's parallax read into this game at zero mechanical cost).
- Braille: graph laid on a grid; edges = dot runs; the tracer is a raised-dot runner; p_detect shown as 1–4 raised dots beside cursor node.

## 9. Acceptance tests

- Same seed + input log → identical outcome incl. all rolls (rolls come from the seeded RNG stream).
- Tracer prefers captured-node paths; goes half-speed off-territory; recomputes on FREEZE end.
- Fortify multiplies tracer time before tracer arrival only (fortifying under recapture does nothing).
- TURNS and REALTIME modes produce identical detection math for the same action sequence.
- Exfil rule: registry captured + tracer reaches ENTRY before disconnect = critical loss (not win).
