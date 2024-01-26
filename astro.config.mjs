import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  root: './',
  srcDir: "./src",
  site: 'https://cosykoala.app',
  integrations: [tailwind(), mdx()]
});
