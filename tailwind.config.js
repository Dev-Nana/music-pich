/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'purple': {
          150: '#9215CB'
        },
        'gray': {
          450: '#757575',
          950: '#121724',
          960: '#404657',
        },
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      textShadow: {
        lilac: 'rgba(255, 0, 255, 1) 1px 1px 20px',
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('@tailwindcss/forms'),
  ],
}