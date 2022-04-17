function first(array) {
  const length = array === null ? 0 : array.length
  return length ? array[0] : undefined
}
