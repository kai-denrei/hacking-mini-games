import { mountConstellationOrbs } from './games/constellation-orbs/view.ts';
import { mountTrace } from './games/trace/view.ts';
import { mountCircuitDuel2 } from './games/circuit-duel-2/view.ts';
import { mountDevLog } from './devlog/panel.ts';
import { mountLanding } from './landing.ts';
import { LADDER, type MatchSpec } from './games/transfer/model.ts';
import type { TransferGame } from './games/transfer/play.ts';
import type { Difficulty, Skill } from './engine/session.ts';

// App entry + tiny router. Press 1 = CONSTELLATION, 2 = TRACE, 3 = HDT.
// R (or the ⟳ button) reseeds the current game. Dev log mounts once.
const devlog = mountDevLog();

const CFG = { difficulty: 2 as Difficulty, skill: 2 as Skill };
type GameName = 'constellation-orbs' | 'trace' | 'circuit-duel-2';
const DUEL = new Set<GameName>(['circuit-duel-2']);

// HDT uses the scaling ladder (a class matchup per rung): win a match then
// reseed to climb; lose (strict, not a tie) then reseed to fall back to the
// shallow end; a 6–6 deadlock replays the same board.
let rung = 0;

// TRACE + CONSTELLATION use a simpler per-game difficulty ladder (levels 1..5):
// win a round then reseed to climb one level, lose then reseed to ease down one
// (mid-run reseeds don't move it). The level shows in each game's status line;
// a brief center flash marks the change.
type Outcome = 'won' | 'lost' | 'pending';
const SIMPLE_MIN: Difficulty = 1;
const SIMPLE_MAX: Difficulty = 5;
const levels: Record<GameName, Difficulty> = { 'constellation-orbs': 1, trace: 1, 'circuit-duel-2': 1 };

const levelFlash = document.createElement('div');
levelFlash.style.cssText =
  'position:fixed;top:38%;left:50%;transform:translateX(-50%);z-index:2147483646;pointer-events:none;' +
  'font:600 15px ui-monospace,Menlo,monospace;letter-spacing:.14em;padding:8px 16px;border-radius:8px;' +
  'background:rgba(10,11,18,.72);border:1px solid #2c2c38;opacity:0;transition:opacity .35s;white-space:nowrap';
document.body.appendChild(levelFlash);
let flashTimer = 0;
function showLevelFlash(lv: Difficulty, trend: 'up' | 'down'): void {
  const up = trend === 'up';
  levelFlash.innerHTML = `<span style="color:${up ? '#8fd0b6' : '#e0b070'}">LEVEL ${lv} ${up ? '▲ harder' : '▼ easier'}</span>`;
  levelFlash.style.opacity = '1';
  clearTimeout(flashTimer);
  flashTimer = window.setTimeout(() => (levelFlash.style.opacity = '0'), 1600);
}

interface DuelGame {
  dispose(): void;
  regenerate(spec: MatchSpec, seed: string): void;
  game(): TransferGame;
}
interface SimpleGame {
  dispose(): void;
  regenerate(d: Difficulty, seed: string): void;
  outcome(): Outcome;
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

// URL is <base>N — /1 constellation (orbs) · /2 trace · /3 HDT (base is '/' in
// dev, a sub-path like '/hacking-mini-games/' on GitHub Pages).
const GAMES: GameName[] = ['constellation-orbs', 'trace', 'circuit-duel-2'];
const BASE = import.meta.env.BASE_URL;
let current: Game | null = null;
let currentName: GameName = 'constellation-orbs';
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
  landing.hide();
  setChrome(true);
  history.replaceState(null, '', `${BASE}${GAMES.indexOf(name) + 1}`);
  const canvas = freshCanvas();
  const duel = (seed: string) => ({ spec: LADDER[rung]!, seed, skill: CFG.skill });
  try {
    current =
      name === 'circuit-duel-2'
        ? mountCircuitDuel2(canvas, duel('hdt'))
        : name === 'trace'
          ? mountTrace(canvas, { ...CFG, difficulty: levels[name], seed: 'net' })
          : mountConstellationOrbs(canvas, { ...CFG, difficulty: levels[name], seed: 'orbs' });
    (window as unknown as { __cx: Game }).__cx = current;
  } catch (err) {
    console.error(err);
    showError(err);
  }
  updateLadderHud();
}

