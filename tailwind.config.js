/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0B2A8F',
        accent: '#E63946',
        gold: '#F5DFA7',
        night: '#071427',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 30px rgba(230, 57, 70, 0.35)',
      },
    },
  },
  plugins: [],
};
