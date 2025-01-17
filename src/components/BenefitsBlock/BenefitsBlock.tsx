import { clsx } from 'clsx'
import { FeatureItem, type IFeatureItemProps } from '@components/FeatureItem/FeatureItem'

interface IBenefitsBlockItem extends Omit<IFeatureItemProps, 'icon'> {
  src: IFeatureItemProps['icon']['src']
}

export interface IBenefitsBlockProps {
  items: IBenefitsBlockItem[]
  titleTag?: IFeatureItemProps['titleTag']
  className?: string
}

export const BenefitsBlock: React.FC<IBenefitsBlockProps> = ({ items, titleTag, className }) => (
  <div
    className={clsx(
      'grid grid-cols-1 gap-S',
      {
        'md:grid-cols-2': items.length === 2,
        'md:grid-cols-3': items.length === 3,
        'sm:grid-cols-2 lg:grid-cols-4': items.length === 4,
      },
      className,
    )}
  >
    {items.map(({ title, src, ...props }, index) => (
      <FeatureItem key={index} title={title} icon={{ src, alt: title }} titleTag={titleTag} {...props} />
    ))}
  </div>
)
