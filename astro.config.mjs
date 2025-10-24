// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [vue()],
  output: 'server', // enables SSR
  adapter: vercel({}), // no arguments here
  vite: {
    server: {
      allowedHosts: [
        '*.replit.dev',
        'libertytranscripts2.w3spaces.com',
        'libertytranscripts.com'
      ]
    }
  }
});
