'use client'

import { HTMLProps, useId } from 'react'
import { Spinner } from '@components/Spinner/Spinner'
import { twMerge } from '@lib/helpers/twMerge/twMerge'
import { useHubSpotForm, THubSpotFormHookProps } from './hooks/useHubSpotForm/useHubSpotForm'
import { useCalendlyFormWidget } from './hooks/useCalendlyFormWidget/useCalendlyFormWidget'
import './HubSpotForm.css'

export interface IHubSpotFormProps extends Pick<HTMLProps<HTMLDivElement>, 'className'> {
  formId: string
  calendlyFormId: Maybe<string>
  variant?: 'default' | 'dark'
  config?: Omit<THubSpotFormHookProps, 'formId' | 'target'>
}

export const HubSpotForm: React.FC<IHubSpotFormProps> = ({
  formId,
  calendlyFormId,
  config,
  variant = 'default',
  ...props
}) => {
  const uuid = useId().replace(/:/g, '')
  const targetId = `hubspot-form-${formId}${uuid}`

  useCalendlyFormWidget({ calendlyFormId, hubspotFormId: formId })
  useHubSpotForm({
    formId,
    target: `#${targetId}`,
    ...config,
    submitButtonClass: twMerge('btn--primary mx-auto', config?.submitButtonClass),
    cssClass: twMerge(`variant-${variant} items-stretch`, config?.cssClass),
  })

  return (
    <div
      id={targetId}
      {...props}
      className={twMerge('flex w-full flex-col items-center justify-center', props.className)}
    >
      <Spinner className="m-auto" />
    </div>
  )
}
