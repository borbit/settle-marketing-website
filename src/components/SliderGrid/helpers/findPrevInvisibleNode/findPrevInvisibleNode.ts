import { first, last, takeWhile } from 'lodash'

export const findPrevInvisibleNode = (observerRecords: IntersectionObserverEntry[]) => {
  const prevInvisibleNode = last(takeWhile(observerRecords, ({ isIntersecting }) => !isIntersecting))?.target
  const firstNode = first(observerRecords)?.target

  return prevInvisibleNode ?? firstNode
}
