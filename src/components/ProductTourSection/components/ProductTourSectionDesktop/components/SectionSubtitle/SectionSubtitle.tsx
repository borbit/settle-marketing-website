import { OpenFormDialogButton, IOpenFormDialogButtonProps } from '@components/OpenFormDialogButton/OpenFormDialogButton'
import { ScrollTopButton } from '@components/ScrollTopButton/ScrollTopButton'

export interface ISectionSubtitleProps {
  children: string
  startTourNudge?: string
  form: IOpenFormDialogButtonProps['form'] | 'focus-in-hero'
}

export const SectionSubtitle: React.FC<ISectionSubtitleProps> = ({
  children,
  form,
  startTourNudge = 'Start tour or',
}) => {
  const buttonLabel = 'Request live demo'
  const buttonClassName = 'text-brand-forest-green underline underline-offset-4 hover:text-brand-pine-green'

  return (
    <>
      {children}{' '}
      <span className="hidden md:inline-block">
        {startTourNudge}{' '}
        {form === 'focus-in-hero' ? (
          <ScrollTopButton label={buttonLabel} className={buttonClassName} />
        ) : (
          <OpenFormDialogButton form={form} label={buttonLabel} className={buttonClassName} />
        )}
      </span>
    </>
  )
}
