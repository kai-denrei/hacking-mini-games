import { makeRng, type RNG } from '../../engine/rng.ts';
import { captureTime, pDetect, canTraverse, type Board, type Owner } from './model.ts';

// TRACE — live REALTIME engine (THREE-free, unit-testable). Capture adjacent
// nodes (each takes time, then a seeded detection roll); a detected roll spawns
// the tracer at a registry. The tracer crawls the shortest cost-path back toward
// ENTRY, re-capturing your nodes; reaching ENTRY is a critical loss. Capture a
// REGISTRY to win. Fortify slows the tracer over a node; NUKE captures silently;
// FREEZE halts the tracer. All randomness comes from the seeded stream, so the
// same seed + input log replays identically (spec §9).

export type Phase = 'PLAN' | 'RUN' | 'WON' | 'LOST_SOFT' | 'LOST_CRIT';

const FORTIFY_MUL = 2.5; // tracer time over a fortified node
const OFF_TERRITORY_MUL = 2; // tracer at half speed through uncaptured nodes
const ALARM_SPEED = 1.25;
const SPAM_SLOW = 0.6;
const SPAM_DUR = 10;
const FREEZE_DUR = 5;

interface Tracer {
  node: number; // current position
  next: number; // node it is advancing onto
  countdown: number; // seconds left to reach `next`
}

export class TraceGame {
  readonly board: Board;
  readonly captureLevel: number;
  phase: Phase = 'PLAN';

  owner: Owner[];
  captured = new Set<number>();
  fortified = new Set<number>();
  capturing: { node: number; elapsed: number; total: number } | null = null;
  tracer: Tracer | null = null;

  nukes: number;
  freezes: number;
  loot = 0;
  trips = 0; // detections triggered (for readout)

  matchElapsed = 0;
  private alarmTriggered = false;
  private spamSlowUntil = -1;
  private freezeUntil = -1;
  private rng: RNG;

  constructor(board: Board, skill = 0) {
    this.board = board;
    this.captureLevel = 1 + skill;
    this.nukes = board.params.nukes;
    this.freezes = board.params.freezes;
    this.owner = board.nodes.map((n) => (n.id === board.entry ? 'P' : 'SYS'));
    this.captured.add(board.entry);
    this.rng = makeRng(`${board.seed}:trace-roll:${board.difficulty}`);
  }

  // ── queries ────────────────────────────────────────────────────────────────
  get over(): boolean {
    return this.phase === 'WON' || this.phase === 'LOST_SOFT' || this.phase === 'LOST_CRIT';
  }
  /** SYS nodes the player may start capturing right now. */
  capturable(): number[] {
    const out: number[] = [];
    for (const n of this.board.nodes) {
      if (this.owner[n.id] === 'P') continue;
      if (this.adjacentToOwned(n.id)) out.push(n.id);
    }
    return out;
  }
  private adjacentToOwned(target: number): boolean {
    for (const u of this.captured) for (const e of this.board.edges) if (canTraverse(e, u, target)) return true;
    return false;
  }

  // ── player verbs ────────────────────────────────────────────────────────────
  beginCapture(node: number): boolean {
    if (this.over || this.capturing) return false;
    if (this.owner[node] === 'P' || !this.adjacentToOwned(node)) return false;
    if (this.phase === 'PLAN') this.phase = 'RUN';
    this.capturing = { node, elapsed: 0, total: captureTime(this.board.nodes[node]!.rating) };
    return true;
  }
  fortify(node: number): boolean {
    if (this.over || this.owner[node] !== 'P' || this.fortified.has(node)) return false;
    if (this.phase === 'PLAN') this.phase = 'RUN';
    this.fortified.add(node);
    // fortifying makes a detection roll at half odds
    const p = pDetect(this.board.nodes[node]!.rating, this.captureLevel) / 2;
    if (this.rng() < p) this.trigger(false);
    return true;
  }
  nuke(node: number): boolean {
    if (this.over || this.nukes <= 0 || this.owner[node] === 'P' || !this.adjacentToOwned(node)) return false;
    if (this.phase === 'PLAN') this.phase = 'RUN';
    this.nukes--;
    this.claim(node, true); // silent, no roll
    return true;
  }
  freeze(): boolean {
    if (this.over || this.freezes <= 0 || !this.tracer) return false;
    this.freezes--;
    this.freezeUntil = this.matchElapsed + FREEZE_DUR;
    return true;
  }
  /** Jack out — soft loss, no critical consequence. */
  cancel(): void {
    if (!this.over) this.phase = 'LOST_SOFT';
  }

  // ── capture resolution ──────────────────────────────────────────────────────
  private claim(node: number, silent: boolean): void {
    this.owner[node] = 'P';
    this.captured.add(node);
    const type = this.board.nodes[node]!.type;
    if (type === 'STORE') this.loot++;
    if (type === 'REGISTRY') {
      this.phase = 'WON';
      return;
    }
    if (silent) return;
    const rating = this.board.nodes[node]!.rating;
    let detected = this.rng() < pDetect(rating, this.captureLevel);
    if (type === 'SPAM') {
      detected = true; // guaranteed detection…
      this.spamSlowUntil = this.matchElapsed + SPAM_DUR; // …but the tracer is slowed
    }
    if (detected) this.trigger(type === 'ALARM');
  }

