import textShadow from 'tailwindcss-textshadow';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': { 'max': '480px' },
      },
      colors: {
        'purple': {
          150: '#9215CB',
          1000: '#3B0E2C',
        },
        'gray': {
          450: '#757575',
          950: '#121724',
          960: '#404657',
        }
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      textShadow: {
        lilac: 'rgba(255, 0, 255, 1) 1px 1px 20px',
      },
      backgroundImage: {
        'radial-gray': 'radial-gradient(circle, #343A43, #343A43, #252B36, #1D2331)',
      },
    },
  },
  plugins: [
    textShadow,
    forms,
  ],
};
