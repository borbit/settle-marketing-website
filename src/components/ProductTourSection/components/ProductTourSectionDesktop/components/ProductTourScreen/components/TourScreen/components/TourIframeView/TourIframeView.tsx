import { clsx } from 'clsx'
import { DemoIframe, IDemoIframeProps } from '@app/layout/DemoIframe/DemoIframe'

export interface ITourIframeViewProps extends Pick<IDemoIframeProps, 'src'> {
  invisible: boolean
}

export const TourIframeView: React.FC<ITourIframeViewProps> = ({ src, invisible }) => (
  <div
    className={clsx(
      'absolute inset-0 z-[3] h-[200%] w-[200%] -translate-x-1/4 -translate-y-1/4 scale-50 lg:h-[120%] lg:w-[120%] lg:-translate-x-[8.33%] lg:-translate-y-[8.33%] lg:scale-[.8335]',
      { invisible },
    )}
  >
    <DemoIframe src={src} />
  </div>
)
