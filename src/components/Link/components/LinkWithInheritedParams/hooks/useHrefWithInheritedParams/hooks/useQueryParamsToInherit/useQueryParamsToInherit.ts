import { useSearchParams } from 'next/navigation'
import { useMemo } from 'react'

const isUtmParam = (key: string) => key.startsWith('utm_')
const isFacebookParam = (key: string) => key.startsWith('fb')
const isInterestedInParam = (key: string) => key === 'interestedIn'
const isGoogleParam = (key: string) => key === 'gclid'

export const useQueryParamsToInherit = () => {
  const searchParams = useSearchParams()

  return useMemo(
    () =>
      [...searchParams.entries()].filter(
        ([key, value]) =>
          (isUtmParam(key) || isInterestedInParam(key) || isFacebookParam(key) || isGoogleParam(key)) && value,
      ),
    [searchParams],
  )
}
