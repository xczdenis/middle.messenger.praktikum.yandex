import isArrayLike from './isArrayLike'
import isObjectLike from './isObjectLike'

function getTag(value) {
  if (value === null) {
    return value === undefined ? '[object Undefined]' : '[object Null]'
  }
  return toString.call(value)
}

const objectProto = Object.prototype

function isPrototype(value) {
  const ctor = value && value.constructor
  const proto = (typeof ctor === 'function' && ctor.prototype) || objectProto

  return value === proto
}

function isArguments(value) {
  return isObjectLike(value) && getTag(value) === '[object Arguments]'
}

// Реализация лодаша
function isEmpty(value) {
  if (value === null) {
    return true
  }

  if (
    isArrayLike(value) &&
    (Array.isArray(value) ||
      typeof value === 'string' ||
      typeof value.splice === 'function' ||
      isBuffer(value) ||
      isTypedArray(value) ||
      isArguments(value))
  ) {
    return !value.length
  }

  const tag = getTag(value)
  if (tag === '[object Map]' || tag === '[object Set]') {
    return !value.size
  }

  if (isPrototype(value)) {
    return !Object.keys(value).length
  }

  for (const key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false
    }
  }

  return true
}
