import isObjectLike from './mydash/isObjectLike'

function getValue<T>(
  object: Record<string, T>,
  key: string,
  defaultValue: T
): T {
  return isObjectLike(object) && object[key] !== undefined
    ? object[key]
    : defaultValue
}

export default getValue
