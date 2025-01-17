import { clsx } from 'clsx'

export const Tag: React.FC<React.PropsWithChildren<React.HTMLProps<HTMLSpanElement>>> = ({
  children,
  className,
  ...props
}) => (
  <span
    className={clsx(
      'flex-0 block rounded-2xl bg-brand-light-teal px-3 py-1.5 text-xs uppercase text-brand-forest-green',
      className,
    )}
    {...props}
  >
    {children}
  </span>
)
