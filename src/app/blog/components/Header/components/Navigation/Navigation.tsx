import { forwardRef } from 'react'
import { clsx } from 'clsx'
import Link from 'next/link'
import {
  becomeAPartnerPagePath,
  purchasingPagePath,
  inventoryPagePath,
  earlyStageStartupsPagePath,
  scalingStartupsPagePath,
  forAccountantsPagePath,
  workingCapitalPagePath,
  apAutomationPagePath,
  pricingPagePath,
  settleVsBillPagePath,
  caseStudiesPagePath,
  blogPagePath,
} from '@lib/consts/internalLinks'
import { NavigationGroup } from './components/NavigationGroup/NavigationGroup'

interface INavigationProps extends React.HTMLProps<HTMLDivElement> {
  variant?: 'light' | 'dark'
  hamburgerMode?: boolean
}

export const Navigation = forwardRef<HTMLDivElement, INavigationProps>(
  ({ hamburgerMode, variant = 'dark', children, ...props }, ref) => (
    <nav ref={ref} {...props}>
      <ul className={clsx('flex', hamburgerMode ? 'flex-col items-start' : 'items-center gap-6')}>
        <NavigationGroup
          variant={variant}
          hamburgerMode={hamburgerMode}
          dropdown={[
            { label: 'Inventory Management', href: inventoryPagePath },
            { label: 'Working Capital', href: workingCapitalPagePath },
            { label: 'AP Automation', href: apAutomationPagePath },
            { label: 'Purchase Orders', href: purchasingPagePath },
          ]}
        >
          Our Products
        </NavigationGroup>
        <NavigationGroup
          variant={variant}
          hamburgerMode={hamburgerMode}
          dropdown={[
            { label: 'For Start Ups', href: earlyStageStartupsPagePath },
            { label: 'For Scale Ups', href: scalingStartupsPagePath },
            { label: 'For Accountants', href: forAccountantsPagePath },
            { label: 'Become a Partner', href: becomeAPartnerPagePath },
          ]}
        >
          Our Solutions
        </NavigationGroup>
        <NavigationGroup
          variant={variant}
          hamburgerMode={hamburgerMode}
          dropdown={[
            { label: 'Customer Stories', href: caseStudiesPagePath },
            { label: 'Blog', href: blogPagePath },
            { label: 'Settle vs BILL', href: settleVsBillPagePath },
            { label: 'PO Creation Tool', href: '/' },
            { label: 'Working Capital Calculator', href: '/' },
            { label: 'Our Partners', href: '/' },
          ]}
        >
          Resources
        </NavigationGroup>
        <NavigationGroup hamburgerMode={hamburgerMode} variant={variant}>
          <Link href={pricingPagePath}>Pricing</Link>
        </NavigationGroup>
      </ul>
      {children}
    </nav>
  ),
)

Navigation.displayName = 'Navigation'
