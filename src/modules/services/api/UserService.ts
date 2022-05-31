import ApiClient from './ApiClient'

export default {
  findUser(login: string) {
    return ApiClient.post('/user/search', { data: { login } })
  },
  changeProfile(data: {
    first_name: string
    second_name: string
    login: string
    display_name: string
    email: string
    phone: string
  }) {
    return ApiClient.put('/user/profile', { data: data })
  },
  changePassword(data: { oldPassword: string; newPassword: string }) {
    return ApiClient.put('/user/password', { data: data })
  },
  changeAvatar(avatar: FormData) {
    return ApiClient.put('/user/profile/avatar', {
      setHeaders: false,
      data: avatar,
    })
  },
}
