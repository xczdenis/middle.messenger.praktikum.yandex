import { ComponentChatList } from './component'
import { ComponentChat } from '../Chat/component'
import { isArray } from '../../../utils/mydash/isArray'
import ChatService from '../../../modules/services/api/ChatService'
import { Chat } from '../Chat'
import { XhrResponse } from '../../../utils/xhrResponse'
import Swal from 'sweetalert2'

class Controller {
  private _component: ComponentChatList

  constructor(component: ComponentChatList) {
    this._component = component
  }

  fetchChats = (): Promise<ComponentChat[]> => {
    return new Promise((resolve) => {
      ChatService.getChats().then((xhr) => {
        const response = new XhrResponse(xhr)
        if (response.isOk()) {
          const responseChats = response.getData()
          if (isArray(responseChats)) {
            const chats = responseChats.map((item: { id: number; title: string }) => {
              return Chat({ props: { id: item.id, title: item.title } })
            })
            resolve(chats)
          }
        } else {
          console.log('error', xhr.response)
        }
      })
    })
  }

  createChat = (): void => {
    Swal.fire({
      title: 'Chat name',
      input: 'text',
      confirmButtonText: 'Create',
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        ChatService.createChat(result.value).then((xhr) => {
          const response = new XhrResponse(xhr)
          if (response.isOk()) {
            const data = response.getData<Record<string, number>>()
            if (data) {
              this._component.addChat(Chat({ props: { id: data.id, title: result.value } }))
            }
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `Error: ${JSON.parse(xhr.response).reason}`,
              showConfirmButton: false,
              footer: '<a href="/">I want to go home</a>',
            })
          }
        })
      }
    })
  }
}

export { Controller }
