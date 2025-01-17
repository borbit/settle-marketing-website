import { useEffect, useState, useMemo, useCallback } from 'react'
import { noop } from 'lodash'

export type TVideoControlEl = HTMLVideoElement | null

export const useVideoControl = (videoEl: TVideoControlEl) => {
  const [playing, setPlaying] = useState(false)
  const [showControls, setShowControls] = useState(false)

  const handleWatchClick: React.MouseEventHandler<HTMLElement> = useCallback(
    async (e) => {
      e.preventDefault()
      e.stopPropagation()
      playing ? videoEl?.pause() : await videoEl?.play()
    },
    [playing, videoEl],
  )

  useEffect(() => {
    if (!videoEl) {
      return noop
    }

    const handlePlaying = () => {
      setPlaying(true)
      setShowControls(true)
    }
    const handlePause = () => setPlaying(false)
    const handleEnded = () => {
      setPlaying(false)
      setShowControls(false)

      videoEl.load()
    }

    videoEl.addEventListener('playing', handlePlaying)
    videoEl.addEventListener('pause', handlePause)
    videoEl.addEventListener('ended', handleEnded)

    return () => {
      videoEl.removeEventListener('playing', handlePlaying)
      videoEl.removeEventListener('pause', handlePause)
      videoEl.removeEventListener('ended', handleEnded)
    }
  }, [videoEl])

  return useMemo(
    () => ({
      playing,
      showControls,
      onWatchClick: handleWatchClick,
    }),
    [playing, showControls, handleWatchClick],
  )
}
