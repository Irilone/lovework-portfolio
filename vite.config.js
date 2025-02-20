
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 8080,
    strictPort: true,
    allowedHosts: [
      'f4165080-5adc-4341-8b4c-e25a17f06f03.lovableproject.com',
      '.lovableproject.com',
      'localhost',
      '127.0.0.1'
    ],
    hmr: {
      host: 'f4165080-5adc-4341-8b4c-e25a17f06f03.lovableproject.com'
    }
  }
});
