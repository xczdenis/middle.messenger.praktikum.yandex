import ChatService from '../../../modules/services/ChatService'

export const sendMsg = function () {
  const form = this.form
  if (form) {
    ChatService.sendMsg(form.elements.message.value).then()
  }
}
