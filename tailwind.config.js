/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html', // Caminho para o seu HTML
    './src/**/*.{js,jsx,ts,tsx}', // Caminho para seus arquivos JS ou TS
  ],
  darkMode: 'class', // Configuração de dark mode com base na classe
  theme: {
    extend: {
      spacing: {
        4: '1rem', // Adicionando a customização de espaçamento
      },
      invert: {
        25: '.25', // Definindo níveis de inversão
        50: '.5',
        75: '.75',
      },
    },
  },
  plugins: [],
}