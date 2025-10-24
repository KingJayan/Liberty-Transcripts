// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  output: 'server',
  server: {
    port: 5000,
    host: '0.0.0.0'
  },
  adapter: vercel(),
  build: {
    format: 'file'
  },
  vite: {
    server: {
      allowedHosts: [
        // Allow your Replit dev host
        '36afafe3-3852-46f3-a08c-39e71a8c2b6a-00-27dekw7dxcpve.riker.replit.dev',
        // Optionally allow all replit.dev subdomains (future-proof)
        '*.replit.dev',
        'libertytranscripts2.w3spaces.com/',
        'libertytranscripts.com'
      ]
    }
  }
});
