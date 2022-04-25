import ChatService from '../../../modules/services/ChatService'

export const senMsg = function () {
  const form = this.form
  if (form) {
    ChatService.sendMsg(form.elements.message.value).then()
  }
}
