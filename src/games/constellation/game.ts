import type { Board } from './generate.ts';

// CONSTELLATION Phase 2 — extraction rules (THREE-free, unit-testable).
//
// Loop: while aligned to a lock, SELECT its signal points to extract them. Pick
// all K → lock done; all locks → WON. A TRIP costs a strike + 10% of the timer
// (3 strikes = critical). NOISE is a dud (small time cost). A scan wavefront
// sweeps every T_sweep; a pass that lands while you're mid-extraction AND
// misaligned wipes one extracted point back (spec §2, §3, §5).

export type Phase = 'PLAN' | 'RUN' | 'WON' | 'LOST_SOFT' | 'LOST_CRIT';
export type SelectOutcome = 'extract' | 'lockDone' | 'won' | 'trip' | 'dud' | 'ignored';

const DUD_COST = 1.0; // seconds
const TRIP_TIME_FRAC = 0.1; // 10% of T_run per trip

export class ConstellationGame {
  readonly board: Board;
  readonly tRun: number;
  readonly tSweep: number | null;
  readonly drift: boolean;
  readonly maxTrips = 3;

  phase: Phase = 'PLAN';
  timeLeft: number;
  trips = 0;
  sweepT = 0; // 0..1 progress of the current sweep
  sweepCount = 0;
  readonly extracted: Set<number>[]; // per lock: global point indices

  constructor(board: Board) {
    this.board = board;
    this.tRun = board.params.tRun;
    this.tSweep = board.params.tSweep;
    this.drift = board.params.drift;
    this.timeLeft = this.tRun;
    this.extracted = board.locks.map(() => new Set<number>());
  }

  lockDone(l: number): boolean {
    return this.extracted[l]!.size >= this.board.locks[l]!.signalCount;
  }
  allDone(): boolean {
    return this.board.locks.every((_, l) => this.lockDone(l));
  }
  extractedCount(l: number): number {
    return this.extracted[l]!.size;
  }
  get over(): boolean {
    return this.phase === 'WON' || this.phase === 'LOST_SOFT' || this.phase === 'LOST_CRIT';
  }

  /** Player selected the point at `index` while aligned to `focusLock`. */
  select(index: number, focusLock: number): SelectOutcome {
    if (this.over || focusLock < 0) return 'ignored';
    const pt = this.board.points[index];
    if (!pt) return 'ignored';
    if (this.phase === 'PLAN') this.phase = 'RUN'; // first committed input starts the clock

    if (pt.pop === 'SIGNAL' && pt.lock === focusLock) {
      const set = this.extracted[focusLock]!;
      if (set.has(index)) return 'ignored';
      set.add(index);
      if (this.lockDone(focusLock)) {
        if (this.allDone()) {
          this.phase = 'WON';
          return 'won';
        }
        return 'lockDone';
      }
      return 'extract';
    }

    if (pt.pop === 'TRIP') {
      this.trips += 1;
      this.timeLeft = Math.max(0, this.timeLeft - TRIP_TIME_FRAC * this.tRun);
      if (this.trips >= this.maxTrips) this.phase = 'LOST_CRIT';
      else if (this.timeLeft <= 0) this.phase = 'LOST_SOFT';
      return 'trip';
    }

    // NOISE, or a signal point of some other (unaligned) lock → dud
    this.timeLeft = Math.max(0, this.timeLeft - DUD_COST);
    if (this.timeLeft <= 0) this.phase = 'LOST_SOFT';
    return 'dud';
  }

  /** Advance timers. Returns whether a sweep pass completed this tick. */
  tick(dt: number, aligned: boolean, focusLock: number): { wrapped: boolean } {
    if (this.phase !== 'RUN') return { wrapped: false };
    this.timeLeft -= dt;
    if (this.timeLeft <= 0) {
      this.timeLeft = 0;
      this.phase = 'LOST_SOFT';
      return { wrapped: false };
    }
    if (!this.tSweep) return { wrapped: false };

    this.sweepT += dt / this.tSweep;
    if (this.sweepT < 1) return { wrapped: false };
    this.sweepT -= 1;
    this.sweepCount += 1;

    // a pass that lands mid-extraction while misaligned wipes one point back
    const mid = focusLock >= 0 && this.extracted[focusLock]!.size > 0 && !this.lockDone(focusLock);
    if (mid && !aligned) {
      const set = this.extracted[focusLock]!;
      const first = set.values().next().value;
      if (first !== undefined) set.delete(first);
    }
    return { wrapped: true };
  }

  result(): { outcome: Phase; margin: number; timeUsed: number; trips: number; keys: string[] } {
    const keys = this.board.locks.filter((_, l) => this.lockDone(l)).map((lk) => lk.glyph);
    const margin = Math.max(0, this.timeLeft) + (this.maxTrips - this.trips);
    return { outcome: this.phase, margin, timeUsed: this.tRun - this.timeLeft, trips: this.trips, keys };
  }
}
