import { clsx } from 'clsx'

interface ITableCellProps extends React.TdHTMLAttributes<HTMLTableCellElement> {
  align?: 'left' | 'center' | 'right'
  bold?: boolean
  component?: 'th' | 'td'
  rawStyling?: boolean
}

export const TableCell: React.FC<ITableCellProps> = ({
  align = 'left',
  component: Cell = 'td',
  bold,
  className,
  rawStyling,
  ...props
}) => (
  <Cell
    className={
      rawStyling
        ? className
        : clsx(className, 'border-brand-medium-grey px-5 py-2', {
            'text-center': align === 'center',
            'text-right': align === 'right',
            'text-left': align === 'left',
            'font-semibold': Cell === 'th' || bold,
          })
    }
    {...props}
  />
)
