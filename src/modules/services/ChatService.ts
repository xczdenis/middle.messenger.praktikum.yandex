import ApiClient from './ApiClient'

export default {
  sendMsg(text: string) {
    return ApiClient.post('/msg', {
      data: { text },
    })
  },
}
