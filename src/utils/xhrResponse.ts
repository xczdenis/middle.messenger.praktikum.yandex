const STATUS_CODE_ARRAY_OK = [200]

class XhrResponse {
  private readonly _xhr: XMLHttpRequest

  response: string

  constructor(xhr: XMLHttpRequest) {
    this._xhr = xhr
    this.response = xhr.response
  }

  isOk(): boolean {
    return !!STATUS_CODE_ARRAY_OK.find((item) => item === this._xhr.status)
  }

  parseResponse(): any {
    let obj
    try {
      obj = JSON.parse(this.response)
    } catch (e) {
      obj = {}
    }
    return obj
  }

  getData<T>(dataKey = ''): T {
    const obj = this.parseResponse()
    if (dataKey) {
      return obj[dataKey]
    }
    return obj
  }

  getReason(): string {
    return this.getData<string>('reason') || this.response
  }
}

export { XhrResponse }
