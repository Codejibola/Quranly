/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
theme: {
  extend: {
    colors: {
      background: '#0d0d0d',
      surface: '#1a1a1a',
      text: '#e5e7eb',
      accent: '#0ea5e9',
      glow: '#22d3ee',
    },
    fontFamily: {
      arabic: ['"Amiri"', 'serif'],
    },
  },
}
,
  plugins: [],
}
