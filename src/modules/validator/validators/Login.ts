import BaseValidator from './BaseValidator'

class Validator extends BaseValidator {
  errorText =
    'от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)'

  validate = (value: string): boolean => {
    /*
      Usernames can only have:
      - Letters (A-z)
      - Numbers (0-9)
      - Dash (-)
      - Underscores (_)
    */
    const res = /^[A-z0-9_\-]+$/.exec(value)
    const resNumbers = /^\d+$/.exec(value)
    return !!res && !resNumbers && value.length >= 3 && value.length <= 20
  }
}

const instance = new Validator()

export { instance as LoginValidator }
