import { clsx } from 'clsx'
import NextImage, { ImageProps } from 'next/image'
import { twMerge } from '@lib/helpers/twMerge/twMerge'

export type TCtaImageCardProps = {
  title: string
  subtitle?: React.ReactNode
  legalNote?: string
  action?: React.ReactNode
  className?: ClassName
  align?: 'left' | 'center'
  image: Omit<ImageProps, 'alt'> & {
    alt?: ImageProps['alt']
  }
}

export const CtaImageCard: React.FC<TCtaImageCardProps> = ({
  image,
  subtitle,
  legalNote,
  title,
  action,
  align = 'center',
  className,
}) => (
  <div
    className={clsx(
      'card grid grid-rows-none items-center overflow-hidden p-0 md:grid-cols-2',
      { 'gap-S': align === 'center' },
      className,
    )}
  >
    <div
      className={clsx('flex flex-col justify-center gap-S px-S pb-M md:px-14 md:py-M', {
        'items-start pt-S text-left md:pt-M': align === 'left',
        'items-center text-center ': align === 'center',
      })}
    >
      <h3 className="text-wrap">{title}</h3>
      {subtitle && <p>{subtitle}</p>}
      {legalNote && <small>{legalNote}</small>}
      {action}
    </div>
    <div className="max-size-full order-first h-full md:order-last">
      <NextImage
        placeholder="empty"
        alt="Illustration"
        width={0}
        height={706}
        sizes="100vw"
        priority={true}
        {...image}
        className={twMerge('h-full max-h-[240px] w-full object-cover md:max-h-none lg:max-h-[353px]', image.className)}
      />
    </div>
  </div>
)
