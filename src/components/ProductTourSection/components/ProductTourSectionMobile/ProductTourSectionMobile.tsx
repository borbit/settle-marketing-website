import {
  OpenFormDialogButton,
  type IOpenFormDialogButtonProps,
} from '@components/OpenFormDialogButton/OpenFormDialogButton'
import { SectionContainer, type ISectionContainerProps } from '@components/SectionContainer/SectionContainer'
import { ScrollTopButton } from '@components/ScrollTopButton/ScrollTopButton'

export interface IProductTourSectionMobileProps extends Pick<ISectionContainerProps, 'id' | 'className'> {
  title: React.ReactNode
  subtitle: React.ReactNode
  form: IOpenFormDialogButtonProps['form'] | 'focus-in-hero'
}

export const ProductTourSectionMobile: React.FC<IProductTourSectionMobileProps> = ({
  title,
  subtitle,
  form,
  ...props
}) => {
  const buttonLabel = 'Request live demo'
  const buttonClassName = 'btn--primary--light'

  return (
    <SectionContainer {...props}>
      <div className="card--dark">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-center">{title}</h2>
          <p className="mb-S mt-XS text-center text-white">{subtitle}</p>
          {form === 'focus-in-hero' ? (
            <ScrollTopButton label={buttonLabel} className={buttonClassName} />
          ) : (
            <OpenFormDialogButton form={form} label={buttonLabel} className={buttonClassName} />
          )}
        </div>
      </div>
    </SectionContainer>
  )
}
