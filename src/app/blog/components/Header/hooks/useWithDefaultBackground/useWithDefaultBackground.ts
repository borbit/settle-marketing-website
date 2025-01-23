import { noop } from 'lodash'
import { useCallback, useEffect, useState, useMemo } from 'react'
import { isWindowScrolledPastHeader } from '@app/blog/components/Header/hooks/useWithDefaultBackground/helpers/isWindowScrolledPastHeader/isWindowScrolledPastHeader'

interface IWithDefaultBackgroundParams {
  backgroundColor: Maybe<string>
}

export const useWithDefaultBackground = ({ backgroundColor }: IWithDefaultBackgroundParams) => {
  const [isScrolledPastHeader, setIsScrolledPastHeader] = useState(isWindowScrolledPastHeader())
  const [isHamburgerNavigationOpen, setHamburgerNavigationOpen] = useState(false)

  const isBackgroundTransparent = backgroundColor === 'transparent'

  const handleScroll = useCallback<EventListener>(() => {
    setIsScrolledPastHeader(isWindowScrolledPastHeader())
  }, [])

  useEffect(() => {
    if (!isBackgroundTransparent) {
      return noop
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleScroll, isBackgroundTransparent])

  const withDefaultBackground =
    !backgroundColor || isHamburgerNavigationOpen || (isBackgroundTransparent && isScrolledPastHeader)

  return useMemo(
    () => ({
      withDefaultBackground,
      onHandleHamburgerNavigationOpen: setHamburgerNavigationOpen,
    }),
    [withDefaultBackground],
  )
}
