import { clsx } from 'clsx'
import NextImage, { ImageProps } from 'next/image'

type TCtaCardProps = {
  className?: ClassName
  title: string
  subtitle: string
  image: Omit<ImageProps, 'alt'> & { alt?: string }
  action: React.ReactNode
  slotsProps?: {
    title?: React.ComponentProps<typeof String>
    subtitle?: React.ComponentProps<typeof String>
  }
}

export const CtaBlock: React.FC<TCtaCardProps> = ({ title, subtitle, image, action, slotsProps, className }) => (
  <article
    className={clsx(
      'grid items-center',
      {
        'grid-cols-1 grid-rows-none gap-2 md:grid-cols-2 md:gap-6': Boolean({ image }),
      },
      className,
    )}
  >
    {image && (
      <NextImage
        {...image}
        alt={image.alt ?? 'Illustration'}
        width={0}
        height={0}
        sizes="100vw"
        className={clsx('order-last h-auto w-full rounded-md md:order-first', image.className)}
        style={{ objectFit: 'contain' }}
      />
    )}
    <div
      className={clsx(
        'flex flex-col items-start justify-center gap-S text-left sm:items-center sm:text-center md:items-start md:px-[3.375rem] md:text-left',
        className,
      )}
    >
      <h3 className={clsx(slotsProps?.title?.className)}>{title}</h3>
      <p className={clsx(slotsProps?.subtitle?.className)}>{subtitle}</p>
      {action}
    </div>
  </article>
)
