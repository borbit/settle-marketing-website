import { clsx } from 'clsx'
import { ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface IDropdownItem extends Pick<React.ComponentProps<typeof Link>, 'href'> {
  label: string
}

interface INavigationGroupProps {
  variant?: 'light' | 'dark'
  dropdown?: IDropdownItem[]
  hamburgerMode?: boolean
}

export const NavigationGroup: React.FC<React.PropsWithChildren<INavigationGroupProps>> = ({
  variant = 'dark',
  children,
  dropdown = [],
  hamburgerMode,
}) => {
  const withDropdown = Boolean(dropdown.length)

  if (hamburgerMode) {
    return (
      <li
        className={clsx('w-full border-b py-S', {
          'border-brand-forest-green': variant === 'dark',
          'border-brand-dusty-pink': variant === 'light',
        })}
      >
        <p
          className={clsx(withDropdown ? 'font-bold ' : 'hover:underline hover:underline-offset-4', {
            'text-brand-pine-green': variant === 'light',
            [withDropdown ? 'text-brand-dusty-pink' : 'text-white']: variant === 'dark',
          })}
        >
          {children}
        </p>
        {withDropdown && (
          <ul className="mt-S flex flex-col items-start gap-S">
            {dropdown.map(({ label, href }) => (
              <li key={`${label}-${href}`}>
                <p
                  className={clsx({
                    'text-white': variant === 'dark',
                    'text-brand-pine-green': variant === 'light',
                  })}
                >
                  <Link href={href} className="hover:underline hover:underline-offset-4">
                    {label}
                  </Link>
                </p>
              </li>
            ))}
          </ul>
        )}
      </li>
    )
  }

  return (
    <li
      tabIndex={0}
      className={clsx('group relative', {
        'text-white hover:text-brand-lime': variant === 'dark',
        'text-brand-pine-green hover:text-brand-forest-green': variant === 'light',
      })}
    >
      <span className="flex cursor-pointer items-center text-nowrap">
        {children}{' '}
        {withDropdown && <ChevronDownIcon width={14} height={14} className="ml-1 translate-y-[0.05em] stroke-[3px]" />}
      </span>
      {withDropdown && (
        <div className="invisible absolute left-1/2 top-full min-w-48 -translate-x-1/2 cursor-default opacity-0 transition-all duration-100 group-hover:visible group-hover:opacity-100 group-focus:visible group-focus:opacity-100">
          <ul className="mt-2.5 flex flex-col gap-4 text-nowrap rounded-2xl bg-brand-light-teal p-6 text-brand-pine-green">
            {dropdown.map(({ label, href }) => (
              <li key={`${label}-${href}`}>
                <Link
                  href={href}
                  data-after={label}
                  className="block font-normal after:block after:overflow-hidden after:font-semibold after:leading-[0] after:content-[attr(data-after)] hover:font-semibold"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  )
}
