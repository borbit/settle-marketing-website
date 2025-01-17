import { clsx } from 'clsx'
import NextImage from 'next/image'
import { ToggleButton } from '../ToggleButton/ToggleButton'
import type { IFeatureCard } from '../../FeaturesShowcase.types'

interface IDesktopShowcaseProps {
  cards: IFeatureCard[]
  selected: number
  onChange(index: number): void
  className?: ClassName
}

export const DesktopShowcase: React.FC<IDesktopShowcaseProps> = ({ selected, onChange, cards, className }) => (
  <div className={clsx('grid grid-cols-2 items-center gap-S', className)}>
    <div className="my-S flex flex-col gap-S pr-[3.375rem]">
      {cards.map(({ title, description, legalNote }, i) => (
        <ToggleButton
          key={i}
          selected={i === selected}
          onClick={() => onChange(i)}
          title={title}
          description={description}
          legalNote={legalNote}
        />
      ))}
    </div>
    {cards.map(({ image }, i) => (
      <NextImage
        key={i}
        src={image}
        width={601}
        height={471}
        placeholder="blur"
        priority={true}
        alt="Feature preview"
        className={clsx('aspect-4/3 rounded-md object-cover', selected === i ? 'block' : 'hidden')}
      />
    ))}
  </div>
)
