import { first, last, takeRightWhile } from 'lodash'

export const findNextInvisibleNode = (observerRecords: IntersectionObserverEntry[]) => {
  const nextInvisibleNode = first(takeRightWhile(observerRecords, ({ isIntersecting }) => !isIntersecting))?.target
  const lastNode = last(observerRecords)?.target

  return nextInvisibleNode ?? lastNode
}