function reseed(): void {
  if (!current) return;
  try {
    if (DUEL.has(currentName)) {
      const g = (current as DuelGame).game();
      // 6–6 DEADLOCK: replay the exact same board (same seed, same rung, no seq bump)
      if (g.phase === 'DEADLOCK') {
        (current as DuelGame).regenerate(LADDER[rung]!, g.board.seed);
        updateLadderHud();
        return;
      }
      seq += 1;
      // Advance the ladder only when a match has actually resolved: a win climbs
      // a rung, a strict loss reverts to the shallow end. A tie (or reseeding
      // mid-match) replays the same rung.
      let trend: '' | 'up' | 'down' = '';
      if (g.phase === 'WON') {
        if (rung < LADDER.length - 1) rung++;
        trend = 'up';
      } else if (g.phase === 'LOST' && g.result && g.result.p < g.result.e) {
        rung = 0;
        trend = 'down';
      }
      (current as DuelGame).regenerate(LADDER[rung]!, `${currentName}-${seq}`);
      updateLadderHud(trend);
    } else {
      // Read the finished round's outcome, then move the level: win → +1,
      // lose → −1 (a mid-run reseed is 'pending' and holds the level).
      const g = current as SimpleGame;
      const out = g.outcome();
      let trend: '' | 'up' | 'down' = '';
      const lv = levels[currentName];
      if (out === 'won' && lv < SIMPLE_MAX) {
        levels[currentName] = (lv + 1) as Difficulty;
        trend = 'up';
      } else if (out === 'lost' && lv > SIMPLE_MIN) {
        levels[currentName] = (lv - 1) as Difficulty;
        trend = 'down';
      }
      seq += 1;
      g.regenerate(levels[currentName], `${currentName}-${seq}`);
      if (trend) showLevelFlash(levels[currentName], trend);
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
  'position:fixed;top:calc(8px + env(safe-area-inset-top));right:calc(10px + env(safe-area-inset-right));z-index:2147483646;width:44px;height:44px;' +
  'border-radius:50%;border:1px solid #2c2c38;background:rgba(12,13,20,.6);color:#9a9aa6;' +
  'font:20px/44px ui-monospace,Menlo,monospace;text-align:center;cursor:pointer;' +
  'padding:0;-webkit-tap-highlight-color:transparent;touch-action:manipulation';
resetBtn.addEventListener('click', reseed);
document.body.appendChild(resetBtn);

// Home (⌂) — back to the game picker. Sits just left of the reset button.
const homeBtn = document.createElement('button');
homeBtn.textContent = '⌂';
homeBtn.setAttribute('aria-label', 'back to game picker');
homeBtn.style.cssText =
  'position:fixed;top:calc(8px + env(safe-area-inset-top));right:calc(60px + env(safe-area-inset-right));z-index:2147483646;width:44px;height:44px;' +
  'border-radius:50%;border:1px solid #2c2c38;background:rgba(12,13,20,.6);color:#9a9aa6;' +
  'font:18px/44px ui-monospace,Menlo,monospace;text-align:center;cursor:pointer;' +
  'padding:0;-webkit-tap-highlight-color:transparent;touch-action:manipulation';
homeBtn.addEventListener('click', goHome);
document.body.appendChild(homeBtn);

// Show/hide the in-game chrome (reset + home). The landing is the hub, so both
// are hidden there.
function setChrome(active: boolean): void {
  resetBtn.style.display = active ? 'block' : 'none';
  homeBtn.style.display = active ? 'block' : 'none';
}

function goHome(): void {
  current?.dispose();
  current = null;
  (window as unknown as { __cx: Game | null }).__cx = null;
  setChrome(false);
  ladderHud.style.display = 'none';
  history.replaceState(null, '', BASE);
  landing.show();
}

// Ladder progress readout (duel games only) so the scaling difficulty is
// visible: current rung + matchup, and which way the last result moved it.
const ladderHud = document.createElement('div');
ladderHud.style.cssText =
  'position:fixed;top:calc(9px + env(safe-area-inset-top));left:calc(12px + env(safe-area-inset-left));z-index:2147483646;pointer-events:none;' +
  'font:11px/1.5 ui-monospace,Menlo,monospace;color:#8a8a96';
document.body.appendChild(ladderHud);

function updateLadderHud(trend: '' | 'up' | 'down' = ''): void {
  if (!DUEL.has(currentName)) {
    ladderHud.style.display = 'none';
    return;
  }
  ladderHud.style.display = 'block';
  const s = LADDER[rung]!;
  const arrow = trend === 'up' ? ' <span style="color:#8fd0b6">▲ climbed</span>' : trend === 'down' ? ' <span style="color:#d0605a">▼ reset</span>' : '';
  ladderHud.innerHTML =
    `<span style="color:#c2c2ce">LADDER ${rung + 1}/${LADDER.length}</span>${arrow}<br>` +
    `you c${s.attacker} · host c${s.defender}<br>` +
    `<span style="color:#5a5a64">win → climb · lose → reset</span>`;
}

const landing = mountLanding(
  (game) => mountGame(game),
  (gameName) => devlog.openRules(gameName),
);

// Deep-link /1../6 straight into a game; the bare base URL shows the picker.
const rel = location.pathname.startsWith(BASE) ? location.pathname.slice(BASE.length) : location.pathname.replace(/^\//, '');
const startNum = parseInt(rel.replace(/\D/g, ''), 10);
if (startNum >= 1 && startNum <= GAMES.length) {
  mountGame(GAMES[startNum - 1]!);
} else {
  setChrome(false);
  landing.show();
}

window.addEventListener('keydown', (e) => {
  const n = parseInt(e.key, 10);
  if (n >= 1 && n <= GAMES.length) mountGame(GAMES[n - 1]!);
  else if (e.key === 'Escape') goHome();
  else if ((e.key === 'r' || e.key === 'R') && current) reseed();
});
