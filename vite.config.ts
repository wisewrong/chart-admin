import { defineConfig, loadEnv } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

function resolve(p: string) {
  return path.resolve(__dirname, p);
}

const STYLE_VAR_PATH = resolve('src/styles/themes/default.less');

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // 根据当前工作目录中的 `mode` 加载 .env 文件
  // 设置第三个参数为 '' 来加载所有环境变量，而不管是否有 `VITE_` 前缀。
  const env = loadEnv(mode, process.cwd());
  const { VITE_BASE_URL } = env;

  return {
    base: VITE_BASE_URL,
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
  };
});
