// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  output: 'server',
  adapter: vercel({}),
  vite: {
    server: process.env.REPL_ID  // for replit
      ? {
        allowedHosts: [
          '*.replit.dev',
          'libertytranscripts.com'
        ]
      }
      : {
        allowedHosts: [
          'localhost',
          '127.0.0.1'
        ]
      }
  }
});
