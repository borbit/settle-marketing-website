const { fontFamily: { sans } = {} } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
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
      animation: {
        'logos-loop': 'logos-loop 120s linear infinite',
      },
      keyframes: {
        'logos-loop': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50% - (theme(spacing.8) / 2)))' },
        },
      },
      dropShadow: {
        '3xl': '0 0.875rem 2.25rem rgba(0, 0, 0, 0.22)',
      },
      fontSize: {
        unset: ['unset', { lineHeight: 'unset', letterSpacing: 'unset', fontWeight: 'unset' }],
      },
      fontFamily: {
        inter: ['var(--font-inter)', ...sans],
        'marr-sans': ['var(--font-marr-sans)', ...sans],
        beausite: ['var(--font-beausite-classic)', ...sans],
      },
      backgroundImage: {
        'hero-mobile': "url('/graphics/hero/home_mobile.png')",
        'hero-desktop': "url('/graphics/hero/home_desktop.png')",
      },
      fontWeight: {
        book: 350,
      },
    },
  },
  corePlugins: { container: false },
  future: { hoverOnlyWhenSupported: true },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-inner-border'),
    require('./plugins/tailwindcss/variants'),
    require('./plugins/tailwindcss/utilities'),
    require('./plugins/tailwindcss/components'),
  ],
}
