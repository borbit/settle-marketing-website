import { clsx } from 'clsx'
import {
  ProductTourSectionDesktop,
  TProductTourSectionDesktopProps,
} from './components/ProductTourSectionDesktop/ProductTourSectionDesktop'
import {
  ProductTourSectionMobile,
  IProductTourSectionMobileProps,
} from './components/ProductTourSectionMobile/ProductTourSectionMobile'

export type TProductTourSectionProps = TProductTourSectionDesktopProps &
  IProductTourSectionMobileProps & {
    className?: string
  }

export const ProductTourSection: React.FC<TProductTourSectionProps> = ({
  title,
  subtitle,
  demo,
  form,
  className,
  startTourSubtitleNudge,
  ...props
}) => (
  <>
    <ProductTourSectionDesktop
      form={form}
      title={title}
      subtitle={subtitle}
      demo={demo}
      className={clsx('hidden md:block', className)}
      startTourSubtitleNudge={startTourSubtitleNudge}
      {...props}
    />
    <ProductTourSectionMobile
      title={title}
      subtitle={subtitle}
      form={form}
      className={clsx('block md:hidden', className)}
      {...props}
    />
  </>
)
