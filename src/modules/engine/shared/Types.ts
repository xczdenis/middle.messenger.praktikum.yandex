export type TFnWithArgs = <T>(...args: T[]) => void

export type TProps = Record<string, TFnWithArgs | unknown>

export type TEvents = Record<string, TFnWithArgs>

export type TComponentProperties = {
  name?: string
  props?: TProps
  events?: TEvents
  validator?: string
}

export type TApiClientParameters = {
  baseURL?: string
  withCredentials?: boolean
  headers?: Record<string, string>
  timeout?: number
}
