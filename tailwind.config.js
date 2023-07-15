module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  webpack(config) {
    config.infrastructureLogging = { debug: /PackFileCache/ }
    return config;
  },
  theme: {
    animation: {
      fade: 'fadeIn 2s ease-in-out',
      blink: 'blink 1.5s step-start 0s infinite'
    },
    keyframes: {
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
    },
    colors: {
      'purple': '#211C27',
      'darkPurple': '#1D1923',
      'pink': '#EDC0B4',
      'footer': '#E2DDDC',
      'red': '#AA3D42',
      'darkRed': '#8f2b2f',
      'green': '#8FE381',
      'orange': '#FFA500',
      'darkPink': '#c99587'
    },
    fontFamily: {
      'roboto': ['"Roboto Slab"', 'serif'],
      'jetbrains': ['"JetBrains Mono"', 'monospace'],
      'notoSans': ['"Noto Sans"', 'sans-serif']
    },
    extend: {}
  },
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer"
  ],
}
