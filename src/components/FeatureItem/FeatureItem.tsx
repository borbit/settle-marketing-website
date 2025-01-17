import { clsx } from 'clsx'
import NextImage, { ImageProps } from 'next/image'
import type { O } from 'ts-toolbelt'
import { Link } from '@components/Link/Link'

export interface IFeatureItemProps {
  title: string
  titleTag?: HTMLHeadingElementTagName
  description?: string
  className?: ClassName
  icon: O.Optional<ImageProps, 'alt'>
  link?: Omit<React.ComponentProps<typeof Link>, 'children'> & { label: string }
}

export const FeatureItem: React.FC<IFeatureItemProps> = ({
  title,
  description,
  titleTag: TitleTag = description ? 'h3' : 'h5',
  icon,
  link,
  className,
}) => (
  <div className={clsx('flex flex-1 flex-col items-center px-5 text-center', className)}>
    <NextImage
      width={120}
      height={120}
      priority={true}
      {...icon}
      alt={icon.alt ?? title}
      placeholder={icon.placeholder ?? 'empty'}
      className={clsx('h-[120px] object-contain', icon.className)}
    />
    <TitleTag className="mt-S whitespace-pre-wrap">{title}</TitleTag>
    {description && <p className="mt-XS">{description}</p>}
    {link && (
      <div className="mt-S flex flex-grow flex-col justify-end">
        <Link {...link} className={clsx('btn--secondary', link.className)}>
          {link.label}
        </Link>
      </div>
    )}
  </div>
)
