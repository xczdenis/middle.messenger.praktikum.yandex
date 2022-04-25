import ApiClient from './ApiClient'

export default {
  login(username: string, password: string) {
    return ApiClient.post('/auth/token', {
      data: { username, password },
    })
  },
  refresh(refreshToken: string) {
    return ApiClient.post('/auth/refresh/', {
      data: { refresh: refreshToken },
    })
  },
  signUp(
    first_name: string,
    second_name: string,
    login: string,
    email: string,
    password: string,
    password2: string,
    phone: string
  ) {
    return ApiClient.post('/signUp', {
      data: {
        first_name,
        second_name,
        login,
        email,
        password,
        password2,
        phone,
      },
    })
  },
}
