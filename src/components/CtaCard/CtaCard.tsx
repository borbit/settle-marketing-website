import { clsx } from 'clsx'
import NextImage, { ImageProps } from 'next/image'

type TCtaCardProps = {
  title: string
  subtitle?: string
  kind?: 'light' | 'dark'
  image: ImageProps & { alt?: string }
  action: React.ReactNode
}

export const CtaCard: React.FC<TCtaCardProps> = ({ kind = 'dark', image, title, subtitle, action }) => (
  <div
    className={clsx(kind === 'light' ? 'card' : 'card--dark', 'grid grid-rows-none items-center gap-S md:grid-cols-2')}
  >
    <NextImage
      {...image}
      alt={image.alt ?? 'Illustration'}
      width={0}
      height={0}
      sizes="100vw"
      className="h-auto max-h-[190px] w-full object-contain md:max-h-[265px]"
    />
    <div className="flex flex-col items-start justify-center text-left md:ml-12">
      <h3 className={clsx(subtitle ? 'mb-XS' : 'mb-S')}>{title}</h3>
      {subtitle && <p className={clsx('mb-S', kind === 'dark' && 'text-white')}>{subtitle}</p>}
      {action}
    </div>
  </div>
)
