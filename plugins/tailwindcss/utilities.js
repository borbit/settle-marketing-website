/** @type {import('tailwindcss/types/config').PluginCreator} */
module.exports = ({ addUtilities }) => {
  addUtilities({
    '.no-scrollbar': {
      '-ms-overflow-style': 'none',
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
  })
}
