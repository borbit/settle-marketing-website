import type { Metadata } from 'next'
import { FaceFrownIcon } from '@heroicons/react/24/outline'
import { Link } from '@components/Link/Link'
import { Header } from '@app/layout/Header/Header'
import { Footer } from '@app/layout/Footer/Footer'

export const metadata: Metadata = {
  title: 'Not Found',
}

const NotFound = () => (
  <>
    <Header />
    <main className="container flex items-center justify-center">
      <article className="card--dark my-20 flex flex-col items-start gap-XS text-white md:my-48">
        <div className="flex items-center gap-2">
          <Link href="/">
            <FaceFrownIcon height="59px" width="47px" />
          </Link>
          <h3>Page Not Found</h3>
        </div>
        <p className="text-base text-white sm:text-xl">The page you are looking for doesn't exist or has been moved</p>
      </article>
    </main>
    <Footer />
  </>
)

export default NotFound
