// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config

export default defineConfig({
  output: 'static',
  base: '/Astro_Webpage/', // very important!
});