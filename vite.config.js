import { defineConfig } from 'vite';

export default defineConfig({
  root: './public', // Definindo a pasta 'public' como a raiz
  build: {
    outDir: '../dist', // Pasta de saída do build
    rollupOptions: {
      input: {
        main: './public/index.html', // Adicionando o 'index.html'
        recursos: './public/recursos.html', // Adicionando 'recursos.html'
        contato: './public/contato.html', // Adicionando 'contato.html'
        blog: './public/blog.html', // Adicionando 'contato.html'
        sobrenos: './public/sobrenos.html' // Adicionando 'contato.html'
      }
    }
  },
  base: '/', // Isso vai garantir que a base da URL seja relativa
});