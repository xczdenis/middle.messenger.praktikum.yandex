export type TFnWithArgs = (...args: any[]) => void

export type TBaseProps = Record<string, TFnWithArgs | unknown>

export type TEvents = Record<string, TFnWithArgs>

export type TComponentData<Props> = {
  name?: string
  props?: Props
  events?: TEvents
  validator?: string
}

export type TApiClientParameters = {
  baseURL?: string
  withCredentials?: boolean
  headers?: Record<string, string>
  timeout?: number
}
