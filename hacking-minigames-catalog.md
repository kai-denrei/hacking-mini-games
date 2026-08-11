# Hacking Mini-Games: A Historical Catalog & Mechanical Taxonomy

*Step 1 of the dots-based hacking-games project — identify the games, extract the core gameplay.*
*Compiled August 2026.*

---

## How to read this document

Each entry distills a hacking mini-game to its **core loop** (space, inputs, pressure, win/lose, economy), stripped of fiction. Games are grouped by **mechanical archetype** — the thing your hands and brain are actually doing — because that's the unit we'll spec and rebuild, not the game itself. A final section maps archetypes to the dots-based / braille-rasterized look and proposes a build order.

The recurring finding across ~50 games: the "hacking feel" almost never comes from the puzzle itself (which is usually a known abstract puzzle — Mastermind, Pipe Mania, graph capture). It comes from four wrappers around the puzzle:

1. **Asymmetric failure** — normal failure is soft (lose an attempt), but touching the wrong thing (ICE, alarm tile, trace completion) is catastrophic and *diegetic*: bots spawn, the terminal bricks, your gateway is seized.
2. **A pressure source that fights back** — not just a timer, but a visible adversary process: a tracer capturing nodes back toward your entry point, a trace-beep accelerating, a xenomorph hearing your keystrokes.
3. **Competence as legibility** — skill/stats make the puzzle *easier to read* (fewer ICE nodes, de-jumbled text, longer words, shown percentages) rather than auto-solving it.
4. **Diegetic surface** — the screen pretends to be the machine: memory dumps, hex pairs, circuit silk-screen, terminal phosphor.

These four are portable. Any abstract puzzle + these wrappers = a hacking mini-game.

---

## Archetype A — Circuit takeover duels (competitive majority control)

*Two sides fight over shared territory through an irregular circuit. The board is the opponent.*

### Paradroid (1985, C64, Graftgold / Andrew Braybrook) — the ur-text
- **Space:** split-screen circuit board; each side is a lattice of wires feeding a central column of 12 cells, with logic elements between edge terminals and center: splitters (one pulse → several cells), joiners, dead ends, color-changers (invert a cell instead of claiming it), auto-pulsers/repeaters.
- **Inputs:** first, *choose your side* (the two layouts differ in quality — a pre-commit read of the board); then fire a limited stock of power pulses down chosen wires.
- **Pressure:** countdown timer; an opponent spending its own pulses on the same central cells.
- **Key micro-rule:** on a contested cell, the *later* pulse wins — withholding pulses is a timing weapon. This one rule creates the entire endgame ("claim early, contest late").
- **Win/lose:** majority of 12 cells (7–5) wins; 6–6 replays on a fresh board. Win = you *become* the target droid (its speed/weapon/armor); your host decays over time, forcing re-hacks. Lose in a host = revert to weak 001; lose as 001 = death.
- **Economy:** pulse count scales with your current droid's class — a meta-progression loop (each takeover funds the next).
- **Skills:** rapid circuit-graph parsing, resource rationing, timing, target-risk assessment.

### Quazatron (1986, ZX Spectrum, Graftgold / Steve Turner)
Same duel, one brilliant twist: victory *margin* matters. Win → salvage screen where you strip the loser's chassis/drive/power/weapon components, and **a more dominant win yields less-damaged parts**. Clean hacks are mechanically rewarded. (Paradroid 90, 1990, modernizes the original transfer game.)

**Core extractable loop (A):** read an asymmetric two-sided graph fast → allocate K pulses across input wires → time your last pulses to overwrite the opponent → majority of a shared central strip. Ingredients: side-choice, splitter/dead-end/inverter/repeater vocabulary, later-pulse-wins, pulse budget tied to progression.

---

## Archetype B — Path & sequence through a constrained matrix

*Plan a route whose traversal rule keeps tightening. Pure lookahead.*

