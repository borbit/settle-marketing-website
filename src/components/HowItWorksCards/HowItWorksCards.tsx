import { twMerge } from '@lib/helpers/twMerge/twMerge'

interface IHowItWorksStep {
  title: string
  className?: string
  description: string
  legalNote?: string
}

interface IHowItWorksCardsProps {
  className?: string
  steps: IHowItWorksStep[]
}

export const HowItWorksCards: React.FC<IHowItWorksCardsProps> = ({ steps, className }) => (
  <div className={twMerge('grid grid-cols-1 gap-S sm:grid-cols-2 lg:grid-cols-4', className)}>
    {steps.map(({ title, description, legalNote, className }, index) => (
      <div key={index} className={twMerge('card space-y-XS', className)}>
        <h3 className="space-x-3 leading-none">
          <span className="bg-brand-dusty-pink px-1">{index + 1}</span>
          <span>{title}</span>
        </h3>
        <p>{description}</p>
        {legalNote && <p className="text-xs">{legalNote}</p>}
      </div>
    ))}
  </div>
)
