import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react(),
    viteMockServe(),
  ],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src/') },
  },
  server: {
    open: true,
  },
}))
