// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  output: 'server',
  server: {
    port: 5000,
    host: '0.0.0.0'
  },
  build: {
    format: 'file'
  }
});
