import { mountConstellation } from './games/constellation/view.ts';
import { mountDevLog } from './devlog/panel.ts';
import type { Difficulty } from './engine/session.ts';

// App entry: mount CONSTELLATION (game 1) and the dev-log panel. Press R to
// reseed with a fresh board at the same difficulty.
const CONFIG = {
  difficulty: 2 as Difficulty,
  seed: 'aurora',
};

const canvas = document.getElementById('scene') as HTMLCanvasElement;
const game = mountConstellation(canvas, CONFIG);
mountDevLog();

let n = 0;
window.addEventListener('keydown', (e) => {
  if (e.key === 'r' || e.key === 'R') {
    n += 1;
    game.regenerate(CONFIG.difficulty, `run-${n}`);
  }
});
