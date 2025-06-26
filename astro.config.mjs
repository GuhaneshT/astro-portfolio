// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://astro-portfolio-nnstdvwpe-guhaneshts-projects.vercel.app',
  integrations: [mdx(), sitemap(), tailwind()],
  // ❌ Remove or comment this line when deploying to Vercel:
  // site: 'https://GuhaneshT.github.io/Astro_Webpage',
});
