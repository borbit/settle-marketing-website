export const scrollTopWithFocus = ({
  focusSelector = 'input:not([type="hidden"]):first-of-type',
  delay = 800,
} = {}) => {
  scrollTo({ top: 0, behavior: 'smooth' })
  setTimeout(() => {
    document.querySelector<HTMLElement>(focusSelector)?.focus()
  }, delay)
}
