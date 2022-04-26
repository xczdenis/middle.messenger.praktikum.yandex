export function encode(input: string): string {
  try {
    return encodeURIComponent(input)
  } catch (e) {
    return ''
  }
}

export function queryStringify(data: Record<string, string>) {
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
