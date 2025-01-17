// eslint-disable-next-line no-restricted-imports
import NextLink from 'next/link'
import { Suspense, forwardRef } from 'react'
import {
  LinkWithInheritedParams,
  type TLinkWithInheritedParamsProps,
} from './components/LinkWithInheritedParams/LinkWithInheritedParams'

export type TLinkProps = TLinkWithInheritedParamsProps

export const Link = forwardRef<HTMLAnchorElement, TLinkProps>(({ children, href, ...props }, ref) => {
  if (!href) {
    return children
  }

  return (
    <Suspense
      fallback={
        <NextLink href={href} {...props}>
          {children}
        </NextLink>
      }
    >
      <LinkWithInheritedParams ref={ref} href={href} {...props}>
        {children}
      </LinkWithInheritedParams>
    </Suspense>
  )
})

Link.displayName = 'Link'
