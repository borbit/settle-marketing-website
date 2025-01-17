import { clsx } from 'clsx'

type TTableProps = React.HTMLAttributes<HTMLTableElement>

export const Table: React.FC<TTableProps> = ({ className, ...props }) => (
  <table className={clsx(className, 'w-full overflow-hidden border-brand-medium-grey text-base')} {...props} />
)

export { TableHead } from './components/TableHead/TableHead'
export { TableBody } from './components/TableBody/TableBody'
export { TableFooter } from './components/TableFooter/TableFooter'
export { TableCell } from './components/TableCell/TableCell'
export { TableRow } from './components/TableRow/TableRow'
