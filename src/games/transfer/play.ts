import { makeRng, type RNG } from '../../engine/rng.ts';
import { aiSchedule, type Fire } from './simulate.ts';
import { CELLS, layerOf, type Board, type Owner, type OutcomeKind } from './model.ts';
import type { Side } from './layout.ts';

// Live, real-time TRANSFER match (THREE-free). PLAN (pick a side) → RUN (fire
// pulses that travel and resolve, later-claim-wins) → WON/LOST. The batch
// simulate.ts is for the generator's solver; this is the playable version with
// in-flight pulses the renderer can draw.

export type Phase = 'PLAN' | 'RUN' | 'WON' | 'LOST';

export interface LivePulse {
  side: Side; // physical layer the pulse travels on
  owner: 'P' | 'E';
  terminalId: number;
  cell: number;
  kind: OutcomeKind;
  delay: number;
  elapsed: number;
  repeatPeriod: number;
}

interface Gun {
  cell: number;
  period: number;
  nextAt: number;
  owner: 'P' | 'E';
}

export class TransferGame {
  readonly board: Board;
  playerSide: Side | null = null;
  owners: Owner[] = new Array(CELLS).fill('NEUTRAL');
  pBudget: number;
  eBudget: number;
  timeLeft: number;
  matchElapsed = 0;
  pulses: LivePulse[] = [];
  claimFlash = new Float32Array(CELLS);
  phase: Phase = 'PLAN';
  result: { p: number; e: number } | null = null;

  private guns: Gun[] = [];
  private eSchedule: Fire[] = [];
  private eFired: boolean[] = [];
  private aiRng: RNG;

  constructor(board: Board) {
    this.board = board;
    this.pBudget = board.params.pPulses;
    this.eBudget = board.params.ePulses;
    this.timeLeft = board.params.tMatch;
    this.aiRng = makeRng(`${board.seed}:liveai:${board.spec.defender}`);
  }

  enemySide(): Side | null {
    return this.playerSide === 'left' ? 'right' : this.playerSide === 'right' ? 'left' : null;
  }

  chooseSide(side: Side): void {
    if (this.phase !== 'PLAN') return;
    this.playerSide = side;
    const enemy = side === 'left' ? 'right' : 'left';
    this.eSchedule = aiSchedule(this.board.params.ai, layerOf(this.board, enemy), this.eBudget, this.board.params.tMatch, this.aiRng)
      .slice()
      .sort((a, b) => a.t - b.t);
    this.eFired = this.eSchedule.map(() => false);
    this.phase = 'RUN';
  }

  firePlayer(terminalId: number): boolean {
    if (this.phase !== 'RUN' || !this.playerSide || this.pBudget <= 0 || this.timeLeft <= 0) return false;
    this.spawn(this.playerSide, 'P', terminalId);
    this.pBudget--;
    return true;
  }

  private spawn(side: Side, owner: 'P' | 'E', terminalId: number): void {
    const term = layerOf(this.board, side).terminals[terminalId];
    if (!term) return;
    for (const o of term.outcomes) {
      this.pulses.push({
        side,
        owner,
        terminalId,
        cell: o.cell,
        kind: o.kind,
        delay: o.delay,
        elapsed: 0,
        repeatPeriod: o.repeatPeriod ?? 2,
      });
    }
  }

  private resolve(p: LivePulse): void {
    if (p.kind === 'DEAD') return; // absorbed
    if (p.kind === 'CLAIM') this.owners[p.cell] = p.owner;
    else if (p.kind === 'INVERT') {
      const c = this.owners[p.cell]!;
      this.owners[p.cell] = c === 'NEUTRAL' ? p.owner : c === 'P' ? 'E' : 'P';
    } else if (p.kind === 'REPEAT') {
      this.owners[p.cell] = p.owner;
      this.guns.push({ cell: p.cell, period: p.repeatPeriod, nextAt: this.matchElapsed + p.repeatPeriod, owner: p.owner });
    }
    this.claimFlash[p.cell] = 0.35;
  }

  tick(dt: number): void {
    if (this.phase !== 'RUN') return;
    this.matchElapsed += dt;
    this.timeLeft = Math.max(0, this.board.params.tMatch - this.matchElapsed);

    // enemy fires per schedule
    const enemy = this.enemySide();
    if (enemy) {
      for (let i = 0; i < this.eSchedule.length; i++) {
        if (!this.eFired[i] && this.eSchedule[i]!.t <= this.matchElapsed && this.eBudget > 0 && this.timeLeft > 0) {
          this.eFired[i] = true;
          this.spawn(enemy, 'E', this.eSchedule[i]!.terminal);
          this.eBudget--;
        }
      }
    }

    // advance pulses; resolve arrivals
    const still: LivePulse[] = [];
    for (const p of this.pulses) {
      p.elapsed += dt;
      if (p.elapsed >= p.delay) this.resolve(p);
      else still.push(p);
    }
    this.pulses = still;

    // repeat guns re-claim until match end
    for (const g of this.guns) {
      while (this.matchElapsed >= g.nextAt && g.nextAt <= this.board.params.tMatch) {
        this.owners[g.cell] = g.owner;
        this.claimFlash[g.cell] = 0.35;
        g.nextAt += g.period;
      }
    }

    for (let i = 0; i < CELLS; i++) if (this.claimFlash[i]! > 0) this.claimFlash[i] = Math.max(0, this.claimFlash[i]! - dt);

    // end once the clock is out and every in-flight pulse has landed
    if (this.timeLeft <= 0 && this.pulses.length === 0) this.finish();
  }

  private finish(): void {
    let p = 0;
    let e = 0;
    for (const o of this.owners) o === 'P' ? p++ : o === 'E' ? e++ : 0;
    this.result = { p, e };
    this.phase = p > e ? 'WON' : 'LOST'; // majority over the host; a tie (rematch) is a TODO
  }

  counts(): { p: number; e: number; n: number } {
    let p = 0;
    let e = 0;
    let n = 0;
    for (const o of this.owners) o === 'P' ? p++ : o === 'E' ? e++ : n++;
    return { p, e, n };
  }
}
