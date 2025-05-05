import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import mkcert from 'vite-plugin-mkcert'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 3000,
    https: {}, // Leave this as an empty object, mkcert will automatically handle the certificate
    proxy: {
      '/api': {
        target: 'https://localhost:5001',
        changeOrigin: true,
        secure: false, // tells Vite to ignore SSL cert validation for the proxy
      },
    },
  },
  plugins: [react(), mkcert()],
})
