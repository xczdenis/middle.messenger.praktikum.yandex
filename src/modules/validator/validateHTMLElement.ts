import { isHTMLInputElement } from './typeGuards'
import { ClassInvalid } from './config'
import BaseValidator from './validators/BaseValidator'

const validateHTMLElement = (element: Element | null, validator: BaseValidator) => (): void => {
  if (element && isHTMLInputElement(element)) {
    const value = element.value
    const wrapper = element.parentElement
    const validationFeedback = wrapper ? wrapper.querySelector('.validation-feedback') : null
    const error = !validator.validate(value)
    if (error) {
      element.classList.add(ClassInvalid)
      if (validationFeedback) {
        if (!validationFeedback.classList.contains('manual')) {
          validationFeedback.textContent = validator.errorText
        }
        validationFeedback.setAttribute('style', 'display: block')
      }
    } else {
      if (validationFeedback) {
        validationFeedback.setAttribute('style', 'display: none')
      }
    }
  }
}

export default validateHTMLElement
