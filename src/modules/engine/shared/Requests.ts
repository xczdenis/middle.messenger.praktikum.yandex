import { TApiClientParameters } from './types'
import { queryStringify } from './utils'
import { isPlainObject } from '../../../utils/mydash/isPlainObject'

enum Method {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

type Options = {
  method: Method
  timeout?: number
  data?: Record<string, unknown> | any
  setHeaders?: boolean
}
type OptionsWithoutMethod = Omit<Options, 'method'>

class Requests {
  private readonly _client: XMLHttpRequest

  private readonly _baseUrl: string = ''

  private readonly _headers: Record<string, string> | undefined

  constructor(data: TApiClientParameters = {}) {
    const xhr = new XMLHttpRequest()
    xhr.timeout = data.timeout ? data.timeout : 5000
    xhr.withCredentials = data.withCredentials ? data.withCredentials : false

    this._baseUrl = data.baseURL ? data.baseURL : ''
    this._headers = data.headers
    this._client = xhr
  }

  public get(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    if (options.data) {
      url += queryStringify(options.data)
    }
    return this._request(url, { ...options, method: Method.GET })
  }

  public post(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this._request(url, { ...options, method: Method.POST })
  }

  public put(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this._request(url, { ...options, method: Method.PUT })
  }

  public delete(url: string, options: OptionsWithoutMethod = {}): Promise<XMLHttpRequest> {
    return this._request(url, { ...options, method: Method.DELETE })
  }

  private _request(url: string, options: Options): Promise<XMLHttpRequest> {
    const { method, data, timeout, setHeaders = true } = options
    return new Promise((resolve, reject) => {
      const xhr = this._client
      const xhrUrl = `${this._baseUrl}${url}`
      if (timeout) {
        xhr.timeout = timeout
      }

      xhr.open(method, xhrUrl)

      if (setHeaders && this._headers) {
        Object.entries(this._headers).forEach(([key, value]) => {
          xhr.setRequestHeader(key, value)
        })
      }

      if (method === Method.GET || !data) {
        xhr.send()
      } else {
        if (isPlainObject(data)) {
          xhr.send(JSON.stringify(data))
        } else {
          xhr.send(data)
        }
      }

      xhr.onload = () => {
        resolve(xhr)
      }
      xhr.onabort = reject
      xhr.onerror = reject
      xhr.ontimeout = reject
    })
  }
}

export default Requests
