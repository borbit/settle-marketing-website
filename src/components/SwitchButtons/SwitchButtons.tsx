import { clsx } from 'clsx'

type TSwitchButton<T extends string> = {
  value: T
  label: string
}

type TSwitchButtonsProps<T extends string> = {
  buttons: TSwitchButton<T>[]
  current: T
  onChange(value: T): void
  className?: string
}

export const SwitchButtons = <T extends string>({
  buttons,
  current,
  onChange,
  className,
}: TSwitchButtonsProps<T>): JSX.Element => (
  <div
    className={clsx(
      'container mx-auto grid min-h-12 grid-flow-col items-center justify-center',
      {
        'grid-cols-2 sm:grid-cols-[repeat(2,minmax(0,252px))]': buttons.length === 2,
        'grid-cols-3 sm:grid-cols-[repeat(3,minmax(0,162px))]': buttons.length === 3,
      },
      className,
    )}
  >
    {buttons.map(({ value, label }, i, { length }) => {
      const isFirst = (index = i) => index === 0
      const isLast = (index = i) => index === length - 1
      const isBetween = (index = i) => !isFirst(index) && !isLast(index)

      return (
        <button
          key={value}
          onClick={() => onChange(value)}
          className={clsx(
            'h-full overflow-hidden text-ellipsis text-nowrap px-2.5 py-2 text-base font-normal normal-case tracking-normal sm:py-3',
            current === value ? 'btn--primary' : 'btn--secondary',
            {
              'rounded-br-none rounded-tr-none border-r-0': isFirst(),
              'rounded-bl-none rounded-tl-none border-l-0': isLast(),
              ...(isBetween() && {
                'rounded-l-none rounded-r-none': true,
                'border-l-0': !isFirst(i - 1),
                'border-r-0': !isBetween(i + 1) && !isLast(i + 1),
              }),
            },
          )}
        >
          {label}
        </button>
      )
    })}
  </div>
)
