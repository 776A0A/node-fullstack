declare type AnyFunction = (...args: any[]) => any

declare type NormalObject = Record<string, any>

declare type Nullable<T> = T | null | undefined

declare type DeepNonNullable<T> = {
  [P in keyof T]: T[P] extends object ? DeepNonNullable<T[P]> : NonNullable<T[P]>
}

declare interface Direction {
  down: boolean
  left: boolean
  right: boolean
  up: boolean
}

declare interface Edge {
  bottom?: number
  left?: number
  right?: number
  top?: number
}

declare interface Injectable<T> {
  inject(value: T): void
}