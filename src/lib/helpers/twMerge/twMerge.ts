// eslint-disable-next-line no-restricted-imports
import { extendTailwindMerge } from 'tailwind-merge'
import { times } from 'lodash'

const buttonClassGroup = [
  'btn',
  'btn--primary',
  'btn--primary--light',
  'btn--secondary',
  'btn--secondary--light',
  'btn--tertiary--light',
]

const aspectClassGroup = [
  'aspect-none',
  'aspect-3/4',
  ...times(16, (i) => `aspect-${i}`),
  ...times(16, (i) => `aspect-h-${i}`),
  ...times(16, (i) => `aspect-w-${i}`),
]

export const twMerge = extendTailwindMerge<'btn' | 'aspect' | 'font'>({
  extend: {
    classGroups: {
      btn: buttonClassGroup,
      aspect: aspectClassGroup,
    },
  },
})
