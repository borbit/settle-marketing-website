/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 120,
  semi: false,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  arrowParens: 'always',
  endOfLine: 'lf',
  useTabs: false,
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['clsx'],
}
