export const updateInputValue = ($form: HTMLFormElement, name: string, value: string) => {
  const $input = $form.querySelector<HTMLInputElement>(`input[name=${name}]`)

  if ($input && value) {
    $input.value = value
    $input.dispatchEvent(new Event('change'))
  }
}
