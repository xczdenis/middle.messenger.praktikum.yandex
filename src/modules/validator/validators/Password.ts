import BaseValidator from './BaseValidator'

class Validator extends BaseValidator {
  errorText =
    'от 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра'

  validate = (value: string): boolean => {
    /*
      Password must contains:
      - Letter (A-Z)
      - Number (0-9)
    */
    const resNumber = /^.*[0-9]+.*$/.exec(value)
    const resLetter = /^.*[A-Z]+.*$/.exec(value)
    return !!resNumber && !!resLetter && value.length >= 8 && value.length <= 40
  }
}

const instance = new Validator()

export { instance as PasswordValidator }
