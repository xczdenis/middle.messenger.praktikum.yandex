import ApiClient from './ApiClient'

export default {
  changeProfile(
    first_name: string,
    second_name: string,
    login: string,
    email: string,
    phone: string
  ) {
    return ApiClient.post('/profile', {
      data: { first_name, second_name, login, email, phone },
    })
  },
  changePassword(oldPassword: string, password: string, password2: string) {
    return ApiClient.post('/password', {
      data: { oldPassword, password, password2 },
    })
  },
}
