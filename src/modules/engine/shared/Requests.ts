import { ApiClientParameters } from './Types'

enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

type Options = {
  method: METHOD
  timeout?: number
  data?: Record<string, string>
}
type OptionsWithoutMethod = Omit<Options, 'method'>

function encode(input: string): string {
  try {
    return encodeURIComponent(input)
  } catch (e) {
    return ''
  }
}

function queryStringify(data: Record<string, string>) {
  const pairs: string[] = []
  Object.keys(data).forEach((key) => {
    if (data[key]) {
      const kEncode = encode(key)
      const vEncode = encode(data[key])
      if (kEncode && vEncode) {
        pairs.push(kEncode + '=' + vEncode)
      }
    }
  })
  return pairs.length ? '?' + pairs.join('&') : ''
}

class Requests {
  private readonly _client: XMLHttpRequest

  private readonly _baseUrl: string = ''

  constructor(data: ApiClientParameters = {}) {
    const xhr = new XMLHttpRequest()
    // const headers = data.headers
    // if (headers) {
    //   Object.keys(headers).forEach((key) =>
    //     xhr.setRequestHeader(key, headers[key])
    //   )
    // }
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
    return this.request(url, { ...options, method: METHOD.GET })
  }

  post(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHOD.POST })
  }

  put(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHOD.PUT })
  }

  delete(
    url: string,
    options: OptionsWithoutMethod = {}
  ): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHOD.DELETE })
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

      if (method === METHOD.GET || !data) {
        // xhr.send()
        console.log(`Send request to ${xhrUrl}`)
      } else {
        // xhr.send(JSON.stringify(data))
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
