const addButton = require('./lib/addButton')

/** @type {import('tailwindcss/types/config').PluginCreator} */
module.exports = (api) => {
  addButton(api)
}
