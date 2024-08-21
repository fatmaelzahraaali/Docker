import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// vite.config.js
export default {
  server: {
    host: '0.0.0.0',  // Listen on all interfaces
    port: 8080,        // Ensure this matches the port exposed in Docker
  },
};