### Cyberpunk 2077 — Breach Protocol (2020, CD Projekt Red)
- **Space:** 5×5–7×7 grid of hex byte-pairs (55, 1C, BD, E9, 7A, FF).
- **Inputs:** pick bytes into a **buffer** of 4–10 slots; picks alternate axes — first from the current row, then from that pick's column, then row… every choice constrains the next.
- **Goal:** make the buffer contain 1–3 target sequences (daemons), ideally **overlapping** them so one path completes several (the mastery expression).
- **Pressure:** unlimited planning time until the first pick; then a timer. Variants add counter-netrunner trace.
- **Economy:** buffer size = the resource; upgrades buy slots/time.
- **Skills:** lookahead planning, substring-overlap spotting. Near-zero dexterity.

### Alpha Protocol — Hacking (2010, Obsidian)
- **Space:** full-screen grid of churning random alphanumerics; **two static code blocks hide in the noise** (they hold still while everything flickers).
- **Inputs:** two cursors driven *simultaneously* (two sticks / WASD+mouse); place each on its block and lock in; after the first lock, the second block relocates.
- **Pressure:** strict timer; failure = alarm. EMP consumable = skip valve.
- **Skills:** visual search for invariants in noise (a superb "reading the Matrix" metaphor), bimanual coordination.

### GTA V / Online — BruteForce.exe, IP trace, fingerprint cloner (2013–2020, Rockstar)
Column-stop (halt 8 scrolling letter columns on target letters), scrolling-grid visual search (find the octet), fragment assembly (match 4 fingerprint components) — all under clocks that **convert directly into remaining stealth time in the heist**, the best pressure-coupling in the survey.

**Core extractable loop (B):** constrained traversal of a symbol matrix to assemble target sequences with a limited buffer; or find-the-invariant in animated noise. Ingredients: axis-alternation rule, overlap-chaining, planning-then-execution phase split.

---

## Archetype C — Deduction with feedback (Mastermind family)

*Limited probes, each answer shrinks the hypothesis space. The hacker fantasy of the dictionary attack.*

### Fallout 3 / NV / 4 / 76 — RobCo terminal (2008→, Bethesda)
- **Space:** two columns of memory-dump garbage seeded with N same-length candidate words.
- **Inputs:** pick a word → feedback "Likeness = n" (letters correct *in position*). 4 attempts.
- **Hidden sub-game:** matched bracket pairs `(…) [...] {…} <…>` in the garbage can be clicked to remove a dud word or reset attempts — rewarded for "reading the raw dump."
- **Pressure:** attempt budget only; full failure locks the terminal (and can trigger turrets in context).
- **Competence rendering:** skill gates tiers — higher difficulty = longer words *and* more candidates.
- **Skills:** information-maximizing deduction (optimal play picks the word that best splits the candidate set), restraint.

### Star Wars Outlaws — Slicing Kit (2024, Massive): symbol Mastermind with correct/wrong-position feedback.
### Sid Meier's Covert Action — Cryptography (1990, MicroProse): substitution cipher, some letters pre-solved by skill; the decoded plaintext is *actual case intel you read* — output re-enters the game.
### The Journeyman Project (1992): Mastermind bomb-disarm. Vampire: Bloodlines (2004): hacking stat literally **de-jumbles** the on-screen password hint — competence as legibility, purest form.

### Beglitched (2016, Hexecutable) — deduction + board economy
Minesweeper × match-3: scan tools yield positional clues to a hidden enemy's cell; matching tiles charges your tools; deduce, then fire on the right cell with limited moves. "Triangulate the intruder from partial scans" as a complete 2-minute board.

### EVE Online — Data/Relic Analyzer (2013 rework, CCP)
Hex-grid exploration toward a hidden System Core with distance cues (Minesweeper logic); revealed defensive programs trade blows with your virus's Coherence/Strength stats; single-use utility pickups; two total failures destroy the loot permanently — real economic stakes.

**Core extractable loop (C):** K probes against a hidden code/cell; each probe returns structured partial feedback; optional risky side-actions (brackets, scans) buy information or attempts. Ingredients: attempt budget, in-position feedback, hidden bonus interactions in the "noise," lockout on exhaustion.

---

## Archetype D — Node-graph capture vs. a counter-process

*A network diagram where you and an adversary process race for territory. The direct descendant of Paradroid's duel, turned asynchronous.*

