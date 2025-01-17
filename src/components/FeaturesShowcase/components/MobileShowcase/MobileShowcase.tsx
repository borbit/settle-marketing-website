import { clsx } from 'clsx'
import { useState } from 'react'
import NextImage from 'next/image'
import { SliderButton, type ISliderButtonProps } from '@components/SliderButton/SliderButton'
import { useItemsObservers } from '@hooks/useItemsObservers/useItemsObservers'
import { ToggleButton } from '../ToggleButton/ToggleButton'
import type { IFeatureCard } from '../../FeaturesShowcase.types'

interface IMobileShowcaseProps {
  cards: IFeatureCard[]
  selected: number
  onChange(index: number): void
  className?: ClassName
}

export const MobileShowcase: React.FC<IMobileShowcaseProps> = ({ selected, onChange, cards, className }) => {
  const [rootNode, setRootNode] = useState<HTMLDivElement | null>(null)

  const scrollToNode = (node: Maybe<HTMLElement>) => {
    if (rootNode && node) {
      rootNode.scrollTo({ left: node.offsetLeft, behavior: 'smooth' })
    }
  }

  const { observeItem, observersMap } = useItemsObservers({
    root: rootNode,
    threshold: 0.5,
    rootMargin: '20%',
    callback: ({ id: index, node, observerEntries: [{ isIntersecting }] }) => {
      if (isIntersecting) {
        onChange(parseInt(index))
        scrollToNode(node)
      }
    },
  })

  const scrollToIndex = (index: number) => {
    scrollToNode(observersMap.get(index.toString())?.node)
  }

  const handleSliderButtonClick: ISliderButtonProps['onClick'] = (direction) => {
    let newSelected = selected

    if (direction === 'left') {
      newSelected = selected - 1
    } else {
      newSelected = selected + 1
    }

    onChange(newSelected)
    scrollToIndex(newSelected)
  }

  return (
    <div className={clsx('relative -mx-S w-dvw max-w-[100dvw] overflow-visible', className)}>
      <SliderButton
        direction="left"
        available={selected !== 0}
        onClick={handleSliderButtonClick}
        className="left-[3rem] top-3/4"
      />
      <div
        ref={(node) => node && setRootNode(node)}
        className="flex snap-x snap-mandatory items-center overflow-x-auto overscroll-none scroll-smooth no-scrollbar"
      >
        {cards.map(({ title, description, image, legalNote }, i) => (
          <div
            key={i}
            ref={(node) => observeItem(i.toString(), node)}
            className="group flex size-full min-w-[90%] max-w-[90%] flex-col gap-S gap-x-0 p-px"
          >
            <NextImage
              src={image}
              priority={true}
              width={601}
              height={300}
              alt="Feature preview"
              className="aspect-4/3 w-full rounded-md object-cover"
            />
            <div className="pl-S group-last:pr-S">
              <ToggleButton
                title={title}
                description={description}
                legalNote={legalNote}
                selected={i === selected}
                onClick={() => {
                  onChange(i)
                  scrollToIndex(i)
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <SliderButton
        direction="right"
        available={selected !== cards.length - 1}
        onClick={handleSliderButtonClick}
        className="right-[3rem] top-3/4"
      />
    </div>
  )
}
