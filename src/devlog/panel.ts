import { STATUS, MILESTONES, ROADMAP, type Milestone } from './changelog.ts';
import { RULES } from './rules.ts';

// A dev-log panel that opens when the cache-bust version badge (#cb-badge,
// bottom-right) is clicked. Two tabs: the build changelog + roadmap, and the
// rules of the mini-games. Attaches to the badge from app code so a
// cache-busting reinstall (which regenerates cb-badge.js) never clobbers it.

type Tab = 'log' | 'rules';

const liveToken = (): string => {
  const meta = document.querySelector('meta[name="cb"]');
  const raw = (meta?.getAttribute('content') || '').replace(/#.*$/, '');
  return raw || '——';
};

const esc = (s: string): string =>
  s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]!);

const tokenOf = (m: Milestone): string => (m.build === 'live' ? liveToken() : (m.build ?? '—'));

function renderLog(): string {
  const milestones = MILESTONES.map((m) => {
    const items = m.added.map((a) => `<li>${esc(a)}</li>`).join('');
    return `
      <div class="cx-ms">
        <div class="cx-ms-h"><span class="cx-tok">${esc(tokenOf(m))}</span>
          <span class="cx-ms-t">${esc(m.title)}</span><span class="cx-date">${esc(m.date)}</span></div>
        <ul>${items}</ul>
      </div>`;
  }).join('');

  const roadmap = ROADMAP.map((p) => {
    const items = p.items
      .map((it) => `<li class="${it.done ? 'done' : ''}">${it.done ? '✓' : '○'} ${esc(it.label)}</li>`)
      .join('');
    return `
      <div class="cx-rm">
        <div class="cx-rm-h">${esc(p.phase)}${p.note ? ` <span class="cx-note">— ${esc(p.note)}</span>` : ''}</div>
        <ul>${items}</ul>
      </div>`;
  }).join('');

  return `
    <div class="cx-status">${esc(STATUS)}</div>
    <div class="cx-scroll">
      <div class="cx-sec">Changelog</div>${milestones}
      <div class="cx-sec">Roadmap</div>${roadmap}
    </div>`;
}

function renderRules(): string {
  const cards = RULES.map((g) => {
    const how = g.how.map((h) => `<li>${esc(h)}</li>`).join('');
    const fail = g.fail.map((f) => `<li>${esc(f)}</li>`).join('');
    const note = g.note ? `<div class="cx-gnote">${esc(g.note)}</div>` : '';
    return `
      <div class="cx-game">
        <div class="cx-game-h"><span class="cx-game-n">${esc(g.name)}</span>
          <span class="cx-badge cx-${g.status.replace(/\s/g, '')}">${esc(g.status)}</span></div>
        <div class="cx-fantasy">${esc(g.fantasy)}</div>
        <div class="cx-lbl">How to play</div><ul>${how}</ul>
        <div class="cx-lbl">Failure</div><ul class="cx-fail">${fail}</ul>
        ${note}
      </div>`;
  }).join('');
  return `<div class="cx-scroll">${cards}</div>`;
}

function render(tab: Tab): string {
  return `
    <div class="cx-head">
      <div>
        <div class="cx-title">hacking-mini-games</div>
        <div class="cx-sub">build <b>${esc(liveToken())}</b></div>
      </div>
      <button class="cx-close" aria-label="close">✕</button>
    </div>
    <div class="cx-tabs">
      <button class="cx-tab ${tab === 'log' ? 'on' : ''}" data-tab="log">Dev Log</button>
      <button class="cx-tab ${tab === 'rules' ? 'on' : ''}" data-tab="rules">Rules</button>
    </div>
    ${tab === 'log' ? renderLog() : renderRules()}`;
}

