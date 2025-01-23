import { clsx } from 'clsx'
import type { Metadata, NextPage } from 'next'
import { inter, dm, merriweather } from '@lib/fonts/external'
import './layout.css'

export const metadata: Metadata = {
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
  formatDetection: { telephone: false },
}

const RootLayout: NextPage<React.PropsWithChildren> = ({ children }) => (
  <html lang="en">
    <body className={clsx(inter.variable, merriweather.variable, dm.variable)}>{children}</body>
  </html>
)

export default RootLayout
