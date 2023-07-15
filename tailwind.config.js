/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'NotAllWhite': '#ebebeb',
      'NotAllBlack': '#141414',
      'Ember': '#F95146',
      'Tangy': '#F36E2E',
      'Citron': '#EBDE3A',
      'Verdant': '#20C642',
      'Serene': '#53AAF2',
      'Obsidian': '#8D40EE',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
    extend: {
      spacing: {
        DEFAULT: '8px'
      },
      borderRadius: {
        DEFAULT: '8px',
      }
    }
  },
  plugins: [],
}


