'use client'

import { clsx } from 'clsx'
import { useRef, useState } from 'react'
import { SliderButton, ISliderButtonProps } from '@components/SliderButton/SliderButton'
import { useItemsObservers } from '@hooks/useItemsObservers/useItemsObservers'
import { useSliderButtonsVisibility } from './hooks/useSliderButtonsVisibility/useSliderButtonsVisibility'
import { findPrevInvisibleNode } from './helpers/findPrevInvisibleNode/findPrevInvisibleNode'
import { findNextInvisibleNode } from './helpers/findNextInvisibleNode/findNextInvisibleNode'
import { isHtmlElement } from './helpers/isHtmlElement/isHtmlElement'

type TObserveItemFn = (id: string, node: Maybe<HTMLElement>) => void
type TRenderItemsFn = (observeItem: TObserveItemFn) => React.ReactNode[]

interface ISliderGridProps {
  children: TRenderItemsFn
  mobileMode?: 'columns' | 'rows'
  autoColsConfig?: ClassName
  classNames?: {
    root?: ClassName
    grid?: ClassName
    gridAutoCols?: ClassName
  }
}

export const SliderGrid: React.FC<ISliderGridProps> = ({ children: renderItems, mobileMode = 'rows', classNames }) => {
  const [rootNode, setRootNode] = useState<HTMLElement | null>(null)

  const scrollRef = useRef<HTMLDivElement>(null)
  const buttonVisibility = useSliderButtonsVisibility(scrollRef)

  const { observeItem, getObserversRecords } = useItemsObservers({ root: rootNode })

  const handleRootRef = (node: Maybe<HTMLElement>) => {
    if (node) {
      setRootNode(node)
    }
  }

  const scrollToNode = (node: Maybe<Element>, direction: 'left' | 'right') => {
    if (!isHtmlElement(node)) {
      node?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' })
      return
    }

    const offsetLeft = node?.offsetLeft ?? 0
    const offsetWidth = node?.offsetWidth ?? 0
    const clientWidth = scrollRef.current?.clientWidth ?? 0

    const left = direction === 'left' ? offsetLeft : offsetLeft - clientWidth + offsetWidth

    scrollRef.current?.scrollTo({ left, behavior: 'smooth' })
  }

  const handleSliderButtonClick: ISliderButtonProps['onClick'] = (direction) => {
    const observerRecords = getObserversRecords()

    switch (direction) {
      case 'left': {
        scrollToNode(findPrevInvisibleNode(observerRecords), direction)
        break
      }
      case 'right': {
        scrollToNode(findNextInvisibleNode(observerRecords), direction)
        break
      }
    }
  }

  const sliderButtonClassName: ClassName = clsx({ 'hidden sm:block': mobileMode === 'rows' })

  return (
    <div ref={handleRootRef} className={clsx('relative max-w-full', classNames?.root)}>
      <SliderButton
        direction="left"
        available={buttonVisibility.left}
        onClick={handleSliderButtonClick}
        className={sliderButtonClassName}
      />
      <div
        ref={scrollRef}
        className={clsx(
          classNames?.grid,
          'grid items-stretch gap-6 overflow-auto scroll-smooth no-scrollbar  sm:grid-flow-col',
          classNames?.gridAutoCols || 'sm:auto-cols-[minmax(300px,_1fr)]',
          {
            'auto-cols-[100%] grid-flow-col': mobileMode === 'columns',
            'grid-flow-row': mobileMode === 'rows',
          },
        )}
      >
        {renderItems(observeItem)}
      </div>
      <SliderButton
        direction="right"
        available={buttonVisibility.right}
        onClick={handleSliderButtonClick}
        className={sliderButtonClassName}
      />
    </div>
  )
}
