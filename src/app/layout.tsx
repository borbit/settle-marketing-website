import { clsx } from 'clsx'
import type { Metadata, NextPage } from 'next'
import { marrSans, beausiteClassic } from '@lib/fonts/local'
import { inter } from '@lib/fonts/external'
import './layout.css'

export const metadata: Metadata = {
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : null,
  title: 'Plan, Purchase, Finance, and Pay for Inventory – Built for CPG Brands | Settle',
  description:
    'Settle is the only unified platform designed for CPG brands to proactively plan, purchase, and pay for inventory, with integrated access to transparent financing.',
  icons: {
    icon: [
      { media: '(prefers-color-scheme: light)', url: '/favicons/favicon_light.png' },
      { media: '(prefers-color-scheme: dark)', url: '/favicons/favicon_dark.png' },
    ],
  },
  creator: 'Settle Inc.',
  keywords: ['Cash Flow', 'Financing', 'Financing Platform', 'CPG', 'E-commerce', 'Brand', 'Scale', 'Seamlessly'],
  formatDetection: { telephone: false },
  openGraph: {
    images: '/og/og-settle-image.png',
  },
}

const RootLayout: NextPage<React.PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={clsx(inter.variable, marrSans.variable, beausiteClassic.variable)}>{children}</body>
  </html>
)

export default RootLayout
