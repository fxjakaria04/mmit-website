/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './*.html'],
  theme: {
    extend: {
      colors: {
        'primary': '#55B748',
        'secondary': '#4F4BFD',
        'text-color': '#0E0E0E',
        'text-primary': '#00C193',
        'alt': '#EFBA00'
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

