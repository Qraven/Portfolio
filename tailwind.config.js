module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'purple': '#211C27',
      'darkPurple': '#1D1923',
      'pink': '#EDC0B4',
      'footer': '#E2DDDC'
    },
    textShadow: { // defaults to {}
      'default': '0 2px 5px rgba(0, 0, 0, 0.5)',
      'lg': '0 2px 10px rgba(0, 0, 0, 0.5)',
    },
    fontFamily: {
      'roboto': ['"Roboto Slab"'],
    },
    extend: {}
  },
  plugins: [],
}
