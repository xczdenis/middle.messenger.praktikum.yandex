import BaseValidator from './BaseValidator'

class Validator extends BaseValidator {
  errorText = 'от 10 до 15 символов, состоит из цифр, может начинается с плюса'

  validate = (value: string): boolean => {
    /*
      Phone can contains:
      - Number (0-9)
    */
    const res = /^\+*[0-9]+$/.exec(value)
    return !!res && value.length >= 10 && value.length <= 15
  }
}

const instance = new Validator()

export { instance as PhoneValidator }
