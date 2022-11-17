/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
   './public/**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
         'sans': ['Fira Sans', ...defaultTheme.fontFamily.sans],
       }
    },
  },
  plugins: [],
}
