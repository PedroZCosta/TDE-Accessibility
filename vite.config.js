import { defineConfig } from 'vite';

export default defineConfig({
  root: './public', // Pasta onde o arquivo HTML está
  build: {
    outDir: '../dist', // A pasta de saída do build
  },
  base: '/', // Base da URL, ajuste se necessário
});