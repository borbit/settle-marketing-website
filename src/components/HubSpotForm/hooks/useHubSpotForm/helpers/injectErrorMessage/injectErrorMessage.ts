export const injectErrorMessage = (target: Maybe<string>) => {
  const $targetEl = target && document.querySelector(target)

  if ($targetEl) {
    $targetEl.innerHTML = 'Something went wrong'
  }
}
