import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import svgr from "vite-plugin-svgr"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
    tailwindcss()
  ],
  build: {
    // Memastikan output build kompatibel dengan Cloudflare Workers
    target: 'es2022',
    outDir: 'dist',
    assetsDir: 'assets',
    // Mengoptimalkan ukuran bundle
    minify: 'terser',
    // Memastikan semua kode diproses dengan benar
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})
