/** @type {import('tailwindcss/types/config').PluginCreator} */
module.exports = ({ addComponents, theme }) =>
  addComponents({
    '.container': {
      margin: '0 auto',
      width: '100%',
      maxWidth: '100%',
      padding: `0 ${theme('spacing.6')}`,
      '@screen md': {
        padding: `0 ${theme('spacing.10')}`,
      },
      '@screen xl': {
        maxWidth: '1440px',
        padding: `0 ${theme('spacing.20')}`,
      },
    },
  })
