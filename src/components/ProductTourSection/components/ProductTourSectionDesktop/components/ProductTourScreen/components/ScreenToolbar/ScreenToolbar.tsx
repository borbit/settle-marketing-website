import { clsx } from 'clsx'
import { times } from 'lodash'
import { Link } from '@components/Link/Link'

export interface IScreenToolbarProps {
  demoSrc: string
}

export const ScreenToolbar: React.FC<IScreenToolbarProps> = ({ demoSrc }) => (
  <div className="grid grid-cols-[minmax(7.5rem,1fr)_minmax(0,37.5rem)_minmax(7.5rem,1fr)] gap-2 px-4 py-[0.4375rem]">
    <div className="flex items-center justify-start gap-2">
      {times(3, (i) => (
        <span key={i} className={clsx('size-3 rounded-full bg-[#dcdcdc]')} />
      ))}
    </div>
    <div className="rounded-[1.125rem] bg-brand-medium-grey p-0.5 text-center">
      <span className="select-none text-sm text-brand-dark">app.settle.co</span>
    </div>
    <div className="flex items-center justify-end">
      <Link
        href={demoSrc}
        target="_blank"
        className="flex shrink-0 items-center justify-center rounded-[0.875rem] px-2 py-[0.1875rem] inner-border inner-border-[#e7e7e7] hover:bg-gray-200"
      >
        <span className="text-center text-[0.6875rem] leading-normal text-brand-grey">Open tour in new tab</span>
      </Link>
    </div>
  </div>
)
