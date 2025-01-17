import { useRef } from 'react'

export const useItemsObservers = ({
  root,
  callback,
  rootMargin,
  threshold,
}: IntersectionObserverInit & {
  callback?: (args: { observerEntries: IntersectionObserverEntry[]; id: string; node: HTMLElement }) => void
}) => {
  const observersMap = useRef<
    Map<string, { node: HTMLElement; observer: IntersectionObserver; observerEntries: IntersectionObserverEntry[] }>
  >(new Map())

  const observeItem = (id: string, node: Maybe<HTMLElement>) => {
    if (!node || !root || observersMap.current.has(id)) {
      return
    }

    const observer = new IntersectionObserver(
      (observerEntries) => {
        const item = observersMap.current.get(id)

        if (item) {
          observersMap.current.set(id, { ...item, observerEntries })
          callback?.({ id, observerEntries, node: item.node })
        }
      },
      { root, rootMargin, threshold },
    )

    observer.observe(node)

    observersMap.current.set(id, { node, observer, observerEntries: [] })
  }

  const getObserversRecords = () =>
    Array.from(observersMap.current.values()).flatMap(({ observerEntries }) => observerEntries)

  return { observeItem, observersMap: observersMap.current, getObserversRecords }
}
