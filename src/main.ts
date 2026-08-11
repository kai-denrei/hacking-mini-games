import { mountConstellation } from './games/constellation/view.ts';
import { mountTransfer } from './games/transfer/view.ts';
import { mountCircuit } from './games/circuit/view.ts';
import { mountShapes } from './games/shapes/view.ts';
import { mountTubes } from './games/tubes/view.ts';
import { mountDevLog } from './devlog/panel.ts';
import { LADDER, type MatchSpec } from './games/transfer/model.ts';
import type { TransferGame } from './games/transfer/play.ts';
import type { Difficulty, Skill } from './engine/session.ts';

// App entry + tiny router. Press 1 = CONSTELLATION, 2 = TRANSFER, 3 = CIRCUIT,
// 4 = SHAPES, 5 = TUBES. R (or the ⟳ button) reseeds the current game. Dev log
// mounts once.
mountDevLog();

const CFG = { difficulty: 2 as Difficulty, skill: 2 as Skill };
type GameName = 'constellation' | 'transfer' | 'circuit' | 'shapes' | 'tubes';
const DUEL = new Set<GameName>(['transfer', 'circuit', 'shapes', 'tubes']);

// The four duel games share the scaling ladder (a class matchup per rung): win a
// match then reseed to climb; lose (strict, not a tie) then reseed to fall back
// to the shallow end. Rung persists across duel games so switching renderers
// keeps your depth.
let rung = 0;

interface DuelGame {
  dispose(): void;
  regenerate(spec: MatchSpec, seed: string): void;
  game(): TransferGame;
}
interface SimpleGame {
  dispose(): void;
  regenerate(d: Difficulty, seed: string): void;
}
type Game = DuelGame | SimpleGame;

function showError(err: unknown): void {
  const box = document.createElement('div');
  box.style.cssText =
    'position:fixed;top:12px;left:12px;right:12px;padding:10px 14px;z-index:2147483645;' +
    'background:#2a0f12;border:1px solid #5a2a2f;border-radius:8px;color:#e6a6a6;' +
    'font:12px/1.5 ui-monospace,Menlo,monospace;white-space:pre-wrap';
  box.textContent = `game failed to start:\n${err instanceof Error ? (err.stack ?? err.message) : String(err)}`;
  document.body.appendChild(box);
}

// URL is <base>N — /1 constellation … /5 tubes (base is '/' in dev, a sub-path
// like '/hacking-mini-games/' on GitHub Pages).
const GAMES: GameName[] = ['constellation', 'transfer', 'circuit', 'shapes', 'tubes'];
const BASE = import.meta.env.BASE_URL;
let current: Game | null = null;
let currentName: GameName = 'constellation';
let seq = 0;

function freshCanvas(): HTMLCanvasElement {
  document.getElementById('scene')?.remove();
  const c = document.createElement('canvas');
  c.id = 'scene';
  document.getElementById('app')!.appendChild(c);
  return c;
}

function mountGame(name: GameName): void {
  current?.dispose();
  seq = 0;
  currentName = name;
  history.replaceState(null, '', `${BASE}${GAMES.indexOf(name) + 1}`);
  const canvas = freshCanvas();
  const duel = (seed: string) => ({ spec: LADDER[rung]!, seed, skill: CFG.skill });
  try {
    current =
      name === 'transfer'
        ? mountTransfer(canvas, duel('circuit'))
        : name === 'circuit'
          ? mountCircuit(canvas, duel('grid'))
          : name === 'shapes'
            ? mountShapes(canvas, duel('solids'))
            : name === 'tubes'
              ? mountTubes(canvas, duel('wired'))
              : mountConstellation(canvas, { ...CFG, seed: 'aurora' });
    (window as unknown as { __cx: Game }).__cx = current;
  } catch (err) {
    console.error(err);
    showError(err);
  }
}

function reseed(): void {
  if (!current) return;
  seq += 1;
  try {
    if (DUEL.has(currentName)) {
      const g = (current as DuelGame).game();
      // Advance the ladder only when a match has actually resolved: a win climbs
      // a rung, a strict loss reverts to the shallow end. A tie (or reseeding
      // mid-match) replays the same rung.
      if (g.phase === 'WON') rung = Math.min(LADDER.length - 1, rung + 1);
      else if (g.phase === 'LOST' && g.result && g.result.p < g.result.e) rung = 0;
      (current as DuelGame).regenerate(LADDER[rung]!, `${currentName}-${seq}`);
    } else {
      (current as SimpleGame).regenerate(CFG.difficulty, `${currentName}-${seq}`);
    }
  } catch (err) {
    console.error(err);
    showError(err);
  }
}

// On-screen reset (touch/mobile has no keyboard, so no R). A small ⟳ button in
// the top-right corner reseeds the current game — the same as pressing R.
const resetBtn = document.createElement('button');
resetBtn.textContent = '⟳';
resetBtn.setAttribute('aria-label', 'reset / reseed');
resetBtn.style.cssText =
  'position:fixed;top:8px;right:10px;z-index:2147483646;width:44px;height:44px;' +
  'border-radius:50%;border:1px solid #2c2c38;background:rgba(12,13,20,.6);color:#9a9aa6;' +
  'font:20px/44px ui-monospace,Menlo,monospace;text-align:center;cursor:pointer;' +
  'padding:0;-webkit-tap-highlight-color:transparent;touch-action:manipulation';
resetBtn.addEventListener('click', reseed);
document.body.appendChild(resetBtn);

const rel = location.pathname.startsWith(BASE) ? location.pathname.slice(BASE.length) : location.pathname.replace(/^\//, '');
const startNum = parseInt(rel.replace(/\D/g, ''), 10);
mountGame(GAMES[startNum - 1] ?? 'tubes'); // game 5 is the default landing

window.addEventListener('keydown', (e) => {
  const n = parseInt(e.key, 10);
  if (n >= 1 && n <= GAMES.length) mountGame(GAMES[n - 1]!);
  else if (e.key === 'r' || e.key === 'R') reseed();
});
