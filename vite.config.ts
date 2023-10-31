import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

export default defineConfig({
  plugins: [
    svelte(),
    nodePolyfills()
  ],
  base: '/nots',
  build: {
    outDir: 'nots',
  },
})
