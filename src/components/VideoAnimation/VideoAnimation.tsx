import { Suspense, forwardRef } from 'react'
import { twMerge } from '@lib/helpers/twMerge/twMerge'

export type TVideoAnimationProps = React.DetailedHTMLProps<
  React.VideoHTMLAttributes<HTMLVideoElement>,
  HTMLVideoElement
> &
  ({
    src: string
    type: string
    caption?: string
  } & (
    | {
        fallbackSrc: string
        fallbackType: string
      }
    | {
        fallbackSrc?: never
        fallbackType?: never
      }
  ))

export const VideoAnimation = forwardRef<HTMLVideoElement, TVideoAnimationProps>(
  (
    {
      src,
      type,
      fallbackSrc,
      fallbackType,
      caption,
      className,
      playsInline = true,
      controls = false,
      autoPlay = true,
      muted = true,
      loop = true,
      ...props
    },
    ref,
  ) => (
    <Suspense>
      <figure className="h-full w-full">
        <video
          ref={ref}
          width="100%"
          height="100%"
          className={twMerge('aspect-4/3 h-full w-full rounded-4xl', className)}
          playsInline={playsInline}
          controls={controls}
          autoPlay={autoPlay}
          muted={muted}
          loop={loop}
          {...props}
        >
          <source src={src} type={type} />
          {fallbackSrc && <source src={fallbackSrc} type={fallbackType} />}
        </video>
        <figcaption>{caption}</figcaption>
      </figure>
    </Suspense>
  ),
)

VideoAnimation.displayName = 'VideoAnimation'
