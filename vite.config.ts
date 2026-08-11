import { execSync } from 'node:child_process';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// Single Vite app hosting a series of games behind a shared engine + renderer.
// Static output (dist/) so it deploys to any static host. `base` is '/' in dev
// and is set (e.g. '/hacking-mini-games/') for a GitHub Pages sub-path build via
// the DEPLOY_BASE env var. vite-plugin-pwa respects base for the SW + manifest.
export default defineConfig({
  base: process.env.DEPLOY_BASE || '/',
  plugins: [
    {
      // Bump the cache-bust token on every production build.
      name: 'cb-bust',
      apply: 'build',
      buildStart() {
        execSync('./scripts/bust.sh --quiet', { stdio: 'inherit' });
      },
    },
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icons/apple-touch-icon-180.png', 'favicon.ico'],
      manifest: {
        name: 'Hacking Mini-Games',
        short_name: 'HackGames',
        description: 'A series of hacking mini-games with a 3D dotted-halftone point-cloud look.',
        start_url: './?src=pwa',
        scope: './',
        display: 'standalone',
        background_color: '#08080d',
        theme_color: '#08080d',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,webmanifest}'],
        navigateFallback: 'index.html',
        cleanupOutdatedCaches: true,
      },
    }),
  ],
  build: {
    target: 'es2022',
    outDir: 'dist',
    sourcemap: true,
  },
});
