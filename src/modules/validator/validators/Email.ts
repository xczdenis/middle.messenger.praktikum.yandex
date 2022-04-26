import BaseValidator from './BaseValidator'

class Validator extends BaseValidator {
  errorText =
    'латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть «собака» (@) и точка после неё, но перед точкой обязательно должны быть буквы'

  validate = (value: string): boolean => {
    /*
      Email can only have:
      - Letters (A-Z)
      - Numbers (0-9)
      - At (@)
      - Dot (.)
      - Dash (-)
      - Underscores (_)
    */
    const res =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.exec(
        value
      )
    return !!res
  }
}

const instance = new Validator()

export { instance as EmailValidator }
