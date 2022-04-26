import isObjectLike from './mydash/isObjectLike'

function getValue<TValue, TDefaultValue>(
  object: Record<string, TValue>,
  key: string,
  defaultValue: TDefaultValue
): TValue | TDefaultValue {
  return isObjectLike(object) && object[key] !== undefined
    ? object[key]
    : defaultValue
}

export default getValue
