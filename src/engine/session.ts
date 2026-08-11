// The session contract every mini-game implements (conventions §3 + §4).
// Renderer-agnostic: this is the spine the Three.js layer and the solver sit
// around.

export type Phase = 'PLAN' | 'RUN' | 'WON' | 'LOST_SOFT' | 'LOST_CRIT';

export type Difficulty = 1 | 2 | 3 | 4 | 5;
export type Skill = 0 | 1 | 2 | 3 | 4;

/** Abstract input events (§4): max one pointer + 2 buttons, or 4-way + 2. */
export type InputEvent =
  | { type: 'MOVE'; dir: 'UP' | 'DOWN' | 'LEFT' | 'RIGHT' }
  | { type: 'SELECT' }
  | { type: 'CANCEL' }
  | { type: 'COMMIT' }
  | { type: 'ORBIT'; dx: number; dy: number }
  | { type: 'OVERRIDE' };

export interface GameStateView {
  phase: Phase;
  score: number;
  detail?: Record<string, unknown>;
}

export interface GameResult {
  outcome: Phase;
  /** How decisively you won (the Quazatron rule) — meta may scale rewards. */
  margin: number;
  timeUsed: number;
  resourcesUsed: number;
  hazardsTripped: number;
}

export interface GameConfig {
  difficulty: Difficulty;
  skill: Skill;
  /** Optional consumable valve (conventions §2). */
  overrides?: number;
  [key: string]: unknown;
}

export interface MiniGame {
  init(config: GameConfig, seed: string): void;
  tick(dt: number): void;
  input(event: InputEvent): void;
  state(): GameStateView;
  result(): GameResult;
}
