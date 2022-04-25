import UserService from '../../../modules/services/UserService'

export const changePassword = function () {
  const form = this.form
  if (form) {
    UserService.changePassword(
      form.elements.oldPassword.value,
      form.elements.password.value,
      form.elements.password2.value
    ).then()
  }
}
