import { clsx } from 'clsx'
import NextImage, { ImageProps } from 'next/image'

export type TImageCardProps = {
  title: string
  description?: React.ReactNode | string
  className?: ClassName
  legalNote?: string
  align?: 'left' | 'center'
  image: Omit<ImageProps, 'alt'> & {
    alt?: ImageProps['alt']
  }
}

export const ImageCard: React.FC<TImageCardProps> = ({
  image,
  description,
  title,
  align = 'center',
  className,
  legalNote,
}) => (
  <div
    className={clsx(
      'card grid	 grid-rows-none items-center overflow-hidden bg-transparent p-0 md:grid-cols-2',
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
      {description && <article>{description}</article>}
      {legalNote && <p className="text-xs">{legalNote}</p>}
    </div>
    <div className="max-size-full order-first h-full md:order-last">
      <NextImage
        src={image.src}
        width={0}
        height={706}
        sizes="100vw"
        priority={true}
        placeholder={image.placeholder ?? 'empty'}
        alt={image.alt ?? 'Illustration'}
        className="h-full max-h-[240px] w-full object-cover md:max-h-none lg:max-h-[353px]"
      />
    </div>
  </div>
)
