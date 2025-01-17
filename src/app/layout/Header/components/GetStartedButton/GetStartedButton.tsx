'use client'
import { clsx } from 'clsx'
import { Link } from '@components/Link/Link'
import { appOnboardingUrl } from '@lib/consts/externalLinks'
import { ScrollTopButton } from '@components/ScrollTopButton/ScrollTopButton'
import { IOpenFormDialogButtonProps, OpenFormDialogButton } from '@components/OpenFormDialogButton/OpenFormDialogButton'

export interface IGetStartedButtonProps {
  href?: string
  label?: string
  mode?: 'scroll' | 'link'
  variant?: 'light' | 'dark'
  form?: IOpenFormDialogButtonProps['form']
}

export const GetStartedButton: React.FC<IGetStartedButtonProps> = ({
  label = 'Get started',
  mode = 'link',
  variant,
  href,
  form,
}) => {
  const className = clsx('px-3 py-1 sm:px-6 sm:py-3', {
    'btn--secondary--light': variant === 'dark',
    'btn--secondary': variant === 'light',
  })

  if (form) {
    return <OpenFormDialogButton form={form} label={label} className={className} />
  }

  if (mode === 'scroll' && !href) {
    return <ScrollTopButton label={label} className={className} />
  }

  return (
    <Link className={className} href={href ? href : appOnboardingUrl}>
      {label}
    </Link>
  )
}
