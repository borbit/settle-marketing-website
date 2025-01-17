'use client'

import { clsx } from 'clsx'
import { useState } from 'react'
import { SwitchButtons } from '@components/SwitchButtons/SwitchButtons'
import { ProductTourScreen, IProductTourScreenProps } from '../ProductTourScreen/ProductTourScreen'

export type TMultipleProductToursScreenDemoItem = IProductTourScreenProps['demo'] & {
  label: string
}

export interface IMultipleProductToursScreenProps {
  demos: TMultipleProductToursScreenDemoItem[]
}

export const MultipleProductToursScreen: React.FC<IMultipleProductToursScreenProps> = ({ demos }) => {
  const [current, setCurrent] = useState(demos[0].src)

  return (
    <div className="-mt-5 flex flex-col items-stretch justify-center space-y-M">
      <SwitchButtons
        current={current}
        onChange={setCurrent}
        buttons={demos.map(({ src, label }) => ({ value: src, label }))}
      />
      {demos.map(({ src, preview }) => (
        <ProductTourScreen key={src} demo={{ src, preview }} className={clsx({ hidden: src !== current })} />
      ))}
    </div>
  )
}
