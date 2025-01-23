declare module '*.svg' {
  const content: SVGSVGElement
  export default content
}

declare global {
  type Maybe<T> = T | null | undefined
  type ClassName = HTMLProps<HTMLElement>['className']
}

export {}
