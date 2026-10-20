// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Fully static: deploys as-is on Cloudflare Pages (build `pnpm build`, output `dist`).
export default defineConfig({
  site: 'https://drogeworsten.be',
  trailingSlash: 'never',
  devToolbar: { enabled: false },
  build: { format: 'file' },
  integrations: [sitemap()],
});
