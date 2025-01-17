import { clsx } from 'clsx'
import { times } from 'lodash'

interface IHamburgerButtonProps extends Pick<React.ComponentProps<'button'>, 'className' | 'onClick'> {
  variant?: 'light' | 'dark'
  open: boolean
}

export const HamburgerButton: React.FC<IHamburgerButtonProps> = ({ open, className, variant = 'dark', ...props }) => (
  <button className={clsx('group cursor-pointer', className)} {...props}>
    {times(3, (i) => (
      <span
        key={i}
        className={clsx('block h-0.5 w-6 transition-all duration-200 sm:w-8', {
          'bg-brand-dusty-pink group-hover:bg-brand-lime': variant === 'dark',
          'bg-brand-pine-green group-hover:bg-brand-forest-green': variant === 'light',
          'my-1.5': i === 1,
          'first:origin-center first:translate-y-2 first:rotate-45 last:-translate-y-2 last:-rotate-45 even:opacity-0':
            open,
        })}
      />
    ))}
  </button>
)
