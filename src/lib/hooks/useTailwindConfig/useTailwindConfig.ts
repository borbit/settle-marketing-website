import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from 'tailwind.config'

export const useTailwindConfig = () => resolveConfig(tailwindConfig)

export type TTailwindConfig = ReturnType<typeof useTailwindConfig>
