import { clsx } from 'clsx'

interface IToggleButtonProps {
  selected: boolean
  title: string
  description: string
  legalNote?: string
  className?: ClassName
  onClick(): void
}

export const ToggleButton: React.FC<IToggleButtonProps> = ({
  selected,
  title,
  onClick,
  description,
  legalNote,
  className,
  ...props
}) => (
  <button
    {...props}
    onClick={onClick}
    className={clsx(
      'flex cursor-pointer flex-col gap-3 rounded-2.5xl px-S py-S text-left md:px-10',
      selected
        ? 'border-2 border-brand-dusty-pink bg-white shadow-sm md:shadow-xl'
        : 'm-px border border-brand-grey border-opacity-20 bg-transparent active:bg-white hover:m-0 hover:border-2 hover:border-opacity-30',
      className,
    )}
  >
    <h5>{title}</h5>
    <p className="text-brand-black">{description}</p>
    {legalNote && <span className="text-sm text-brand-dark">{legalNote}</span>}
  </button>
)
