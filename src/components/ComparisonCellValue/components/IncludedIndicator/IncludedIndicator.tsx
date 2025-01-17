import { clsx } from 'clsx'
import { CheckIcon, XMarkIcon } from '@heroicons/react/24/outline'

export const IncludedIndicator: React.FC<{ value: boolean }> = ({ value }) => {
  const Icon = value ? CheckIcon : XMarkIcon

  return (
    <Icon
      className={clsx('inline-block size-6 shrink-0 stroke-2', value ? 'text-brand-forest-green' : 'text-rose-600')}
    />
  )
}
