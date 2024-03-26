import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  site: 'https://warhol.vercel.app/',
  integrations: [mdx(), sitemap(), db()]
});