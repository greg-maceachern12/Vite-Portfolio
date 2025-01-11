/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        notion: {
          default: '#2F3437',
          gray: '#787774',
          hover: '#E3E3E1',
          light: '#F7F6F3',
        },
      },
    },
  },
  plugins: [],
}