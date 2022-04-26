import AuthService from '../../../modules/services/AuthService'

export const signUp = function () {
  const form = this.form
  if (form) {
    AuthService.signUp(
      form.elements.first_name.value,
      form.elements.second_name.value,
      form.elements.login.value,
      form.elements.email.value,
      form.elements.password.value,
      form.elements.password2.value,
      form.elements.phone.value
    ).then()
  }
}
