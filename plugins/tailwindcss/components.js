const addContainer = require('./lib/addContainer')
const addButton = require('./lib/addButton')
const addCard = require('./lib/addCard')

/** @type {import('tailwindcss/types/config').PluginCreator} */
module.exports = (api) => {
  addContainer(api)
  addButton(api)
  addCard(api)
}
