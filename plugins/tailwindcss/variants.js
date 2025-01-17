const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss/types/config').PluginCreator} */
module.exports = plugin(({ addVariant, e, postcss }) => {
  // prevents sticky hover effects on touch devices
  addVariant('hover', ['@media (hover: hover) { &:hover }', '@media (hover: none) { &:active }'])
})
