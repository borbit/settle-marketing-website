import { clsx } from 'clsx'
import NextImage from 'next/image'
import { VideoAnimation } from '@components/VideoAnimation/VideoAnimation'
import type { IFeatureShowCaseCard } from './FeatureShowcases.types'

export interface IFeaturesShowcasesProps {
  cards: IFeatureShowCaseCard[]
}

export const FeaturesShowcases: React.FC<IFeaturesShowcasesProps> = ({ cards }) => (
  <div className="flex flex-col gap-XS">
    {cards.map(({ title, description, legalNote, image, video, tag }, i) => (
      <div key={i} className="grid grid-cols-1 items-center gap-S md:grid-cols-2">
        <div className={clsx('space-y-S lg:px-[3.375rem]', i % 2 === 0 && 'md:order-last')}>
          <div className="space-y-2.5">
            {tag && (
              <span className="font rounded-4xl bg-brand-forest-green px-3 py-2 text-[0.625rem] font-bold uppercase leading-[0.5rem] text-white">
                {tag}
              </span>
            )}
            <h3>{title}</h3>
          </div>
          <article className="text-base text-brand-dark">{description}</article>
          {legalNote && <small className="text-left">{legalNote}</small>}
        </div>
        {video && <VideoAnimation src={video} type="video/webm" />}
        {image && (
          <NextImage
            src={image}
            priority={true}
            width={514}
            alt={title}
            height={386}
            className="h-auto w-full rounded-md"
          />
        )}
      </div>
    ))}
  </div>
)
