'use client'

import { clsx } from 'clsx'
import { useState } from 'react'
import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid'
import { VideoAnimation, type TVideoAnimationProps } from '@components/VideoAnimation/VideoAnimation'
import { useVideoControl, type TVideoControlEl } from '@components/CtaVideoCard/hooks/useVideoControl/useVideoControl'

export type TCtaVideoCardProps = {
  title: string
  subtitle?: React.ReactNode
  legalNote?: string
  className?: ClassName
  align?: 'left' | 'center'
  video: TVideoAnimationProps
}

export const CtaVideoCard: React.FC<TCtaVideoCardProps> = ({
  subtitle,
  legalNote,
  title,
  align = 'center',
  className,
  video,
}) => {
  const [videoEl, setVideoEl] = useState<TVideoControlEl>(null)
  const { playing, showControls, onWatchClick } = useVideoControl(videoEl)

  const ControlIcon = playing ? PauseIcon : PlayIcon

  return (
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
        <button className="btn--primary flex items-center justify-center gap-2.5 py-3" onClick={onWatchClick}>
          <ControlIcon className="size-6 text-brand-dusty-pink" />
          <span>{playing ? 'Pause' : 'Watch'} video</span>
        </button>
      </div>
      <div className="max-size-full order-first bg-brand-pine-green md:h-full">
        <VideoAnimation
          ref={(el) => setVideoEl(el)}
          controls={showControls}
          autoPlay={false}
          muted={false}
          loop={false}
          playsInline={false}
          onClick={onWatchClick}
          className="aspect-none cursor-pointer rounded-none [&::-webkit-media-controls-panel]:bg-transparent"
          {...video}
        />
      </div>
    </div>
  )
}
