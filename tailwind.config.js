/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        'container' : "1320px"
      },
      colors:{
        'blue':"#4262ff"
      }
    },
  },
  plugins: [],
}