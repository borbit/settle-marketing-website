import { parseName } from 'humanparser'
import { updateInputValue } from '../updateInputValue/updateInputValue'
import type { TBeforeFormSubmitHandler } from '../../useHubSpotForm.types'

export const fillFullName: TBeforeFormSubmitHandler = ($form) => {
  const fullName = $form.querySelector<HTMLInputElement>('input[name=full_name]')?.value || ''
  const { firstName = '', lastName = '' } = parseName(fullName)

  updateInputValue($form, 'firstname', firstName)
  updateInputValue($form, 'lastname', lastName)
}
