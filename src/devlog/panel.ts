import { STATUS, MILESTONES, ROADMAP, type Milestone } from './changelog.ts';

// A dev-log panel that opens when the cache-bust version badge (#cb-badge,
// bottom-right) is clicked. Shows where the project is, what each build added,
// and the roadmap. Attaches to the badge from app code so a cache-busting
// reinstall (which regenerates cb-badge.js) never clobbers this wiring.

const liveToken = (): string => {
  const meta = document.querySelector('meta[name="cb"]');
  const raw = (meta?.getAttribute('content') || '').replace(/#.*$/, '');
  return raw || '——';
};

const esc = (s: string): string =>
  s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' })[c]!);

function tokenOf(m: Milestone): string {
  if (m.build === 'live') return liveToken();
  return m.build ?? '—';
}

function render(): string {
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
    <div class="cx-head">
      <div>
        <div class="cx-title">hacking-mini-games · dev log</div>
        <div class="cx-sub">build <b>${esc(liveToken())}</b></div>
      </div>
      <button class="cx-close" aria-label="close">✕</button>
    </div>
    <div class="cx-status">${esc(STATUS)}</div>
    <div class="cx-scroll">
      <div class="cx-sec">Changelog</div>
      ${milestones}
      <div class="cx-sec">Roadmap</div>
      ${roadmap}
    </div>`;
}

const CSS = `
  #cx-panel{position:fixed;right:8px;bottom:44px;width:min(400px,calc(100vw - 16px));
    max-height:min(74vh,640px);display:none;flex-direction:column;z-index:2147483646;
    background:#0d0d12;border:1px solid #2a2a34;border-radius:10px;overflow:hidden;
    box-shadow:0 12px 40px rgba(0,0,0,.6);color:#c7c7cf;
    font:12px/1.55 ui-monospace,SFMono-Regular,Menlo,monospace}
  #cx-panel.open{display:flex}
  #cx-panel .cx-head{display:flex;justify-content:space-between;align-items:flex-start;
    padding:12px 14px;border-bottom:1px solid #20202a}
  #cx-panel .cx-title{color:#e6e6ee;font-weight:600}
  #cx-panel .cx-sub{color:#6f6f7a;margin-top:2px}
  #cx-panel .cx-sub b{color:#8fd0b6;font-weight:600}
  #cx-panel .cx-close{background:none;border:none;color:#777;cursor:pointer;font-size:14px;padding:2px 4px}
  #cx-panel .cx-close:hover{color:#ccc}
  #cx-panel .cx-status{padding:10px 14px;color:#9a9aa6;border-bottom:1px solid #20202a}
  #cx-panel .cx-scroll{overflow:auto;padding:8px 14px 14px}
  #cx-panel .cx-sec{color:#7a7a86;text-transform:uppercase;letter-spacing:.08em;font-size:10px;
    margin:12px 0 6px}
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
`;

export function mountDevLog(): void {
  const style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  const panel = document.createElement('div');
  panel.id = 'cx-panel';
  document.body.appendChild(panel);

  const toggle = (force?: boolean): void => {
    const open = force ?? !panel.classList.contains('open');
    if (open) panel.innerHTML = render(); // refresh live token each open
    panel.classList.toggle('open', open);
    if (open) {
      panel.querySelector('.cx-close')?.addEventListener('click', () => toggle(false));
    }
  };

  // Hook the badge once it mounts (cb-badge.js appends it on DOM ready).
  let tries = 0;
  const hook = (): void => {
    const badge = document.getElementById('cb-badge');
    if (badge) {
      badge.title = 'click for dev log · token copied too';
      badge.addEventListener('click', () => toggle());
      return;
    }
    if (tries++ < 100) setTimeout(hook, 50);
  };
  hook();

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggle(false);
  });
}
