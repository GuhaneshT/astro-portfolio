// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  integrations: [mdx(), sitemap()],
  // ❌ Remove or comment this line when deploying to Vercel:
  // site: 'https://GuhaneshT.github.io/Astro_Webpage',
});
