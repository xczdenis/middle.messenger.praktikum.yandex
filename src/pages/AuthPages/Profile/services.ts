import UserService from '../../../modules/services/UserService'

export const changeProfile = function () {
  const form = this.form
  if (form) {
    UserService.changeProfile(
      form.elements.first_name.value,
      form.elements.second_name.value,
      form.elements.login.value,
      form.elements.email.value,
      form.elements.phone.value
    ).then()
  }
}