  /** A detection: spawn the tracer at a registry (once), and note ALARM boosts. */
  private trigger(alarm: boolean): void {
    this.trips++;
    if (alarm) this.alarmTriggered = true;
    if (this.tracer) return; // tracer only spawns once per run
    const start = this.board.registries[0]!;
    this.tracer = { node: start, next: start, countdown: 0 };
    this.planTracerHop();
  }

  // ── tracer pathing (Dijkstra toward ENTRY, preferring captured territory) ────
  private stepCost(v: number): number {
    const base = this.board.params.tracerBase;
    const fort = this.fortified.has(v) ? FORTIFY_MUL : 1;
    const terr = this.captured.has(v) ? 1 : OFF_TERRITORY_MUL;
    return base * fort * terr;
  }
  /** First hop + its cost from `src` toward ENTRY; null if unreachable. */
  private nextHop(src: number): { node: number; cost: number } | null {
    const n = this.board.nodes.length;
    const dist = new Array(n).fill(Infinity);
    const firstHop = new Array(n).fill(-1);
    const done = new Array(n).fill(false);
    dist[src] = 0;
    for (let iter = 0; iter < n; iter++) {
      let u = -1;
      let bd = Infinity;
      for (let i = 0; i < n; i++) if (!done[i] && dist[i] < bd) ((bd = dist[i]), (u = i));
      if (u < 0) break;
      done[u] = true;
      for (const e of this.board.edges) {
        let v = -1;
        if (canTraverse(e, u, e.a === u ? e.b : e.a)) v = e.a === u ? e.b : e.a;
        if (v < 0) continue;
        const nd = dist[u] + this.stepCost(v);
        if (nd < dist[v]) {
          dist[v] = nd;
          firstHop[v] = u === src ? v : firstHop[u];
        }
      }
    }
    const entry = this.board.entry;
    if (!isFinite(dist[entry]) || firstHop[entry] < 0) return null;
    return { node: firstHop[entry], cost: this.stepCost(firstHop[entry]) };
  }
  private planTracerHop(): void {
    if (!this.tracer) return;
    const hop = this.nextHop(this.tracer.node);
    if (!hop) {
      this.tracer.next = this.tracer.node;
      this.tracer.countdown = Infinity; // stuck (shouldn't happen on connected boards)
      return;
    }
    this.tracer.next = hop.node;
    this.tracer.countdown = hop.cost;
  }
  private tracerSpeed(): number {
    if (this.matchElapsed < this.freezeUntil) return 0;
    let s = 1;
    if (this.alarmTriggered) s *= ALARM_SPEED;
    if (this.matchElapsed < this.spamSlowUntil) s *= SPAM_SLOW;
    return s;
  }

  // ── main tick ───────────────────────────────────────────────────────────────
  tick(dt: number): void {
    if (this.phase !== 'RUN') return;
    this.matchElapsed += dt;

    if (this.capturing) {
      this.capturing.elapsed += dt;
      if (this.capturing.elapsed >= this.capturing.total) {
        const node = this.capturing.node;
        this.capturing = null;
        this.claim(node, false);
        if (this.over) return;
      }
    }

    if (this.tracer) {
      const adv = dt * this.tracerSpeed();
      this.tracer.countdown -= adv;
      let guard = 0;
      while (this.tracer && this.tracer.countdown <= 0 && guard++ < this.board.nodes.length + 2) {
        const arrived = this.tracer.next;
        this.tracer.node = arrived;
        if (arrived !== this.board.entry) {
          this.owner[arrived] = 'SYS';
          this.captured.delete(arrived);
          this.fortified.delete(arrived);
        }
        if (arrived === this.board.entry) {
          this.phase = 'LOST_CRIT';
          return;
        }
        const leftover = this.tracer.countdown;
        this.planTracerHop();
        this.tracer.countdown += leftover; // carry the overshoot into the next hop
      }
    }
  }

  // ── readout / result ────────────────────────────────────────────────────────
  /** Tracer distance from ENTRY in hops (∞ → large), for HUD + margin. */
  tracerHopsToEntry(): number {
    if (!this.tracer) return this.board.nodes.length;
    if (this.tracer.node === this.board.entry) return 0;
    const n = this.board.nodes.length;
    const dist = new Array(n).fill(Infinity);
    const q = [this.tracer.node];
    dist[this.tracer.node] = 0;
    while (q.length) {
      const u = q.shift()!;
      for (const e of this.board.edges) {
        const v = e.a === u ? e.b : !e.oneWay && e.b === u ? e.a : -1;
        if (v >= 0 && dist[v] === Infinity) {
          dist[v] = dist[u] + 1;
          q.push(v);
        }
      }
    }
    return isFinite(dist[this.board.entry]) ? dist[this.board.entry] : n;
  }

  result(): { outcome: Phase; margin: number; loot: number; trips: number } {
    const margin = this.tracerHopsToEntry() + this.loot;
    return { outcome: this.phase, margin, loot: this.loot, trips: this.trips };
  }
}
