'use client'

import { scrollTopWithFocus } from '@lib/helpers/scrollTopWithFocus/scrollTopWithFocus'

interface IScrollTopButtonProps {
  label: string
  className?: string
  focusSelector?: string
}

export const ScrollTopButton: React.FC<IScrollTopButtonProps> = ({
  label,
  focusSelector,
  className = 'btn--secondary',
}) => {
  const handleClick = () => {
    scrollTopWithFocus({ focusSelector })
  }

  return (
    <button onClick={handleClick} className={className}>
      {label}
    </button>
  )
}
