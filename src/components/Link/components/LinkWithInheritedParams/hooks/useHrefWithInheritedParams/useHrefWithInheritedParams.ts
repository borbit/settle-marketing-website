import { compact, isString } from 'lodash'
import type { UrlObject } from 'url'
import { useQueryParamsToInherit } from './hooks/useQueryParamsToInherit/useQueryParamsToInherit'

export const useHrefWithInheritedParams = (href: string | UrlObject) => {
  const inheritedParams = useQueryParamsToInherit()

  const extendSearchWithInheritedParams = (search: Maybe<string>) => {
    const searchParams = new URLSearchParams(search ?? '')

    return new URLSearchParams([...searchParams, ...inheritedParams]).toString()
  }

  const extendHrefWithInheritedParams = (href: string | UrlObject) => {
    if (!isString(href)) {
      return { ...href, search: extendSearchWithInheritedParams(href.search) }
    }

    const [url, search] = href.split('?')

    return compact([url, extendSearchWithInheritedParams(search)]).join('?')
  }

  return extendHrefWithInheritedParams(href)
}
