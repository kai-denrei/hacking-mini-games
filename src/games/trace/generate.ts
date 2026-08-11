import type { Difficulty } from '../../engine/session.ts';
import { makeRng, randInt, randRange, type RNG } from '../../engine/rng.ts';
import { TIERS, pDetect, canTraverse, type Board, type Edge, type NodeType, type TraceNode } from './model.ts';

// Solution-first, seeded generation (spec §7): lay a low-risk critical path
// ENTRY→REGISTRY within the tier's rating cap, attach branches with STORE loot
// and ALARM/SPAM hazards on junctions (never on the only path), then verify the
// path is forward-reachable and its cumulative detection stays under 85% at
// SKILL 0. The full greedy-run solver (§7.3b) is a follow-up; v1 guarantees a
// well-formed, winnable board.

const lerp = (a: number, b: number, t: number): number => a + (b - a) * t;
const clamp = (v: number, lo: number, hi: number): number => Math.max(lo, Math.min(hi, v));

const GEN = { maxAttempts: 100, pathMin: 4, pathMax: 7, cumDetectMax: 0.85 };

/** Bias path ratings low so the intended route is genuinely the safe one. */
function pathRating(rng: RNG, cap: number): number {
  const r = randInt(rng, 1, cap);
  return rng() < 0.5 ? Math.min(r, randInt(rng, 1, cap)) : r; // take the lower of two half the time
}

function forwardReachable(edges: readonly Edge[], from: number, to: number, n: number): boolean {
  const seen = new Array(n).fill(false);
  const stack = [from];
  seen[from] = true;
  while (stack.length) {
    const u = stack.pop()!;
    if (u === to) return true;
    for (const e of edges) {
      let v = -1;
      if (e.a === u) v = e.b;
      else if (!e.oneWay && e.b === u) v = e.a;
      if (v >= 0 && !seen[v]) {
        seen[v] = true;
        stack.push(v);
      }
    }
  }
  return false;
}

function tryBuild(difficulty: Difficulty, seed: string, attempt: number): Board | null {
  const params = TIERS[difficulty];
  const rng = makeRng(`${seed}:trace:${difficulty}:${attempt}`);
  const L = Math.min(randInt(rng, GEN.pathMin, GEN.pathMax), params.nodes - 1);

  const nodes: TraceNode[] = [];
  const edges: Edge[] = [];
  const path: number[] = [];

  for (let i = 0; i < L; i++) {
    const type: NodeType = i === 0 ? 'ENTRY' : i === L - 1 ? 'REGISTRY' : 'DIR';
    const rating = type === 'ENTRY' ? 1 : type === 'REGISTRY' ? randInt(rng, 1, Math.min(3, params.maxRatingCritical)) : pathRating(rng, params.maxRatingCritical);
    const x = lerp(-0.85, 0.85, L === 1 ? 0.5 : i / (L - 1));
    const y = randRange(rng, -0.12, 0.12);
    nodes.push({ id: i, type, rating, pos: [x, y] });
    path.push(i);
    if (i > 0) edges.push({ a: i - 1, b: i, oneWay: false });
  }

  let alarmLeft = params.alarms;
  let spamLeft = params.spams;
  let next = L;
  while (next < params.nodes) {
    const anchor = randInt(rng, 1, L - 1); // hang off a mid/late path node, not the entry
    let type: NodeType = 'DIR';
    if (alarmLeft > 0 && rng() < 0.45) {
      type = 'ALARM';
      alarmLeft--;
    } else if (spamLeft > 0 && rng() < 0.45) {
      type = 'SPAM';
      spamLeft--;
    } else if (rng() < 0.5) {
      type = 'STORE';
    }
    const rating = type === 'STORE' ? randInt(rng, 2, 5) : type === 'DIR' ? randInt(rng, 1, 5) : randInt(rng, 2, 4);
    const anc = nodes[anchor]!;
    const side = rng() < 0.5 ? -1 : 1;
    const x = clamp(anc.pos[0] + randRange(rng, -0.18, 0.18), -0.95, 0.95);
    const y = clamp(anc.pos[1] + side * randRange(rng, 0.34, 0.62), -0.9, 0.9);
    const id = next++;
    nodes.push({ id, type, rating, pos: [x, y] });
    edges.push({ a: anchor, b: id, oneWay: false });
    // occasional cross-link for texture (never onto the entry)
    if (rng() < 0.3) {
      const other = randInt(rng, 1, id - 1);
      if (other !== anchor && !edges.some((e) => (e.a === id && e.b === other) || (e.a === other && e.b === id))) edges.push({ a: other, b: id, oneWay: false });
    }
  }

  // one-way edges (D3+): only on branch edges, so the critical path stays
  // two-way and the tracer can always walk it back toward ENTRY.
  if (params.oneWay > 0) {
    const branchEdges = edges.filter((e) => e.a >= L || e.b >= L);
    for (let k = 0; k < params.oneWay && k < branchEdges.length; k++) {
      const e = branchEdges[Math.floor(rng() * branchEdges.length)]!;
      e.oneWay = true;
    }
  }

  const registry = L - 1;
  if (!forwardReachable(edges, 0, registry, params.nodes)) return null;

  // cumulative detection along the critical path at SKILL 0 (captureLevel 1)
  let survive = 1;
  for (let i = 1; i < L; i++) survive *= 1 - pDetect(nodes[i]!.rating, 1);
  const cumulativeDetect = 1 - survive;
  if (cumulativeDetect > GEN.cumDetectMax) return null;

  return {
    seed,
    difficulty,
    params,
    nodes,
    edges,
    entry: 0,
    registries: [registry],
    criticalPath: path,
    genStats: { attempts: attempt, pathLen: L, cumulativeDetect },
  };
}

export function generateBoard(difficulty: Difficulty, seed: string): Board {
  for (let attempt = 1; attempt <= GEN.maxAttempts; attempt++) {
    const b = tryBuild(difficulty, seed, attempt);
    if (b) return b;
  }
  throw new Error(`trace generateBoard: no valid board after ${GEN.maxAttempts} attempts (seed=${seed}, D${difficulty})`);
}

/** Used by the solver check to verify player expansion is possible each step. */
export function playerCanCapture(edges: readonly Edge[], owned: ReadonlySet<number>, target: number): boolean {
  for (const u of owned) for (const e of edges) if (canTraverse(e, u, target)) return true;
  return false;
}
