import { clsx } from 'clsx'
import { PlayCircleIcon } from '@heroicons/react/24/solid'
import { Spinner } from '@components/Spinner/Spinner'

interface IStartTourButtonProps {
  loading: boolean
  onClick: () => void
}

export const StartTourButton: React.FC<IStartTourButtonProps> = ({ onClick, loading }) => (
  <div className="group absolute right-1/2 top-1/2 z-[2] -translate-y-1/2 translate-x-1/2">
    <button
      onClick={onClick}
      className={clsx(
        'btn--primary btn--small flex animate-bounce items-center gap-2.5 shadow-2xl [animation-duration:3s]',
        loading ? '[animation-play-state:paused]' : 'group-hover:[animation-play-state:paused]',
      )}
    >
      {loading ? <Spinner size="small" /> : <PlayCircleIcon className="size-6 text-brand-dusty-pink" />}
      <span>Start Tour</span>
    </button>
  </div>
)
