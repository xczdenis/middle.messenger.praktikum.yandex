import ApiClient from './ApiClient'

export default {
  login(data: { login: string; password: string }) {
    return ApiClient.post('/auth/signin', { data: data })
  },
  logout() {
    return ApiClient.post('/auth/logout')
  },
  signUp(data: {
    first_name: string
    second_name: string
    login: string
    email: string
    password: string
    password2: string
    phone: string
  }) {
    return ApiClient.post('/auth/signup', { data: data })
  },
  getUserInfo() {
    return ApiClient.get('/auth/user')
  },
}
