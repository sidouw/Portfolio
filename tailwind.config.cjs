/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction:{
        'bounce':'cubic-bezier(.8, .5, .2, 1.4)'
      }
    },
  },
  plugins: [],
}
