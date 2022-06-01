import { ComponentChat } from './component'
import { RealTimeAPI, realtimeApiService } from '../../../modules/services/RealTimeApiService'
import { XhrResponse } from '../../../utils/xhrResponse'
import { User } from '../../../models/User'
import { getUser } from '../../../modules/services/LocalStorageService'
import { showModalError } from '../../../utils/showModalError'
import { GStore } from '../../../modules/stores/GStore'
import ChatService from '../../../modules/services/api/ChatService'
import UserService from '../../../modules/services/api/UserService'
import Swal from 'sweetalert2'

class Controller {
  private readonly _component: ComponentChat

  private readonly _chatId: number

  constructor(component: ComponentChat) {
    this._component = component
    this._chatId = component.props.id
    this._registerEvents()
  }

  private _registerEvents(): void {
    realtimeApiService.on(RealTimeAPI.EVENTS.OPEN, this._socketServiceOnOpen)
  }

  private _socketServiceOnOpen = (): void => {
    if (this._chatId === realtimeApiService.chatId) {
      GStore.set(ComponentChat.STORE_KEYS.CURRENT_CHAT_ID, this._chatId)
    }
  }

  getUsers = async (): Promise<User[]> => {
    const response = await ChatService.getChatUsers(this._chatId).then((xhr) => {
      return new XhrResponse(xhr)
    })
    if (response.isOk()) {
      const users = response.getData<Record<string, unknown>[]>()
      return users.map((user) => new User(user))
    } else {
      showModalError(`Error: ${response.getReason()}`)
    }
    return []
  }

  connectToChat = async () => {
    const response = await ChatService.connectToChat(this._chatId).then((xhr) => {
      return new XhrResponse(xhr)
    })
    if (response.isOk()) {
      const token = response.getData<string>('token')
      const currentUser = getUser()
      if (token && currentUser.id) {
        realtimeApiService.connectToChat(currentUser.id, this._chatId, token)
      } else {
        console.log(`token or user.id is empty. token = '${token}'; user.id='${currentUser.id}'`)
      }
    } else {
      showModalError(`Error: ${response.getReason()}`)
    }
  }

  showUsers = async () => {
    this._component.toggleMenu()
    const users = await this.getUsers()
    if (users) {
      let template = ``
      users.forEach((user) => {
        template += `<li class='nav-link'>${user.login} (${user.first_name} ${user.second_name})</li>`
      })
      template = `<ul class='nav'>${template}</ul>`
      Swal.fire({
        title: 'There are:',
        html: template,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Great!',
      })
    }
  }

  addUserToChat = (): void => {
    this._component.toggleMenu()
    Swal.fire({
      title: 'Enter username',
      input: 'text',
      inputAttributes: { autocapitalize: 'off' },
      showCancelButton: true,
      confirmButtonText: 'Look up',
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        return UserService.findUser(login)
          .then((xhr) => {
            const response = new XhrResponse(xhr)
            if (response.isOk()) {
              const users = response.getData<Record<string, unknown>[]>()
              if (users) {
                return users.find((item) => item.login === login)
              }
            } else {
              throw new Error(response.getReason())
            }
          })
          .catch((error) => {
            Swal.showValidationMessage(error)
          })
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result: Record<string, any>) => {
      if (result.isConfirmed) {
        if (result.value) {
          ChatService.addUserToChat(this._chatId, [result.value.id as number])
            .then((xhr) => {
              const response = new XhrResponse(xhr)
              if (response.isOk()) {
                Swal.fire({
                  title: `${result.value.first_name}-${result.value.second_name} has been added to the chat`,
                })
              } else {
                showModalError(`Error: ${response.getReason()}`)
              }
            })
            .catch((error) => {
              console.log(error)
            })
        } else {
          Swal.fire({ title: `User with login ${result.value} not found` })
        }
      }
    })
  }

  deleteChat = () => {
    this._component.toggleMenu()
    Swal.fire({
      icon: 'warning',
      title: 'Do you really want to remove this chat?',
      confirmButtonText: 'Yes',
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        ChatService.deleteChat(this._chatId).then((xhr) => {
          const response = new XhrResponse(xhr)
          if (response.isOk()) {
            Swal.fire({
              icon: 'success',
              title: 'Done!',
              text: 'The chat has been deleted!',
              confirmButtonText: 'Great!',
            }).finally(() => {
              document.location.reload()
            })
          } else {
            showModalError(`Error: ${response.getReason()}`)
          }
        })
      }
    })
  }

  getMessages = () => {
    console.log('getMessages')
  }
}

export { Controller }
