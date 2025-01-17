import { clsx } from 'clsx'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

export interface ISliderButtonProps {
  available: boolean
  direction: 'left' | 'right'
  className?: ClassName
  onClick: (direction: ISliderButtonProps['direction']) => void
}

export const SliderButton: React.FC<ISliderButtonProps> = ({ available, direction, className, onClick }) => {
  const Icon = direction === 'left' ? ArrowLeftIcon : ArrowRightIcon

  return (
    <button
      onClick={() => onClick(direction)}
      className={clsx(
        'btn absolute top-1/2 -translate-y-1/2 bg-gray-300 p-2 opacity-90 hover:opacity-100',
        !available && 'invisible',
        direction === 'left' && 'left-4.5 -translate-x-full',
        direction === 'right' && 'right-4.5 translate-x-full',
        className,
      )}
    >
      <Icon className="size-5 text-brand-dark" />
    </button>
  )
}