const CSS = `
  #cx-panel{position:fixed;right:8px;bottom:44px;width:min(410px,calc(100vw - 16px));
    max-height:min(76vh,660px);display:none;flex-direction:column;z-index:2147483646;
    background:#0d0d12;border:1px solid #2a2a34;border-radius:10px;overflow:hidden;
    box-shadow:0 12px 40px rgba(0,0,0,.6);color:#c7c7cf;
    font:12px/1.55 ui-monospace,SFMono-Regular,Menlo,monospace}
  #cx-panel.open{display:flex}
  #cx-panel .cx-head{display:flex;justify-content:space-between;align-items:flex-start;
    padding:12px 14px 10px;border-bottom:1px solid #20202a}
  #cx-panel .cx-title{color:#e6e6ee;font-weight:600}
  #cx-panel .cx-sub{color:#6f6f7a;margin-top:2px}
  #cx-panel .cx-sub b{color:#8fd0b6;font-weight:600}
  #cx-panel .cx-close{background:none;border:none;color:#777;cursor:pointer;font-size:14px;padding:2px 4px}
  #cx-panel .cx-close:hover{color:#ccc}
  #cx-panel .cx-tabs{display:flex;gap:4px;padding:8px 10px 0;border-bottom:1px solid #20202a}
  #cx-panel .cx-tab{background:none;border:none;border-bottom:2px solid transparent;color:#777;
    cursor:pointer;padding:6px 10px;font:inherit}
  #cx-panel .cx-tab.on{color:#e6e6ee;border-bottom-color:#8fd0b6}
  #cx-panel .cx-status{padding:10px 14px;color:#9a9aa6;border-bottom:1px solid #20202a}
  #cx-panel .cx-scroll{overflow:auto;padding:8px 14px 14px}
  #cx-panel .cx-sec{color:#7a7a86;text-transform:uppercase;letter-spacing:.08em;font-size:10px;margin:12px 0 6px}
  #cx-panel .cx-ms{margin:0 0 12px;padding:8px 10px;background:#111119;border:1px solid #1e1e28;border-radius:7px}
  #cx-panel .cx-ms-h{display:flex;align-items:baseline;gap:8px;margin-bottom:4px}
  #cx-panel .cx-tok{color:#8fd0b6;font-size:11px}
  #cx-panel .cx-ms-t{color:#e0e0e8;font-weight:600;flex:1}
  #cx-panel .cx-date{color:#5a5a64;font-size:10px}
  #cx-panel ul{margin:0;padding-left:16px}
  #cx-panel .cx-ms li{margin:2px 0;color:#a7a7b2}
  #cx-panel .cx-rm{margin:0 0 10px}
  #cx-panel .cx-rm-h{color:#c9c9d3;font-weight:600;margin-bottom:3px}
  #cx-panel .cx-note{color:#6f6f7a;font-weight:400}
  #cx-panel .cx-rm ul{list-style:none;padding-left:2px}
  #cx-panel .cx-rm li{margin:2px 0;color:#9a9aa6}
  #cx-panel .cx-rm li.done{color:#8fd0b6}
  #cx-panel .cx-game{margin:0 0 14px;padding:10px 12px;background:#111119;border:1px solid #1e1e28;border-radius:7px}
  #cx-panel .cx-game-h{display:flex;align-items:center;gap:8px;margin-bottom:6px}
  #cx-panel .cx-game-n{color:#e6e6ee;font-weight:700;letter-spacing:.06em;flex:1}
  #cx-panel .cx-badge{font-size:9px;text-transform:uppercase;letter-spacing:.08em;padding:2px 6px;border-radius:4px;
    background:#20202a;color:#8a8a96}
  #cx-panel .cx-phase1{background:#20321f;color:#8fd0a0}
  #cx-panel .cx-playable{background:#20321f;color:#8fd0a0}
  #cx-panel .cx-fantasy{color:#9a9aa6;font-style:italic;margin-bottom:8px}
  #cx-panel .cx-lbl{color:#7a7a86;text-transform:uppercase;letter-spacing:.06em;font-size:9px;margin:8px 0 3px}
  #cx-panel .cx-game li{margin:2px 0;color:#a7a7b2}
  #cx-panel .cx-fail li{color:#c9a0a0}
  #cx-panel .cx-gnote{margin-top:8px;padding-top:7px;border-top:1px solid #20202a;color:#6f6f7a}
`;

export function mountDevLog(): void {
  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  const panel = document.createElement('div');
  panel.id = 'cx-panel';
  document.body.appendChild(panel);

  let tab: Tab = 'log';

  const paint = (): void => {
    panel.innerHTML = render(tab);
    panel.querySelector('.cx-close')?.addEventListener('click', () => setOpen(false));
    panel.querySelectorAll<HTMLButtonElement>('.cx-tab').forEach((b) => {
      b.addEventListener('click', () => {
        tab = (b.dataset.tab as Tab) ?? 'log';
        paint();
      });
    });
  };

  const setOpen = (open: boolean): void => {
    if (open) paint();
    panel.classList.toggle('open', open);
  };

  // Hook the badge once it mounts (cb-badge.js appends it on DOM ready).
  let tries = 0;
  const hook = (): void => {
    const badge = document.getElementById('cb-badge');
    if (badge) {
      badge.title = 'click for dev log · token copied too';
      badge.addEventListener('click', () => setOpen(!panel.classList.contains('open')));
      return;
    }
    if (tries++ < 100) setTimeout(hook, 50);
  };
  hook();

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
}
