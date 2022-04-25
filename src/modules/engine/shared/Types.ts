export type ReadonlyUnknownArray = readonly unknown[]

export type ComponentProperties = {
  name?: string
  props?: Record<string, unknown>
  events?: Record<string, (...args: ReadonlyUnknownArray) => void>
  validator?: string
}

export type ApiClientParameters = {
  baseURL?: string
  withCredentials?: boolean
  headers?: Record<string, string>
  timeout?: number
}
