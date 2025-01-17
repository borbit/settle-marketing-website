import { Dialog, type IDialogProps } from '@components/Dialog/Dialog'
import { HubSpotForm, type IHubSpotFormProps } from '@components/HubSpotForm/HubSpotForm'
import { twMerge } from '@lib/helpers/twMerge/twMerge'

export interface IFormDialogProps
  extends Pick<IDialogProps, 'open' | 'onClose'>,
    Pick<IHubSpotFormProps, 'formId' | 'calendlyFormId' | 'className'> {
  title?: string
  description?: string
  formConfig?: IHubSpotFormProps['config']
}

export const FormDialog: React.FC<IFormDialogProps> = ({
  open,
  onClose,
  title,
  description,
  formId,
  calendlyFormId,
  formConfig,
  className,
}) => (
  <Dialog
    open={open}
    onClose={onClose}
    slots={{
      title: title ?? "Let's Chat",
      description:
        description ??
        "Tell us a little bit about your business and we'll get you connected to one of our team members.",
    }}
  >
    <HubSpotForm
      formId={formId}
      calendlyFormId={calendlyFormId}
      config={formConfig}
      className={twMerge('min-h-96', className)}
    />
  </Dialog>
)
