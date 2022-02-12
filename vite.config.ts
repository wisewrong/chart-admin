import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 8090,
  },
  build: {
    cssTarget: 'chrome61',
    rollupOptions: {
      output: {
        manualChunks: {
          antd: ['antd'],
          axios: ['axios'],
          'lodash-es': ['lodash-es'],
        },
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        // 生产环境移除 console & debugger
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
});
