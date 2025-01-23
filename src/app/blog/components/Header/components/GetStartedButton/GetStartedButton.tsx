import { clsx } from 'clsx'
import Link from 'next/link'

export interface IGetStartedButtonProps {
  label?: string
  variant?: 'light' | 'dark'
}

export const GetStartedButton: React.FC<IGetStartedButtonProps> = ({ label = 'Get started', variant }) => {
  return (
    <Link
      className={clsx('px-3 py-1 sm:px-6 sm:py-3', {
        'btn--secondary--light': variant === 'dark',
        'btn--secondary': variant === 'light',
      })}
      href="/"
    >
      {label}
    </Link>
  )
}
