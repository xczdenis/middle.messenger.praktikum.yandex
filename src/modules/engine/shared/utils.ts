import { isString } from '../../../utils/typeGuards'

export function encode(input: string): string {
  try {
    return encodeURIComponent(input)
  } catch (e) {
    return ''
  }
}

export function queryStringify(data: Record<string, unknown>) {
  const pairs: string[] = []
  Object.keys(data).forEach((key) => {
    const value = data[key]
    if (value && isString(value)) {
      const kEncode = encode(key)
      const vEncode = encode(value)
      if (kEncode && vEncode) {
        pairs.push(kEncode + '=' + vEncode)
      }
    }
  })
  return pairs.length ? '?' + pairs.join('&') : ''
}
