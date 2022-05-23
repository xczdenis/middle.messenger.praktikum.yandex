import AuthService from '../../../modules/services/AuthService'
import { ComponentSignUp } from './component'

export const signUp = (self: ComponentSignUp) => (): void => {
  AuthService.signUp(
    self.first_name.getValue(),
    self.second_name.getValue(),
    self.login.getValue(),
    self.email.getValue(),
    self.password.getValue(),
    self.password2.getValue(),
    self.phone.getValue()
  ).then()
}
