abstract class BaseValidator {
  errorText: string

  validate: (value: string) => boolean
}

export default BaseValidator
