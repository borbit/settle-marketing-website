import { useMedia } from 'react-use'
import { useTailwindConfig, type TTailwindConfig } from '../useTailwindConfig/useTailwindConfig'

type TTailwindBreakpoint = keyof TTailwindConfig['theme']['screens']

export const useTailwindBreakpoint = (breakpoint: TTailwindBreakpoint, defaultValue = true) => {
  const { theme } = useTailwindConfig()

  return useMedia(`(min-width: ${theme.screens[breakpoint]})`, defaultValue)
}
