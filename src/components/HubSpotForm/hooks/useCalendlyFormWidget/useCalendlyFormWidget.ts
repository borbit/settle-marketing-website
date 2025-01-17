import { useCallback, useEffect } from 'react'
import { tryWithAttempts } from '../../helpers/tryWithAttempts/tryWithAttempts'

interface ICalendlyFormWidgetHookProps {
  hubspotFormId: string
  calendlyFormId: Maybe<string>
}

export const useCalendlyFormWidget = ({ calendlyFormId, hubspotFormId }: ICalendlyFormWidgetHookProps) => {
  const initCalendly = useCallback(async ({ calendlyFormId, hubspotFormId }: ICalendlyFormWidgetHookProps) => {
    try {
      await tryWithAttempts(() => {
        const initCalendlyForHubspot = window?.Calendly?.initHubspotForm

        if (!initCalendlyForHubspot) {
          throw new Error('Calendly form API is not available')
        }

        initCalendlyForHubspot({
          id: hubspotFormId,
          url: `https://calendly.com/api/form_builder/forms/${calendlyFormId}/submissions`,
          options: { primary_color: '3e8672', hide_gdpr_banner: true },
        })
      })
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    if (!calendlyFormId) {
      return
    }

    initCalendly({ calendlyFormId, hubspotFormId })
  }, [initCalendly, calendlyFormId, hubspotFormId])
}
