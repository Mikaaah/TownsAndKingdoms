import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://mikaaah.github.io',
  base: '/TownsAndKingdoms',
  output: 'static',
  trailingSlash: 'always',
  vite: { build: { chunkSizeWarningLimit: 700 } }
});
