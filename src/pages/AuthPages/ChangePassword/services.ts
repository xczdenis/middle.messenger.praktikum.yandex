import UserService from '../../../modules/services/UserService'
import { ComponentChangePassword } from './component'

export const changePassword = (self: ComponentChangePassword) => () => {
  UserService.changePassword(
    self.oldPassword.getValue(),
    self.password.getValue(),
    self.password2.getValue()
  ).then()
}
