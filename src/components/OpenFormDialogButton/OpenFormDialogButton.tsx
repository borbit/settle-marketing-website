'use client'

import { useState } from 'react'
import { FormDialog, IFormDialogProps } from '@components/FormDialog/FormDialog'

export interface IOpenFormDialogButtonProps {
  label: string
  className?: ClassName
  form: Omit<IFormDialogProps, 'open' | 'onClose'>
}

export const OpenFormDialogButton: React.FC<IOpenFormDialogButtonProps> = ({
  label,
  className = 'btn--secondary--light',
  form,
}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className={className} onClick={() => setOpen(true)}>
        {label}
      </button>
      <FormDialog open={open} onClose={() => setOpen(false)} {...form} />
    </>
  )
}
