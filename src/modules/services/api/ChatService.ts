import ApiClient from './ApiClient'

export default {
  getChats() {
    return ApiClient.get('/chats')
  },
  createChat(title: string) {
    return ApiClient.post('/chats', { data: { title } })
  },
  deleteChat(chatId: number) {
    return ApiClient.delete('/chats', { data: { chatId } })
  },
  getChatUsers(chatId: number) {
    return ApiClient.get(`/chats/${chatId}/users`)
  },
  getNewMessagesCount(chatId: number) {
    return ApiClient.get(`/chats/new/${chatId}`)
  },
  addUserToChat(chatId: number, userIds: number[]) {
    return ApiClient.put('/chats/users', {
      data: { chatId, users: userIds },
    })
  },
  connectToChat(chatId: number) {
    return ApiClient.post(`/chats/token/${chatId}`)
  },
}
