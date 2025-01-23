'use client'

import { clsx } from 'clsx'
import Link from 'next/link'
import { SettleLogo } from '@components/SettleLogo/SettleLogo'
import { useWithDefaultBackground } from './hooks/useWithDefaultBackground/useWithDefaultBackground'
import { Navigation } from './components/Navigation/Navigation'
import { HamburgerNavigation } from './components/HamburgerNavigation/HamburgerNavigation'
import { GetStartedButton } from './components/GetStartedButton/GetStartedButton'

export interface IHeaderProps {
  variant?: 'light' | 'dark'
  backgroundColor?: string
  logo?: React.ElementType
}

export const Header: React.FC<IHeaderProps> = ({ variant = 'dark', backgroundColor, logo: Logo = SettleLogo }) => {
  const { withDefaultBackground, onHandleHamburgerNavigationOpen } = useWithDefaultBackground({ backgroundColor })

  return (
    <header
      className={clsx('sticky inset-x-0 top-0 z-30 transition-colors duration-300', {
        'bg-brand-pine-green': variant === 'dark' && withDefaultBackground,
        'bg-brand-light-grey': variant === 'light' && withDefaultBackground,
      })}
      style={{ backgroundColor: withDefaultBackground ? undefined : backgroundColor }}
    >
      <div className="container relative flex items-center bg-inherit py-XS">
        <Link href="/">
          <Logo
            className={clsx('h-6 max-w-20 shrink-0 sm:h-auto md:max-w-24', {
              'text-white': variant === 'dark',
              'text-brand-pine-green': variant === 'light',
            })}
          />
        </Link>
        <Navigation variant={variant} className="mx-10 my-2.5 hidden lg:block" />
        <div className="ml-auto flex items-center justify-center">
          <Link
            className={clsx('hidden py-3 sm:block', {
              'btn--tertiary--light': variant === 'dark',
              'btn--tertiary': variant === 'light',
            })}
            href="/"
          >
            Login
          </Link>
          <GetStartedButton variant={variant} />
          <HamburgerNavigation
            variant={variant}
            className="block lg:hidden"
            backgroundColor={withDefaultBackground ? undefined : backgroundColor}
            onOpenChange={onHandleHamburgerNavigationOpen}
          />
        </div>
      </div>
    </header>
  )
}
