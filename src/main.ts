import { mountConstellation } from './games/constellation/view.ts';
import { mountTransfer } from './games/transfer/view.ts';
import { mountCircuit } from './games/circuit/view.ts';
import { mountDevLog } from './devlog/panel.ts';
import type { Difficulty, Skill } from './engine/session.ts';

// App entry + tiny router. Press 1 = CONSTELLATION, 2 = TRANSFER, 3 = CIRCUIT;
// R reseeds the current game. The dev log mounts once, independently of the game.
mountDevLog();

const CFG = { difficulty: 2 as Difficulty, skill: 2 as Skill };
type GameName = 'constellation' | 'transfer' | 'circuit';
interface Game {
  dispose(): void;
  regenerate(d: Difficulty, seed: string): void;
}

function showError(err: unknown): void {
  const box = document.createElement('div');
  box.style.cssText =
    'position:fixed;top:12px;left:12px;right:12px;padding:10px 14px;z-index:2147483645;' +
    'background:#2a0f12;border:1px solid #5a2a2f;border-radius:8px;color:#e6a6a6;' +
    'font:12px/1.5 ui-monospace,Menlo,monospace;white-space:pre-wrap';
  box.textContent = `game failed to start:\n${err instanceof Error ? (err.stack ?? err.message) : String(err)}`;
  document.body.appendChild(box);
}

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
  location.hash = name === 'transfer' ? 'transfer' : '';
  const canvas = freshCanvas();
  try {
    current =
      name === 'transfer'
        ? mountTransfer(canvas, { ...CFG, seed: 'circuit' })
        : name === 'circuit'
          ? mountCircuit(canvas, { ...CFG, seed: 'grid' })
          : mountConstellation(canvas, { ...CFG, seed: 'aurora' });
    (window as unknown as { __cx: Game }).__cx = current;
  } catch (err) {
    console.error(err);
    showError(err);
  }
}

const startHash = location.hash.replace('#', '');
mountGame(startHash === 'transfer' ? 'transfer' : startHash === 'circuit' ? 'circuit' : 'constellation');

window.addEventListener('keydown', (e) => {
  if (e.key === '1') mountGame('constellation');
  else if (e.key === '2') mountGame('transfer');
  else if (e.key === '3') mountGame('circuit');
  else if ((e.key === 'r' || e.key === 'R') && current) {
    seq += 1;
    current.regenerate(CFG.difficulty, `${currentName}-${seq}`);
  }
});
