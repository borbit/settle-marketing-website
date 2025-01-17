'use client'

// eslint-disable-next-line no-restricted-imports
import NextLink from 'next/link'
import { forwardRef } from 'react'
import { useHrefWithInheritedParams } from './hooks/useHrefWithInheritedParams/useHrefWithInheritedParams'

export type TLinkWithInheritedParamsProps = React.ComponentProps<typeof NextLink>

export const LinkWithInheritedParams = forwardRef<HTMLAnchorElement, TLinkWithInheritedParamsProps>(
  ({ children, href, ...props }, ref) => {
    const hrefWithInheritedParams = useHrefWithInheritedParams(href)

    return (
      <NextLink ref={ref} href={hrefWithInheritedParams} {...props}>
        {children}
      </NextLink>
    )
  },
)

LinkWithInheritedParams.displayName = 'LinkWithInheritedParams'
