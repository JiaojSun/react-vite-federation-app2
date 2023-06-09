import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import dns from 'dns';

dns.setDefaultResultOrder('verbatim');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shared',
      filename: 'shared.js',
      exposes: {
        './Button': './src/components/Button/index'
      },
      shared: ['react']
    })
  ],
  preview: {
    host: 'localhost',
    port: 5001,
    strictPort: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false
  },
  css: {
    preprocessorOptions: {
      sass: {
        sassOptions: {
          // 驼峰转换为短横线风格
          indentWidth: 2, // 使用两个空格缩进
          includePaths: []
        }
      }
    }
  }
});
