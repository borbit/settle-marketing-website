import { ArrowRightIcon } from '@heroicons/react/24/solid'
import { Link, type TLinkProps } from '@components/Link/Link'

interface IBannerProps extends Pick<TLinkProps, 'href' | 'onClick'> {
  title: string
  tagline: string
}

export const Banner: React.FC<IBannerProps> = ({ title, tagline, onClick, href }) => (
  <aside className="relative z-30 bg-brand-dark-teal">
    <div className="container flex items-center justify-center gap-4 py-XS">
      <span className="hidden shrink-0 text-xs uppercase text-brand-light-teal sm:block">{tagline}</span>
      <Link href={href} onClick={onClick} className="flex items-center gap-2 overflow-hidden text-white">
        <span className="overflow-hidden text-ellipsis whitespace-nowrap text-sm leading-normal hover:underline hover:underline-offset-2">
          {title}
        </span>
        <ArrowRightIcon height={16} width={16} className="inline-block shrink-0 text-white" />
      </Link>
    </div>
  </aside>
)
