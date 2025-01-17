'use client'

import { clsx } from 'clsx'
import { useEffect, useState, forwardRef } from 'react'
import { Transition } from '@headlessui/react'
import { usePathname } from 'next/navigation'
import { appLoginUrl } from '@lib/consts/externalLinks'
import { Link } from '@components/Link/Link'
import { useTailwindBreakpoint } from '@lib/hooks/useTailwindBreakpoint/useTailwindBreakpoint'
import { HamburgerButton } from './components/HamburgerButton/HamburgerButton'
import { Navigation } from '../Navigation/Navigation'

interface IHamburgerNavigationProps extends React.HTMLProps<HTMLDivElement> {
  variant?: 'light' | 'dark'
  backgroundColor?: string
  onOpenChange(open: boolean): void
}

export const HamburgerNavigation = forwardRef<HTMLDivElement, IHamburgerNavigationProps>(
  ({ className, variant = 'dark', backgroundColor, onOpenChange, ...props }, ref) => {
    const isMediaLg = useTailwindBreakpoint('lg')
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
      if (isMediaLg) {
        setOpen(false)
      }
    }, [isMediaLg])

    useEffect(() => {
      setOpen(false)
    }, [pathname])

    useEffect(() => {
      onOpenChange(open)
    }, [open, onOpenChange])

    useEffect(() => {
      const className = 'overflow-hidden'

      if (open) {
        document.body.classList.add(className)
      } else {
        document.body.classList.remove(className)
      }
      return () => {
        document.body.classList.remove(className)
      }
    }, [open])

    return (
      <div ref={ref} className={clsx('flex items-center justify-center', className)} {...props}>
        <HamburgerButton
          variant={variant}
          open={open}
          onClick={() => setOpen((open) => !open)}
          className="ml-3.5 md:ml-5"
        />
        <Transition
          show={open}
          as={Navigation}
          variant={variant}
          unmount={false}
          hamburgerMode={true}
          className={clsx(
            'absolute inset-x-0 bottom-0 top-12 z-30 flex h-screen w-screen flex-col overflow-auto px-S pb-[25vh] text-left sm:top-16 sm:px-10 sm:pb-[50vh]',
            {
              'bg-brand-pine-green': variant === 'dark' && !backgroundColor,
              'bg-brand-light-grey': variant === 'light' && !backgroundColor,
            },
          )}
          style={{ backgroundColor }}
          enter="transition-all duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-all duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Link
            className={clsx('my-S flex-shrink-0 self-start', {
              'btn--secondary--light': variant === 'dark',
              'btn--secondary': variant === 'light',
            })}
            href={appLoginUrl}
          >
            Login
          </Link>
        </Transition>
      </div>
    )
  },
)

HamburgerNavigation.displayName = 'HamburgerNavigation'
