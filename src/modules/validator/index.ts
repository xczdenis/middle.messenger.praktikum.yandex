import { Validators } from './config'
import validateHTMLElement from './validateHTMLElement'
import { LoginValidator } from './validators/Login'
import { PasswordValidator } from './validators/Password'
import { FirstNameValidator } from './validators/FirstName'
import { SecondNameValidator } from './validators/SecondName'
import { EmailValidator } from './validators/Email'
import { PhoneValidator } from './validators/Phone'
import { MessageValidator } from './validators/Message'

class Validator {
  name: string

  element: Element | null = null

  wrapper: Element | null = null

  constructor(name: string, element: Element | null = null) {
    this.name = name
    this.element = element
  }

  getValidator(): (() => void) | null {
    switch (this.name) {
      case Validators.LOGIN:
        return validateHTMLElement(this.element, LoginValidator)
      case Validators.PASSWORD:
        return validateHTMLElement(this.element, PasswordValidator)
      case Validators.FIRST_NAME:
        return validateHTMLElement(this.element, FirstNameValidator)
      case Validators.SECOND_NAME:
        return validateHTMLElement(this.element, SecondNameValidator)
      case Validators.EMAIL:
        return validateHTMLElement(this.element, EmailValidator)
      case Validators.PHONE:
        return validateHTMLElement(this.element, PhoneValidator)
      case Validators.MESSAGE:
        return validateHTMLElement(this.element, MessageValidator)
      default:
        return null
    }
  }
}

export default Validator
