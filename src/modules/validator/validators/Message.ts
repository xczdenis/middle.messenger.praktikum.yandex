import BaseValidator from './BaseValidator'

class Validator extends BaseValidator {
  errorText = 'не должно быть пустым'

  validate = (value: string): boolean => {
    return value.length > 0
  }
}

const instance = new Validator()

export { instance as MessageValidator }
