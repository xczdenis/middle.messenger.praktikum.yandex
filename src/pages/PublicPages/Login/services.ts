import AuthService from '../../../modules/services/AuthService'
import { ComponentLogin } from './component'

export const signIn = (self: ComponentLogin) => (): void => {
  AuthService.login(self.login.getValue(), self.password.getValue()).then()
}
