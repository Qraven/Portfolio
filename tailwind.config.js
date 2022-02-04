module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    animation: {
      fade: 'fadeIn 2s ease-in-out',
      blink: 'blink 1.5s step-start 0s infinite'
    },

    // that is actual animation
    keyframes: theme => ({
      fadeIn: {
        '0%': {opacity: '0'},
        '25%': {opacity: '0.3'},
        '50%': {opacity: '0.6'},
        '75%': {opacity: '0.8'},
        '100%': {opacity: '1'}
      },
      blink: {
        '50%': {opacity: '0'}
      }
    }),
    colors: {
      'purple': '#211C27',
      'darkPurple': '#1D1923',
      'pink': '#EDC0B4',
      'footer': '#E2DDDC',
      'red': '#AA3D42'
    },
    textShadow: { // defaults to {}
      'default': '0 2px 5px rgba(0, 0, 0, 0.5)',
      'lg': '0 2px 10px rgba(0, 0, 0, 0.5)',
    },
    fontFamily: {
      'roboto': ['"Roboto Slab"'],
      'jetbrains': ['"JetBrains Mono']
    },
    extend: {}
  },
  plugins: [],
}
