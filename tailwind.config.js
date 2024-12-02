/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'drive-gray': '#F8F9FA',
        'drive-border': '#DADCE0',
      }
    },
  },
  plugins: [],
} 