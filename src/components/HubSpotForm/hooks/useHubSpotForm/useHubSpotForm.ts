import { useCallback, useEffect } from 'react'
import { fillFullName } from './helpers/fillFullName/fillFullName'
import { fillUtmParams } from './helpers/fillUtmParams/fillUtmParams'
import { injectErrorMessage } from './helpers/injectErrorMessage/injectErrorMessage'
import { tryWithAttempts } from '../../helpers/tryWithAttempts/tryWithAttempts'

export type THubSpotFormHookProps = Omit<IHubSpotFormConfiguration, 'portalId'>

export const useHubSpotForm = (config: THubSpotFormHookProps) => {
  const handleCreate = useCallback(({ onBeforeFormSubmit, ...config }: THubSpotFormHookProps) => {
    try {
      tryWithAttempts(() => {
        const { instanceId } =
          window?.hbspt?.forms?.create({
            region: 'na1',
            portalId: '40162544',
            ...config,
            onBeforeFormSubmit($form, submissionValues) {
              fillFullName($form, submissionValues)
              fillUtmParams($form, submissionValues)
              onBeforeFormSubmit?.($form, submissionValues)
            },
          }) ?? {}

        if (!instanceId) {
          throw new Error('HubSpot form API is not available')
        }

        return instanceId
      })
    } catch (error) {
      injectErrorMessage(config.target)
      console.error(error)
    }
  }, [])

  useEffect(() => {
    handleCreate(config)
  }, [config, handleCreate])
}
