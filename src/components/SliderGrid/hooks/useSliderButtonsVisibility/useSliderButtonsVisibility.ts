import { useMemo } from 'react'
import { useScroll } from 'react-use'

export type TSliderRef = Parameters<typeof useScroll>[0]

export const useSliderButtonsVisibility = (ref: TSliderRef) => {
  const { x } = useScroll(ref)

  const scrollWidth = ref.current?.scrollWidth ?? 0
  const clientWidth = ref.current?.clientWidth ?? 0

  const minScroll = 0
  const maxScroll = scrollWidth - clientWidth

  const leftAvailable = x > minScroll
  const rightAvailable = x !== (maxScroll > 0 ? maxScroll : minScroll + 1)

  return useMemo(() => ({ left: leftAvailable, right: rightAvailable }), [leftAvailable, rightAvailable])
}
