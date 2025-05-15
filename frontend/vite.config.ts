import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true
    ,
    proxy: {
      '/api': 'http://localhost:5000'
    }
  }, preview: {
    port: 3000,
    strictPort: true,
    host: '0.0.0.0',
    allowedHosts: true,
  }
})
