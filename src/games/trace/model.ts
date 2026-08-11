import type { Difficulty } from '../../engine/session.ts';

// TRACE — node-capture vs. counter-process (Deus Ex / Uplink / Invisible Inc).
// See 02-trace.md. This is the renderer-agnostic model: a directed graph you
// capture across, racing a tracer that spawns on detection and crawls your
// captured territory back toward your entry point.
//
// v1 scope: REALTIME tempo; node types ENTRY / REGISTRY / DIR / STORE / ALARM /
// SPAM; NUKE + FREEZE consumables. Deferred (D4+ flavour): SHUFFLE, fog, exfil.

export type NodeType = 'ENTRY' | 'REGISTRY' | 'DIR' | 'STORE' | 'ALARM' | 'SPAM';
/** Who holds a node: the player, or the system (uncaptured or re-captured). */
export type Owner = 'P' | 'SYS';

export interface TraceNode {
  id: number;
  type: NodeType;
  rating: number; // 1..5 — capture time + detection risk + dot density
  pos: [number, number]; // layout in world units (~[-1,1]) for rendering
}
/** Edge a—b, or one-way a→b when `oneWay`. */
export interface Edge {
  a: number;
  b: number;
  oneWay: boolean;
}

export interface TierParams {
  nodes: number;
  maxRatingCritical: number;
  oneWay: number;
  tracerBase: number; // seconds to re-capture one node
  alarms: number;
  spams: number;
  fog: boolean;
  nukes: number;
  freezes: number;
}

export interface Board {
  seed: string;
  difficulty: Difficulty;
  params: TierParams;
  nodes: TraceNode[];
  edges: Edge[];
  entry: number;
  registries: number[];
  /** the intended solution path entry→registry (low-risk, within rating cap) */
  criticalPath: number[];
  genStats: { attempts: number; pathLen: number; cumulativeDetect: number };
}

export const TIERS: Record<Difficulty, TierParams> = {
  1: { nodes: 8, maxRatingCritical: 2, oneWay: 0, tracerBase: 1.6, alarms: 0, spams: 0, fog: false, nukes: 1, freezes: 1 },
  2: { nodes: 10, maxRatingCritical: 3, oneWay: 0, tracerBase: 1.4, alarms: 0, spams: 1, fog: false, nukes: 1, freezes: 1 },
  3: { nodes: 12, maxRatingCritical: 3, oneWay: 1, tracerBase: 1.2, alarms: 1, spams: 1, fog: false, nukes: 1, freezes: 1 },
  4: { nodes: 14, maxRatingCritical: 4, oneWay: 2, tracerBase: 1.0, alarms: 1, spams: 2, fog: true, nukes: 1, freezes: 2 },
  5: { nodes: 16, maxRatingCritical: 5, oneWay: 3, tracerBase: 0.85, alarms: 2, spams: 2, fog: true, nukes: 1, freezes: 1 },
};

export const WIN_MARGIN_UNIT = 1;

/** Capture takes 0.8 × rating seconds (spec §2). */
export const captureTime = (rating: number): number => 0.8 * rating;

/** Detection probability of a capture: clamp(5% + 12%×(rating − level), 5%, 85%). */
export const pDetect = (rating: number, captureLevel: number): number =>
  Math.max(0.05, Math.min(0.85, 0.05 + 0.12 * (rating - captureLevel)));

/** Can a walker cross `e` from `from` to `to`? Two-way edges go either way. */
export const canTraverse = (e: Edge, from: number, to: number): boolean =>
  (e.a === from && e.b === to) || (!e.oneWay && e.a === to && e.b === from);

/** Nodes reachable in one step from `id` (respecting edge direction). */
export function outNeighbors(edges: readonly Edge[], id: number): number[] {
  const out: number[] = [];
  for (const e of edges) {
    if (e.a === id) out.push(e.b);
    else if (!e.oneWay && e.b === id) out.push(e.a);
  }
  return out;
}
