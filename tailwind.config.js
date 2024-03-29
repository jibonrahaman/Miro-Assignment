const plugin = require('tailwindcss/plugin')

// Rotate X utilities
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-x-0': {
      transform: 'rotateX(0deg)',
    },
    '.rotate-x-90': {
      transform: 'rotateX(90deg)',
    },
  })
})


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth:{
        'container' : "1120px"
      },
      colors:{
        'blue':"#4262ff"
      },
      fontFamily:{
        'inter': ["Inter"] 
      },
      
    },
  },
  plugins: [rotateX],
}