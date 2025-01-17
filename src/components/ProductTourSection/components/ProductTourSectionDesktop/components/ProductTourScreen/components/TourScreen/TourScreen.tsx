'use client'

import { useState } from 'react'
import NextImage, { ImageProps } from 'next/image'
import { StartTourButton } from './components/StartTourButton/StartTourButton'
import { TourIframeView, ITourIframeViewProps } from './components/TourIframeView/TourIframeView'

export interface ITourScreenProps extends Pick<ITourIframeViewProps, 'src'> {
  preview: ImageProps['src']
}

export const TourScreen: React.FC<ITourScreenProps> = ({ src, preview }) => {
  const [show, setShow] = useState(false)

  return (
    <div className="relative aspect-[1.7]">
      <NextImage
        src={preview}
        placeholder="blur"
        alt="Start Tour"
        className="relative inset-0 z-[1]"
        sizes="100vw"
        quality={100}
        fill={true}
      />
      <StartTourButton onClick={() => setShow(true)} loading={show} />
      <TourIframeView src={src} invisible={!show} />
    </div>
  )
}
