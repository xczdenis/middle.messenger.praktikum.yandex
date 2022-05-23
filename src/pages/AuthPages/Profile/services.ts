import UserService from '../../../modules/services/UserService'
import { ComponentProfile } from './component'

export const changeProfile = (self: ComponentProfile) => (): void => {
  UserService.changeProfile(
    self.first_name.getValue(),
    self.second_name.getValue(),
    self.login.getValue(),
    self.email.getValue(),
    self.phone.getValue()
  ).then()
}
