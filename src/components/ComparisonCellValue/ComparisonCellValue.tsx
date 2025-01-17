import { isBoolean } from 'lodash'
import { IncludedIndicator } from './components/IncludedIndicator/IncludedIndicator'

interface IComparisonCellValueProps {
  children: React.ReactNode | string | boolean
}

export const ComparisonCellValue: React.FC<IComparisonCellValueProps> = ({ children: value }) =>
  isBoolean(value) ? <IncludedIndicator value={value} /> : value
