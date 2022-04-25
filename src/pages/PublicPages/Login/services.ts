import AuthService from '../../../modules/services/AuthService'

export const signIn = function () {
  const form = this.form
  if (form) {
    AuthService.login(
      form.elements.login.value,
      form.elements.password.value
    ).then()
  }
}
