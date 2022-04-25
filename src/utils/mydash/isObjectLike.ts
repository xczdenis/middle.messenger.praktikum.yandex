function isObjectLike<T>(value: T): boolean {
  return typeof value === 'object' && value !== null
}

export default isObjectLike