### Deus Ex: Human Revolution / Mankind Divided — Capture (2011/2016, Eidos Montréal)
- **Space:** 2D network graph: I/O port (you), directories, API nodes, datastores (loot detours), registry (goal). Nodes have security ratings 1–5.
- **Inputs:** capture adjacent nodes; each attempt rolls a **visible detection chance** (node rating vs. your capture level). Fortify owned nodes (slows the tracer — but fortifying also rolls detection).
- **Pressure:** on detection, a **Diagnostic Subroutine** starts capturing nodes back toward your I/O port, node by node, on visible per-node countdowns — the hack becomes a race you can watch losing.
- **Economy:** consumables = Nuke Virus (guaranteed silent capture), Stop! Worm (freeze tracer ~5s). MD adds API nodes (spam = slow tracer but guaranteed detection; transfer = shuffle ratings), one-way edges, fog-of-war.
- **Skills:** route planning, probability management, greed calibration (datastore detours), speed once traced.

### Midnight Protocol (2021, LuGus) — the same shape, turn-based and keyboard-only
Typed commands, action budget per turn, deckbuilt program loadout, trace meter rising with noisy actions, honeypots and countermeasure nodes. Proof the archetype survives full de-realtime-ification.

### Shadowrun (1994, Genesis, BlueSky) — the maximalist ancestor
Node types (CPU, datastores, slave modules controlling *physical-world* cameras/maglocks/turrets), 9 ICE types including Trace&Burn (a **visible probe crawling across the screen** = literal trace bar), alert escalation states, program loadout limited by deck memory. Hacks alter the meat-space level — cross-layer payoff.

### Hackers (2016, Trickster Arts, mobile): async PvP — build your own defensive node graph, raid others' with cooldown-limited program units racing a reconstruction timer.
### Invisible, Inc. — Incognita (2015, Klei): the economy-only distillate — devices have firewall costs, you have PWR income per turn, daemons are trapped nodes, the alarm clock escalates globally. No dexterity at all; pure priority/tempo under a rising clock.
### System Shock 2 (1999, Irrational): grid of nodes, some ICE; each click a visible probability roll; three-in-a-row wins; ICE crit-fail breaks the device/explodes the crate. Hacking as gambling against a security lattice; stats remove ICE nodes and improve odds.

**Core extractable loop (D):** claim nodes on a graph toward a goal while a visible adversary process claims them back; every action trades speed against noise. Ingredients: detection-probability rolls, tracer with per-node countdown, fortify/slow actions, loot detours, consumable exploits, cross-layer rewards.

---

## Archetype E — Flow routing & rewiring (Pipe Mania family)

*Route a flow from source to sink through a tile/junction space; hazards are wired into the board.*

### BioShock (2007, Irrational)
- **Space:** grid of hidden tiles revealed by clicking; drag-swap straight/elbow pipe tiles.
- **Pressure:** the fluid **starts flowing and cannot be stopped** — an advancing irreversible front. Speed it/slow it with accelerator/resistor tiles.
- **Asymmetric hazards:** Alarm tiles (summon security bots), Overload tiles (instant fail + shock damage), immovable blocks.
- **Outs:** auto-hack consumable, cash buyout, walk away — a three-way price menu for the same lock.
- **Rewards are systemic:** turrets flip sides, vending prices drop — hacking changes the world-state, not just the door.

### Watch Dogs 1/2/Legion (2014–2020, Ubisoft) — the puzzle leaves the screen
Rotate junction nodes to route flow; in WD2 the junctions **float in world-space across a whole building** — you physically relocate, camera-hop, and fly drones just to *see* the board. Timed valves revert, forcing solve-order. The city is the circuit board.

### Sid Meier's Covert Action — Electronics (1990): rearrange junction chips so current reaches the tap line *without* touching alarm chips — route-the-signal-dodge-the-IDS in 1990.
### Saints Row IV (2013), Star Trek: Elite Force II (2003), Batman: Vengeance (2001, nodes across a 3D cube), LAN Master / NetWalk lineage: rotate-to-connect variants.
### Marvel's Spider-Man (2018, Insomniac): flow routing with **values** — pieces add/subtract voltage; you must hit an exact target number, not just connect. Plus a waveform variant: sum 2–3 adjustable waves to match a target silhouette.
### System Shock remake (2023, Nightdive): junction-box rewiring between pin columns to satisfy target lamps — untimed logic variant.

