import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: path.resolve(path.join(__dirname, 'src/components'))
      },
      {
        find: '@constants',
        replacement: path.resolve(path.join(__dirname, 'src/constants'))
      },
      {
        find: '@hooks',
        replacement: path.resolve(path.join(__dirname, 'src/hooks'))
      },
      {
        find: '@interfaces',
        replacement: path.resolve(path.join(__dirname, 'src/interfaces'))
      },
      {
        find: '@pages',
        replacement: path.resolve(path.join(__dirname, 'src/pages'))
      },
      {
        find: '@models',
        replacement: path.resolve(path.join(__dirname, 'src/models'))
      },
      {
        find: '@router',
        replacement: path.resolve(path.join(__dirname, 'src/router'))
      },
      {
        find: '@schemas',
        replacement: path.resolve(path.join(__dirname, 'src/schemas'))
      },
      {
        find: '@services',
        replacement: path.resolve(path.join(__dirname, 'src/services'))
      },
    ]
  }
});
