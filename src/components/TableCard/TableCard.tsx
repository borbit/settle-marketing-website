import { clsx } from 'clsx'

type TTableCardProps = React.HTMLAttributes<HTMLDivElement>

export const TableCard: React.FC<TTableCardProps> = ({ className, children, ...props }) => (
  <div className={clsx(className, 'overflow-y-auto')} {...props}>
    <div className="card min-w-fit overflow-x-auto">{children}</div>
  </div>
)