**Core extractable loop (E):** connect source→sink through rotatable/swappable elements before an irreversible front arrives; hazard elements are part of the board. Ingredients: hidden-until-probed tiles, advancing flow, alarm-vs-overload asymmetric hazards, exact-value variant, board-embedded-in-3D-space variant.

---

## Archetype F — Timing, rhythm & signal locks

*The lock is a moving process; you synchronize with it. Tactile, not cognitive.*

### Splinter Cell: Chaos Theory (2005, Ubisoft) — the smartest of the family
Four columns of cycling values; an auto-cracker progressively **freezes** candidates; you may confirm frozen values early to accelerate — but confirming a still-cycling value resets the column and burns one of two warning lights. Watching a brute-forcer converge and *gambling on partial results*.

### BioShock 2 (2010): needle sweeps a gauge, hit green (safe) or narrow blue (bonus) zones across stages — **unpaused, mid-combat**.
### GTFO (2021, 10 Chambers): sweep-click, 3 stages, shrinking zones; a miss makes *noise that can wake the sleeping horrors around you* — failure externalized into the horror layer.
### Warframe (2013→, DE): a per-faction suite — rotate hex tiles (Corpus, with a mid-puzzle "INTRUSION DETECTED" timer-doubling), pin a rotating selector that accelerates and reverses (Grineer), mirrored-cursor dot-clicking (Narmer), concentric-ring timing (Duviri), literal Snake (Höllvania).
### Star Wars Outlaws — Data Spike (2024): reproduce a looping beat pattern, rounds add beats; fully audio-playable.
### Batman: Arkham Asylum/City — Cryptographic Sequencer (2009/2011): two dials, bimanual gradient-following into a sweet spot, hold steady while a bar fills. Alien: Isolation — Access Tuner (2014): tune to a band, then timed glyph matching, while the xenomorph pressure is *entirely outside the interface*. Prey (2017, Arkane): fling a momentum-carrying signal dot through a 2D circuit maze past moving interference, several target nodes per hack, one clock — dexterity variant sitting between F and E.

**Core extractable loop (F):** synchronize discrete inputs with a periodic process whose parameters (speed, direction, zone size) escalate per stage. Ingredients: freeze-early gamble, unpaused-in-danger framing, noise-on-miss, audio-first playability.

---

## Archetype G — Terminal & procedure sims (the diegetic screen)

*The screen pretends to be the computer. The puzzle is knowing and executing the procedure.*

### Uplink (2001, Introversion) — the canonical trace race
Bounce chain through owned servers → connect → run tools (crack speed scales with purchased CPU) → do the job → **disconnect before the accelerating trace-beep completes** → then the second, slower game: delete your logs at the first bounce node before the passive trace reads them days later. One forgotten log = gateway seized, save deleted. Tension is almost entirely *audio-temporal*.

### Hacknet (2015, Team Fractal Alligator)
`scan → probe → run port-crackers within a RAM budget → porthack → cd/ls/cat/scp → rm logs`, under an active trace on secured nodes. RAM forces which crackers run concurrently — a knapsack inside a countdown.

### System 15000 (1984) — the first hacking game: pure information-chaining through dialed systems; every system yields the numbers/codes for the next.
### Hacker (1985, Activision): boots to a bare `LOGON PLEASE:` with **no instructions**; later, random security audits quiz you on facts you were shown — 4 misses = disconnect. The system interrogates *you*.
### Hacker II (1986): pre-record a security-camera feed, splice it over live — but the timestamp must match. Camera-loop spoofing, 1986.
### Enter the Matrix (2003): a bootable fake DOS (`A:/>` DIR, CHEAT.EXE) explored with zero documentation. Mu Complex (2015), Hack RUN (2013), Telehack (2011, live ARPANET sim with wardialing and worms): the browser/mobile distillates — read files, deduce credentials, log deeper.
### Duskers (2016, Misfits Attic): command-line piloting of drones through derelicts via noisy CCTV; doors as logic gates to isolate an unseen threat; modules degrade. Remote operation through a failing interface.
### NITE Team 4 (2019, Alice & Smith): the real-methodology chain — fuzz subdomains, fingerprint, match exploit DB, build password wordlists from OSINT'd personal data (some answers live on the actual internet).
### Mainlining (2017), Code 7 (2017): investigation/overwatch variants — cross-reference leaks to derive credentials; be the voice on comms unlocking doors for a partner.

