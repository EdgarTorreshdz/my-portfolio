/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D4D90',
        secondary: '#F7A82F',
        // Para modo oscuro, puedes agregar variantes
        'primary-dark': '#1E3A8A',
        'secondary-dark': '#D97706'
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
