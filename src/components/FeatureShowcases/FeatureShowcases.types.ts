import { ImageProps } from 'next/image'
import { TVideoAnimationProps } from '@components/VideoAnimation/VideoAnimation'

export interface IFeatureShowCaseCard {
  title: string
  tag?: string
  description: React.ReactNode | string
  legalNote?: string
  image?: ImageProps['src']
  video?: TVideoAnimationProps['src']
}
