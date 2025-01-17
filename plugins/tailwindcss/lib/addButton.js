const getBorderBackgroundColor = (color) => ({ borderColor: color, backgroundColor: color })

const borderWidth = '1px'
const calcWithoutBorder = (value) => `calc(${value} - ${borderWidth})`

const hoverOrMobileActive = (styles) => ({
  '@media (hover: hover)': { '&:hover': styles },
  '@media (hover: none)': { '&:active': styles },
})

/** @type {import('tailwindcss/types/config').PluginCreator} */
module.exports = ({ addComponents, theme }) => {
  const buttonBase = {
    display: 'block',
    cursor: 'pointer',
    padding: `${calcWithoutBorder(theme('spacing[3.5]'))} ${calcWithoutBorder(theme('spacing.6'))}`,
    fontSize: theme('fontSize.sm'),
    fontFamily: theme('fontFamily.beausite'),
    fontWeight: theme('fontWeight.bold'),
    letterSpacing: theme('letterSpacing.wider'),
    lineHeight: '100%',
    textAlign: 'center',
    textTransform: 'uppercase',
    borderRadius: theme('borderRadius[3.5xl]'),
    borderWidth,
    borderStyle: 'solid',
    borderColor: 'transparent',
    '@screen md': {
      padding: `${calcWithoutBorder(theme('spacing[4.5]'))} ${calcWithoutBorder(theme('spacing.6'))}`,
    },
  }

  addComponents({
    '.btn': {
      ...buttonBase,
      padding: calcWithoutBorder(theme('spacing.1')),
      '@screen md': {
        padding: calcWithoutBorder(theme('spacing.1')),
      },
      ...hoverOrMobileActive({
        ...getBorderBackgroundColor(theme('colors.gray.200')),
      }),
      '&:active': {
        ...getBorderBackgroundColor(theme('colors.gray.300')),
      },
    },
    '.btn--primary': {
      ...buttonBase,
      ...getBorderBackgroundColor(theme('colors.brand.pine-green')),
      color: theme('colors.white'),
      ...hoverOrMobileActive({
        ...getBorderBackgroundColor(theme('colors.brand.forest-green')),
        color: theme('colors.brand.light-teal'),
      }),
    },
    '.btn--primary--light': {
      ...buttonBase,
      ...getBorderBackgroundColor(theme('colors.brand.light-teal')),
      color: theme('colors.brand.pine-green'),
      ...hoverOrMobileActive({
        ...getBorderBackgroundColor(theme('colors.brand.lime')),
        color: theme('colors.brand.pine-green'),
      }),
    },
    '.btn--secondary': {
      ...buttonBase,
      borderColor: 'currentColor',
      color: theme('colors.brand.pine-green'),
      ...hoverOrMobileActive({
        color: theme('colors.brand.forest-green'),
      }),
    },
    '.btn--secondary--light': {
      ...buttonBase,
      borderColor: 'currentColor',
      color: theme('colors.brand.dusty-pink'),
      ...hoverOrMobileActive({
        color: theme('colors.brand.lime'),
      }),
    },
    '.btn--tertiary': {
      ...buttonBase,
      letterSpacing: theme('letterSpacing.normal'),
      color: theme('colors.brand.pine-green'),
      ...hoverOrMobileActive({
        color: theme('colors.brand.forest-green'),
      }),
    },
    '.btn--tertiary--light': {
      ...buttonBase,
      letterSpacing: theme('letterSpacing.normal'),
      color: theme('colors.white'),
      ...hoverOrMobileActive({
        color: theme('colors.brand.lime'),
      }),
    },
    '.btn--with-arrow': {
      '&::after': {
        content: "'→'",
        display: 'inline-block',
        marginLeft: theme('spacing[1.5]'),
      },
    },
    '.btn--small': {
      '@screen md': {
        padding: buttonBase.padding,
      },
    },
  })
}
