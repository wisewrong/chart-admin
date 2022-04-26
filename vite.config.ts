import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

function resolve(p: string) {
  return path.resolve(__dirname, p);
}

const STYLE_VAR_PATH = resolve('src/styles/themes/default.less');

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
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${STYLE_VAR_PATH}";`,
        },
      },
    },
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
