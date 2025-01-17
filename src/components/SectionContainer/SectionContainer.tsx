import { clsx } from 'clsx'
import { forwardRef } from 'react'

export interface ISectionContainerProps {
  id?: string
  title?: React.ReactNode
  subtitle?: React.ReactNode
  className?: ClassName
  slotProps?: {
    title?: Pick<React.HTMLProps<HTMLHeadingElement>, 'className'>
    subtitle?: Pick<React.HTMLProps<HTMLParagraphElement>, 'className'>
  }
}

export const SectionContainer = forwardRef<HTMLElement, React.PropsWithChildren<ISectionContainerProps>>(
  ({ title, subtitle, slotProps, children, className, ...props }, ref) => (
    <section ref={ref} {...props} className={clsx('container', className)}>
      {(title || subtitle) && (
        <div className="mb-M space-y-3 text-center">
          {title && (
            <h2 {...slotProps?.title} className={clsx('text-center', slotProps?.title?.className)}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p
              {...slotProps?.subtitle}
              className={clsx(slotProps?.subtitle?.className, 'mx-auto max-w-5xl text-center')}
            >
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  ),
)

SectionContainer.displayName = 'SectionContainer'
