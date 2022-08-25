/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    extend: {
      colors: {
        'darkerBlue': '#1a1b26',
        'darkBlue': '#23283d',
      },
    },
  },
  plugins: [],
}
