import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allow external connections
    allowedHosts: [
      'joya-unconvolute-matthias.ngrok-free.dev',
      '.ngrok-free.dev', // Allow all ngrok free domains
      '.ngrok.io', // Allow all ngrok domains
      'localhost'
    ]
  }
})
