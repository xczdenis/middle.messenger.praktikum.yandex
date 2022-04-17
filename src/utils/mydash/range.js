function baseRange(start, end, step, fromRight) {
  let index = -1,
    length = Math.max(Math.ceil((end - start) / (step || 1)), 0),
    result = Array(length)

  while (length--) {
    result[fromRight ? length : ++index] = start
    start += step
  }
  return result
}

function range(start, end, step, fromRight) {
  if (step && typeof step !== 'number') {
    end = step = undefined
  }
  if (end === undefined) {
    end = start
    start = 0
  }
  step = step === undefined ? (start < end ? 1 : -1) : step
  return baseRange(start, end, step, fromRight)
}
