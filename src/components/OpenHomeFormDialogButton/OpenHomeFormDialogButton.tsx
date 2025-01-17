import { useMemo } from 'react'
import { homeForm } from '@lib/consts/hubspotForms'
import { OpenFormDialogButton, IOpenFormDialogButtonProps } from '@components/OpenFormDialogButton/OpenFormDialogButton'

interface IOpenHomeFormDialogButtonProps extends Pick<IOpenFormDialogButtonProps['form'], 'formConfig'> {
  label?: string
  className?: ClassName
}

export const OpenHomeFormDialogButton: React.FC<IOpenHomeFormDialogButtonProps> = ({
  label = 'Book a demo',
  className = 'btn--secondary--light',
  formConfig,
}) => (
  <OpenFormDialogButton
    label={label}
    className={className}
    form={useMemo(() => ({ formId: homeForm.id, calendlyFormId: homeForm.calendlyId, formConfig }), [formConfig])}
  />
)
