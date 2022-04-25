import BaseValidator from './BaseValidator'

class Validator extends BaseValidator {
  errorText =
    'латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)'

  validate = (value: string): boolean => {
    /*
      First name riles:
      - First letter is capital
      - Can contains (A-z|А-я)
      - Can contains dash (-)
    */
    const res = /^[A-Z|А-Я][A-я\-]*$/.exec(value)
    return !!res
  }
}

const instance = new Validator()

export { instance as SecondNameValidator }
