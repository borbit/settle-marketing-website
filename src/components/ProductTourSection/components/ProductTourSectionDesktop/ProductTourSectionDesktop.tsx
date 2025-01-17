import { isArray } from 'lodash'
import { SectionContainer, ISectionContainerProps } from '@components/SectionContainer/SectionContainer'
import { ProductTourScreen, IProductTourScreenProps } from './components/ProductTourScreen/ProductTourScreen'
import { SectionSubtitle, ISectionSubtitleProps } from './components/SectionSubtitle/SectionSubtitle'
import {
  MultipleProductToursScreen,
  TMultipleProductToursScreenDemoItem,
} from './components/MultipleProductToursScreen/MultipleProductToursScreen'

export type TProductTourSectionDesktopProps = Pick<ISectionContainerProps, 'id' | 'title' | 'subtitle' | 'className'> &
  Pick<ISectionSubtitleProps, 'form'> & {
    subtitle: ISectionSubtitleProps['children']
    startTourSubtitleNudge?: ISectionSubtitleProps['startTourNudge']
    demo: IProductTourScreenProps['demo'] | TMultipleProductToursScreenDemoItem[]
  }

export const ProductTourSectionDesktop: React.FC<TProductTourSectionDesktopProps> = ({
  title,
  subtitle,
  demo,
  form,
  startTourSubtitleNudge,
  ...props
}) => (
  <SectionContainer
    title={title}
    subtitle={
      <SectionSubtitle form={form} startTourNudge={startTourSubtitleNudge}>
        {subtitle}
      </SectionSubtitle>
    }
    slotProps={{ title: { className: '[&>*]:text-inherit' } }}
    {...props}
  >
    {isArray(demo) ? <MultipleProductToursScreen demos={demo} /> : <ProductTourScreen demo={demo} />}
  </SectionContainer>
)
