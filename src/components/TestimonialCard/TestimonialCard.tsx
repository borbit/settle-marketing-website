import { clsx } from 'clsx'
import NextImage from 'next/image'
import { forwardRef } from 'react'
import { Link } from '@components/Link/Link'
import type { SanityValues } from 'sanity.config'
import { urlForImage } from '@lib/sanity/lib/urlForImage'
import { caseStudiesPagePath } from '@lib/consts/internalLinks'

type TTestimonialCardProps = Pick<SanityValues['testimonials'], 'name' | 'feedback' | 'logo' | 'slug' | 'person'> & {
  className?: ClassName
}

const PERSON_IMG_SIZE = 168

export const TestimonialCard = forwardRef<HTMLAnchorElement, TTestimonialCardProps>(
  ({ name, logo, feedback, slug, person, className, ...props }, ref) => {
    const Root = slug?.current ? Link : 'article'

    return (
      <Root
        ref={ref}
        href={slug ? `${caseStudiesPagePath}/${slug.current}` : '/'}
        className={clsx('card flex flex-col gap-S text-left', className)}
        {...props}
      >
        <NextImage
          src={urlForImage(logo).url()}
          width={200}
          height={40}
          alt={name}
          priority={true}
          className="mr-auto h-10 w-auto min-w-0 object-contain"
        />
        <p>{feedback}</p>
        <div className="mt-auto flex flex-wrap items-start gap-3 md:flex-nowrap">
          <NextImage
            alt={person.name}
            width={PERSON_IMG_SIZE}
            height={PERSON_IMG_SIZE}
            src={urlForImage(person.image).size(PERSON_IMG_SIZE, PERSON_IMG_SIZE).url()}
            className="size-[84px] rounded-2xl object-contain brightness-95"
          />
          <div className="text-brand-dark">
            <p className="font-bold">{person.name}</p>
            <p className="text-sm">{person.role}</p>
          </div>
        </div>
      </Root>
    )
  },
)

TestimonialCard.displayName = 'TestimonialCard'
