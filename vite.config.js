import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Supportive-General-Newt-React/',
  server: {
    // nécessaire pour que Vite serve index.html pour toutes les routes
    historyApiFallback: true
  },
  build: {
    rollupOptions: {
      input: '/index.html'
    }
  }
})
