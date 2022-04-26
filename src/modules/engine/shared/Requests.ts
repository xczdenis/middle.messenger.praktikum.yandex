import { TApiClientParameters } from './Types'
import { queryStringify } from './utils'

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
  data?: Record<string, string>
}
type OptionsWithoutMethod = Omit<Options, 'method'>

class Requests {
  private readonly _client: XMLHttpRequest

  private readonly _baseUrl: string = ''

  constructor(data: TApiClientParameters = {}) {
    const xhr = new XMLHttpRequest()
    xhr.timeout = data.timeout ? data.timeout : 5000
    xhr.withCredentials = data.withCredentials ? data.withCredentials : false

    this._baseUrl = data.baseURL ? data.baseURL : ''
    this._client = xhr
  }

  get(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    if (options.data) {
      url += queryStringify(options.data)
    }
    return this.request(url, { ...options, method: Method.GET })
  }

  post(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: Method.POST })
  }

  put(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: Method.PUT })
  }

  delete(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: Method.DELETE })
  }

  request(url: string, options: Options): Promise<XMLHttpRequest> {
    const { method, data, timeout } = options

    return new Promise((resolve, reject) => {
      const xhr = this._client
      const xhrUrl = `${this._baseUrl}${url}`
      if (timeout) {
        xhr.timeout = timeout
      }

      xhr.open(method, xhrUrl)

      if (method === Method.GET || !data) {
        console.log(`Send request to ${xhrUrl}`)
      } else {
        console.log(data)
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
