/** @type {import('tailwindcss/types/config').PluginCreator} */
module.exports = ({ addComponents, theme }) => {
  const cardBase = {
    display: 'block',
    borderRadius: theme('borderRadius[4xl]'),
    backgroundColor: theme('colors.white'),
    padding: `${theme('spacing.M')} ${theme('spacing.S')}`,
    '@screen sm': {
      padding: `${theme('spacing.M')} ${theme('spacing.10')}`,
    },
  }

  addComponents({
    '.card': cardBase,
    '.card--dark': {
      ...cardBase,
      color: theme('colors.white'),
      backgroundColor: theme('colors.brand.pine-green'),
    },
  })
}
