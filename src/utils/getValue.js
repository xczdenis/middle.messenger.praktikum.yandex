import isObjectLike from './mydash/isObjectLike'

export default (object, key, defaultValue) => {
  return isObjectLike(object) && object[key] !== undefined
    ? object[key]
    : defaultValue
}
