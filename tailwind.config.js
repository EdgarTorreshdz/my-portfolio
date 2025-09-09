/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3b82f6',
          light: '#93c5fd', // Color más claro para dark mode
          dark: '#2563eb',
        },
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
