'use client'
import { clsx } from 'clsx'
import { omit } from 'lodash'
import NextImage, { ImageProps } from 'next/image'
import { HubSpotForm, IHubSpotFormProps } from '@components/HubSpotForm/HubSpotForm'
import { VideoAnimation } from '@components/VideoAnimation/VideoAnimation'
import { twMerge } from '@lib/helpers/twMerge/twMerge'

interface IFormProps extends IHubSpotFormProps {
  title: string
}

export type THeroSectionProps = {
  title: React.ReactNode
  TitleTag?: 'h1' | 'h2'
  subtitle: React.ReactNode
  legalNote?: React.ReactNode
  bullets?: string[]
  buttons?: React.ReactNode
  className?: ClassName
  video?: string
} & (
  | { image?: ImageProps['src']; illustration?: never; form?: never }
  | { illustration?: ImageProps['src']; image?: never; form?: never }
  | { form?: IFormProps; image?: never; illustration?: never }
)

export const HeroSection: React.FC<React.PropsWithChildren<THeroSectionProps>> = ({
  title,
  subtitle,
  legalNote,
  bullets = [],
  form,
  buttons,
  image,
  video,
  illustration,
  className,
  children,
  TitleTag = 'h1',
}) => (
  <section className={clsx('w-full overflow-visible bg-brand-pine-green', className)}>
    <div
      className={clsx('container flex min-h-[536px] items-center overflow-visible py-M md:pt-0', {
        'justify-center md:justify-normal': illustration,
      })}
    >
      <div
        className={clsx('grid grid-cols-1 items-center justify-center gap-S overflow-visible', {
          'md:grid-cols-[repeat(2,minmax(460px,1fr))]': image || illustration || form || video,
        })}
      >
        <div className="flex flex-col items-start justify-center gap-S text-left">
          <TitleTag className="text-white">{title}</TitleTag>
          <p className="text-white">{subtitle}</p>
          {bullets.length > 0 && (
            <ul className="list-none space-y-4 text-white">
              {bullets.map((bullet, i) => (
                <li
                  key={i}
                  className="flex items-center justify-start before:mr-5 before:size-9 before:content-[url('/icons/hero_checkmark.svg')]"
                >
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}
          {legalNote && <p className="flex flex-col gap-2 text-xs text-brand-light-teal">{legalNote}</p>}
          {buttons && <div className="flex flex-wrap items-center justify-start gap-XS md:gap-5">{buttons}</div>}
        </div>
        {illustration && (
          <NextImage
            priority={true}
            src={illustration}
            alt="Hero Graphic"
            width={648}
            height={435}
            placeholder="empty"
            className="min-h-80 w-full min-w-[100dvw] justify-self-center overflow-visible object-cover md:min-w-0"
          />
        )}
        {image && (
          <NextImage
            src={image}
            alt="Hero Graphic"
            width={575}
            height={423}
            priority={true}
            placeholder="blur"
            className="mx-auto my-S aspect-4/3 w-full rounded-4xl object-cover shadow-2xl md:mx-S md:max-w-[575px]"
          />
        )}
        {form && (
          <div className="card mx-auto mt-S flex w-full flex-col items-center justify-stretch gap-S px-S sm:w-auto md:mx-12 md:px-10">
            <h5 className="text-center font-bold text-brand-dark-teal">{form.title}</h5>
            <HubSpotForm {...omit(form, ['title'])} className={twMerge('min-h-[379px]', form.className)} />
          </div>
        )}
        {video && (
          <div className="mx-auto my-S aspect-4/3 w-full rounded-4xl object-cover  md:max-w-[575px]">
            <VideoAnimation src={video} type="video/webm" />
          </div>
        )}
      </div>
      {children}
    </div>
  </section>
)
