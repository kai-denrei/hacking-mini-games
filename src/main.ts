import { mountConstellation } from './games/constellation/view.ts';
import { mountDevLog } from './devlog/panel.ts';
import type { Difficulty, Skill } from './engine/session.ts';

// App entry: mount CONSTELLATION (game 1) and the dev-log panel. Press R to
// reseed with a fresh board at the same difficulty.
const CONFIG = {
  difficulty: 2 as Difficulty,
  skill: 2 as Skill, // >= 1 shows the dotted-arc coherence meter
  seed: 'aurora',
};

// Dev log mounts first and independently: a game crash must never take it down.
mountDevLog();

function showError(err: unknown): void {
  const box = document.createElement('div');
  box.style.cssText =
    'position:fixed;top:12px;left:12px;right:12px;padding:10px 14px;z-index:2147483645;' +
    'background:#2a0f12;border:1px solid #5a2a2f;border-radius:8px;color:#e6a6a6;' +
    'font:12px/1.5 ui-monospace,Menlo,monospace;white-space:pre-wrap';
  box.textContent = `CONSTELLATION failed to start:\n${err instanceof Error ? (err.stack ?? err.message) : String(err)}`;
  document.body.appendChild(box);
}

try {
  const canvas = document.getElementById('scene') as HTMLCanvasElement;
  const game = mountConstellation(canvas, CONFIG);
  (window as unknown as { __cx: typeof game }).__cx = game; // dev/test hook

  let n = 0;
  window.addEventListener('keydown', (e) => {
    if (e.key === 'r' || e.key === 'R') {
      n += 1;
      game.regenerate(CONFIG.difficulty, `run-${n}`);
    }
  });
} catch (err) {
  console.error(err);
  showError(err);
}
