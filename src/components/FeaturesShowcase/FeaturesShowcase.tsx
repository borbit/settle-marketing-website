'use client'

import { useState } from 'react'
import { MobileShowcase } from './components/MobileShowcase/MobileShowcase'
import { DesktopShowcase } from './components/DesktopShowcase/DesktopShowcase'
import type { IFeatureCard } from './FeaturesShowcase.types'

interface IFeaturesShowcaseProps {
  cards: IFeatureCard[]
}

export const FeaturesShowcase: React.FC<IFeaturesShowcaseProps> = ({ cards }) => {
  const [selected, setSelected] = useState(0)

  return (
    <>
      <DesktopShowcase className="hidden md:grid" cards={cards} selected={selected} onChange={setSelected} />
      <MobileShowcase className="grid md:hidden" cards={cards} selected={selected} onChange={setSelected} />
    </>
  )
}
