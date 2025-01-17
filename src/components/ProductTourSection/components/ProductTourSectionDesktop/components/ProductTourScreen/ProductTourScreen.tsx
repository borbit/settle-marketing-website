import { clsx } from 'clsx'
import { ScreenToolbar, IScreenToolbarProps } from './components/ScreenToolbar/ScreenToolbar'
import { TourScreen, ITourScreenProps } from './components/TourScreen/TourScreen'

export interface IProductTourScreenProps {
  className?: string
  demo: {
    src: ITourScreenProps['src'] & IScreenToolbarProps['demoSrc']
    preview: ITourScreenProps['preview']
  }
}

export const ProductTourScreen: React.FC<IProductTourScreenProps> = ({ demo, className }) => (
  <div className={clsx('overflow-hidden rounded-xl bg-[#f8f8f8] drop-shadow-3xl', className)}>
    <ScreenToolbar demoSrc={demo.src} />
    <TourScreen src={demo.src} preview={demo.preview} />
  </div>
)
