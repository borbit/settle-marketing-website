import type { ImageProps } from 'next/image'

export interface IFeatureCard {
  title: string
  description: string
  legalNote?: string
  image: ImageProps['src']
}
