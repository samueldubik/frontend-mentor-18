/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {},
    colors: {
      'blue'       : '#8486a9',
      'red'        : '#fb6087',
      'redDark'    : '#d04f6d',
      'white'      : '#ffffff',
      'desaturated': '#343650',
      'darkBlue'   : '#1e1f29',
      'black'      : '#191a24',
      'purple'     : '#30243a',
      'card-top'   : '#2c2c44',
      
    },

    fontFamily: {
      'custom' : ['Red Hat Text']
    },

    backgroundImage: {
      'stars' : "url('/src/assets/bg-stars.svg')",
      'hills' : "url('src/assets/pattern-hills.svg')"
    }
  },
  plugins: [],
}
