import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: '@constants',
        replacement: path.resolve(__dirname, 'src/constants')
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, 'src/hooks')
      },
      {
        find: '@interfaces',
        replacement: path.resolve(__dirname, 'src/interfaces')
      },
      {
        find: '@pages',
        replacement: path.resolve(__dirname, 'src/pages')
      },
      {
        find: '@router',
        replacement: path.resolve(__dirname, 'src/router')
      },
      {
        find: '@schemas',
        replacement: path.resolve(__dirname, 'src/schemas')
      },
      {
        find: '@services',
        replacement: path.resolve(__dirname, 'src/services')
      },
    ]
  }
});
