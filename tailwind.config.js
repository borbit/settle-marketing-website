const { fontFamily: { sans } = {} } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        '2.5xl': '1.25rem' /* 20px */,
        '3.5xl': '2rem' /* 32px */,
        '4xl': '2.5rem' /* 40px */,
        '1/2': '50%',
      },
      spacing: {
        XS: '0.75rem' /* 12px */,
        4.5: '1.125rem' /* 18px */,
        S: '1.5rem' /* 24px */,
        M: '2.75rem' /* 44px */,
        18: '4.5rem' /* 72px */,
        L: '4.75rem' /* 76px */,
        22: '5.5rem' /* 88px */,
      },
      colors: {
        brand: {
          'light-grey': '#f7f7f7',
          grey: '#999',
          'medium-grey': '#ededed',
          dark: '#555',
          black: '#333',
          'light-teal': '#e3f4f0',
          lime: '#d5f27e',
          'forest-green': '#3e8672',
          'pine-green': '#004d3b',
          'dark-teal': '#093a2f',
          'dark-green': '#002513',
          cream: '#fffdb5',
          stone: '#f7f7f7',
          'dusty-pink': '#ffc6d1',
        },
      },
      fontFamily: {
        merriweather: ['var(--font-merriweather)', ...sans],
        inter: ['var(--font-inter)', ...sans],
        dm: ['var(--font-dm)', ...sans],
      },
    },
  },
  future: { hoverOnlyWhenSupported: true },
  plugins: [require('@tailwindcss/aspect-ratio'), require('./plugins/tailwindcss/components')],
}
