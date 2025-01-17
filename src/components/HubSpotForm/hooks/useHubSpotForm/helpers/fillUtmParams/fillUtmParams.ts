import { TRANSITIVE_UTM_PARAMS } from '@lib/consts/transitiveSearchParams'
import type { TBeforeFormSubmitHandler } from '../../useHubSpotForm.types'
import { updateInputValue } from '../updateInputValue/updateInputValue'

export const fillUtmParams: TBeforeFormSubmitHandler = ($form) => {
  const urlParams = new URLSearchParams(window.location.search)

  TRANSITIVE_UTM_PARAMS.forEach((name: string) => {
    const value = urlParams.get(name)

    if (value) {
      updateInputValue($form, `${name}__c`, value)
    }
  })
}
