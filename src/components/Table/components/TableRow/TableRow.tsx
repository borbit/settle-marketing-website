import { forwardRef } from 'react'
import { clsx } from 'clsx'

interface ITableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  bold?: boolean
  rawStyling?: boolean
}

export const TableRow = forwardRef<HTMLTableRowElement, ITableRowProps>(
  ({ className, bold, rawStyling, ...props }, ref) => (
    <tr ref={ref} className={rawStyling ? className : clsx(className, 'h-14', { 'font-semibold': bold })} {...props} />
  ),
)

TableRow.displayName = 'TableRow'
