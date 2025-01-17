import { clsx } from 'clsx'
import NextImage, { ImageProps } from 'next/image'
import { urlForImage, TImageSource } from '@lib/sanity/lib/urlForImage'

export type TSanityImageProps = Omit<ImageProps, 'src' | 'width' | 'height' | 'alt'> & {
  src: TImageSource
  alt?: string
} & ({ height?: number; width?: number; aspect?: never } | { aspect: true; height?: never; width?: never })

export const SanityImage: React.FC<TSanityImageProps> = ({
  src,
  width,
  height,
  aspect,
  className,
  alt = '',
  ...props
}) => (
  <NextImage
    src={urlForImage(src).url()}
    width={width ?? 0}
    height={height ?? 0}
    priority={true}
    className={clsx('object-contain', { 'aspect-4/3': aspect, 'w-auto': !width }, className)}
    {...(!width && { sizes: '100vw' })}
    alt={alt}
    {...props}
  />
)
