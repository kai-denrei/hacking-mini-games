import { execSync } from 'node:child_process';
import { defineConfig } from 'vite';

// Single Vite app hosting a series of games behind a shared engine + renderer.
// Static output (dist/) so it deploys to any static host; the cache-busting
// toolkit layers a bumpable version token + Cache-Control on top of Vite's own
// content-hashing.
export default defineConfig({
  plugins: [
    {
      // Bump the cache-bust token on every production build (moves the badge
      // favicon + <meta name="cb"> so a stale deploy is visible at a glance).
      // Dev keeps the last token stable; use scripts/watch.sh to auto-bump.
      name: 'cb-bust',
      apply: 'build',
      buildStart() {
        execSync('./scripts/bust.sh --quiet', { stdio: 'inherit' });
      },
    },
  ],
  build: {
    target: 'es2022',
    outDir: 'dist',
    sourcemap: true,
  },
});