**Core extractable loop (G):** execute a known multi-step procedure (recon → access → act → clean up) through a terminal, under a trace clock, with resource constraints (RAM/CPU/bounce length). The log-cleanup second act is the signature move. Ingredients: real-looking commands, accelerating trace audio, log hygiene, procedure-order gating.

---

## Archetype H — Programming & rewiring as play

*You write the exploit, or you rewire the world's causality.*

### EXAPUNKS (2018, Zachtronics) — the purest atom
Write assembly for agents (EXAs) that crawl a network of hosts (`LINK` to traverse, `COPY/GRAB/FILE`, `M` register for messaging), run in parallel, collide and deadlock. Each puzzle: move/alter specific data across the topology. Scored on cycles/size/agents against player histograms. (Siblings: TIS-100, SHENZHEN I/O.)

### Gunpoint — Crosslink (2013, Tom Francis)
The level becomes a wiring diagram; **drag any trigger to any effect** on the same circuit (light switch → trapdoor; guard's motion sensor → the door he guards). Then you must physically live inside the causality you rewired. Turning the building's own infrastructure against its owners.

### Quadrilateral Cowboy (2016, Blendo): type `door1.open(3); wait(2); laser2.off(3)` — any device disabled >3s trips the alarm, so you script timed windows and then parkour through your own schedule.
### else Heart.Break() (2015): every object in the city exposes editable source (Sprak); minimal-edit exploits ("make the door's lock check Slack()").
### hackmud (2016): crack parameterized NPC locks by iterating arguments against error feedback, then write real JavaScript to automate — and audit other *humans'* scripts for scams. Bitburner (2021): JS botnet against RAM budgets; embedded coding-contract algorithm puzzles. Screeps (2016): CPU-per-tick as the hard constraint. Grey Hack (2017): full kill-chain with in-game IDE and log-scrubbing.
### Darwinia (2005, Introversion): programs summoned by drawn gestures; sysadmin-as-god RTS. TRON 2.0 (2003): your loadout lives in a **memory map** — subroutines are Tetris-packed into limited slots, get virus-fragmented, and upgrade alpha→gold with smaller footprints. Inventory screen as defrag.

**Core extractable loop (H):** author a small program/rewiring whose *execution* is the solution; the machine runs it visibly and failure is debugging. Ingredients: tiny instruction set, parallel agents, self-scheduled timing windows, optimization histograms.

---

## Archetype I — Embodied cyberspace (for completeness)

Hacking rendered as *being inside* the machine: System Shock 1 (1994) 6-DOF wireframe flight under per-jack countdowns, cyberspace damage bleeding into your body; Neuromancer (1988) ICE combat with versioned software as weapons; NieR: Automata (2017) hacking-as-twin-stick-bullet-hell; DXMD Breach mode; Mega Man Battle Network (2001) jack-in grid battles with a chip deck. Usually too big for a mini-game, but the *aesthetic* (wireframe interiors, ICE walls) is raidable — and one entry belongs squarely in our project:

### Half-Life: Alyx — Multitool sphere puzzle (2020, Valve)
A **ball of scattered 3D points**; you physically move your head/hand until, from exactly one viewing angle, the scattered points align into a legible shape; then trace/select the correct nodes. **This is already a point-cloud hacking puzzle** — parallax-as-mechanic — and it ports naturally from VR to a rotatable 3D dot cloud on screen.

---

## Boundary cases worth remembering

- **Deus Ex (2000):** no minigame at all — real passwords learned from datacubes and emails substitute entirely for the skill check. Hacking as *knowledge*. A design pole worth keeping in view for the integrated game (step 4): some doors should open because the player read something three rooms ago.
- **KOTOR (2003) / The Outer Worlds:** pure resource/skill gates, zero execution. The "no-minigame" pole.
- **Starfield — Digipick (2023):** rings with slot gaps + a hand of one-use pronged keys, some decoys; committing a valid-looking key to the wrong ring can deadlock the puzzle. Near-pure constraint satisfaction — a lockpick fiction, but mechanically one of the best planning puzzles in the survey.
- **Impossible Mission (1984):** password fragments as physical jigsaw pieces (rotate/flip/overlay) — code-assembly-as-spatial-puzzle.
- **Observer (2017):** strong hacking fiction, almost no hacking mechanics — a caution: aesthetic alone doesn't make the puzzle.

---

## Cross-cutting design ingredients (the reusable parts bin)

**Pressure sources**, roughly ordered by how "diegetic" they feel:
external world threat (Alien: Isolation's xenomorph, GTFO's sleepers) > visible adversary process (DXHR tracer, Shadowrun's crawling probe, Paradroid's opponent) > accelerating audio trace (Uplink's beep) > stealth-time conversion (GTA Online: hack speed = vault seconds) > plain countdown (most others) > attempt budget, untimed (Fallout, Starfield).

**Failure asymmetry:** soft-fail (lose attempt/time) vs. crit-fail on marked hazards (ICE, alarm tiles, red zones) with diegetic consequences. Nearly every beloved entry has both channels.

**Competence rendering** (stats should change perception, not skip play): fewer ICE nodes (SS2), de-jumbled text (Bloodlines), shown probabilities (DXHR Analyze), longer timer, removed dud words (Fallout perk), extra buffer (Cyberpunk).

**Consumable skip valves:** near-universal — auto-hack darts, Ciphers, Nuke Viruses, EMPs, omni-gel, digipicks. A price menu for the same lock respects different players.

**The second act:** the best procedure games make you *clean up* (Uplink/Hacknet/Grey Hack log-scrubbing). Winning the intrusion isn't winning; leaving no trace is.

**Meta-hooks:** win = become/absorb the target (Paradroid/Quazatron); margin-scaled loot (Quazatron); hacks alter the physical level (Shadowrun slave nodes, BioShock turrets); output of the puzzle is intel you actually read (Covert Action crypto).

---

## Fit with the dots-based aesthetic (3D dotted-halftone point clouds; braille dot-matrix rasterizer)

The rendering constraints favor archetypes whose state is **discrete, sparse, and topological** (nodes, cells, pulses) and disfavor those needing dense text or fine continuous motion.

**Excellent fit**
- **A (Paradroid duel):** wires-as-dot-strings, pulses as bright dots traveling; the central 12-cell strip is a perfect braille-legible scoreboard. Splitters/inverters read as dot-cluster glyphs. Flagship candidate.
- **D (node capture vs. tracer):** a graph *is* a point cloud; captured territory = dot density/brightness; the tracer is a wavefront of dots flowing back toward your port. Trivially extended to 3D layered networks (rotate the cloud to see occluded subnets — which imports Alyx's parallax mechanic for free).
- **I/Alyx sphere puzzle:** literally already a point-cloud mechanic; the halftone renderer is the native medium.
- **E (flow routing):** flow-front as advancing dot wave; halftone density shows fill; hazard tiles as distinct dot glyphs. The WD2 move (board embedded in a 3D scene) suits a rotatable cloud.
- **F (timing locks):** sweeping needle = a dot orbiting a dotted ring; zones as arc densities. Braille output works well (coarse, high-contrast, rhythmic); pairs naturally with audio.

**Good fit with adaptation**
- **C (Mastermind):** words become symbol-glyph sequences (dot-matrix glyphs rather than English words — also solves localization); Likeness feedback as lit dot counts. Beglitched's scan-triangulation variant is even more dots-native (a hidden cell in a dot field, probes lighting distance halos).
- **B (Breach Protocol):** byte-pairs become 2×3 braille glyphs — the code matrix rendered *in actual braille cells* is thematically perfect; buffer as a strip of empty cells filling up.

**Harder fit**
- **G (terminal sims):** text-heavy; but a braille-rasterized terminal is an interesting perversion of the form, and the *structure* (procedure + trace + log cleanup) can be re-skinned onto graph/dot interfaces.
- **H (programming):** needs an editor; better as the eventual integration layer (step 4) than as a dot-rendered mini-game — though Gunpoint's Crosslink (drag causal wires between device-dots) is fully dots-compatible and belongs in the excellent-fit list when reduced to its rewiring screen.

---

## Proposed build order for step 2 (specs)

1. **Paradroid transfer duel** (A) — the historical root, self-contained, adversarial, and the best match for traveling-dot rendering. Spec should nail: board generation with guaranteed side-asymmetry, the later-pulse-wins rule, element vocabulary, AI pulse policy.
2. **Node capture vs. tracer** (D, DXHR/Midnight Protocol hybrid) — the modern classic; works turn-based (calm) or real-time (tense) from the same spec.
3. **Breach Protocol matrix** (B) — small state space, deep planning, braille-native presentation.
4. **Terminal word/glyph deduction** (C, Fallout-style with bracket sub-game) — cheapest to build, instantly legible.
5. **Flow routing with irreversible front** (E, BioShock × Covert Action: alarm-vs-overload hazards + dodge-the-alarm-chip routing).
6. **Alyx-style parallax point cloud** (I) — the aesthetic showpiece; mouse-orbit replaces head movement.
7. **Timing lock suite** (F, Chaos Theory freeze-gamble as the smart core) — small, good "filler" hack for the integrated game.
8. **Crosslink rewiring** (H-lite) — causal-graph puzzle as a bridge toward the bigger integration.

Each spec (step 2) should cover: state model, generation/difficulty parameters, input mapping, pressure/failure channels, competence hooks (what a "skill stat" modifies), consumable valve, win/lose consequences, and rendering notes for the dot pipeline.

---

## Appendix — full game index by year

1984 System 15000 · Impossible Mission | 1985 Paradroid · Hacker | 1986 Quazatron · Hacker II | 1988 Neuromancer | 1990 Covert Action · Paradroid 90 | 1992 The Journeyman Project | 1994 System Shock · Shadowrun (Genesis) | 1999 System Shock 2 | 2000 Deus Ex | 2001 Uplink · Anachronox · MMBN · Project Eden · Batman: Vengeance | 2003 TRON 2.0 · Enter the Matrix · KOTOR · Elite Force II | 2004 VtM: Bloodlines | 2005 Splinter Cell: Chaos Theory · Darwinia · Batman Begins · X3 | 2007 BioShock · Mass Effect | 2008 Fallout 3 · Iji | 2009 Batman: Arkham Asylum | 2010 Alpha Protocol · Mass Effect 2 · BioShock 2 | 2011 Deus Ex: HR · Arkham City · Telehack | 2013 GTA V · Gunpoint · Saints Row IV · Warframe · Hack RUN · Crysis 3 | 2014 Watch Dogs · Alien: Isolation | 2015 Hacknet · else Heart.Break() · Invisible Inc. · Fallout 4 · TIS-100 · Mu Complex | 2016 DXMD · Watch Dogs 2 · Quadrilateral Cowboy · Duskers · hackmud · Beglitched · Hackers · Screeps · SHENZHEN I/O | 2017 Prey · NieR: Automata · Mainlining · Code 7 · Grey Hack · Observer | 2018 EXAPUNKS · Spider-Man | 2019 NITE Team 4 · Hypnospace Outlaw | 2020 Cyberpunk 2077 · HL: Alyx · Watch Dogs: Legion | 2021 GTFO · Midnight Protocol · Bitburner | 2023 Starfield · System Shock remake | 2024 Star Wars Outlaws | 2013→ EVE Online hacking (2013 rework)

*Primary sources: c64-wiki.com, fandom wikis (shodan, deusex, bioshock, fallout, arkhamcity, gta, warframe, alienisolation), strategywiki.org, TV Tropes "Hacking Minigame" index, Wikipedia, MobyGames, zachtronics.com, eveuniversity.org, developer/designer interviews (Slashdot BioShock hacking story, Gamedeveloper.com EXAPUNKS & else Heart.Break features, pentadact.com on Crosslink).*
