import { clsx } from 'clsx'
import { XMarkIcon } from '@heroicons/react/24/solid'

export const CloseButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, ...props }) => (
  <button {...props} className={clsx('btn', className)}>
    <XMarkIcon className="size-7 text-brand-black" />
  </button>
)
