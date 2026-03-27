import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // base: '/frontend-app/',  // use for github only not docker
  plugins: [react()],
})
