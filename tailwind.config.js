/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        'Poppins':'Poppins',
        'SecularOne': 'Secular One',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}