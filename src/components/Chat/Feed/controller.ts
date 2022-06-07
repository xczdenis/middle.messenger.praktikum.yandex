import { Message } from '../Message'
import { ComponentFeed } from './component'
import { RealTimeAPI, realtimeApiService } from '../../../modules/services/RealTimeApiService'
import { getUser } from '../../../modules/services/LocalStorageService'
import { showModalError } from '../../../utils/showModalError'
import { isArray } from '../../../utils/mydash/isArray'
import { ComponentMessage } from '../Message/component'

function getTimeFromData(data: Record<string, string>): string {
  let time = ''
  try {
    const dateTime = new Date(data.time)
    time = `${dateTime.getHours()}:${dateTime.getMinutes()}`
  } catch (e) {
    time = '-'
  }
  return time
}

function makeMessageFromData(data: Record<string, any>, currentUserId: number): ComponentMessage {
  return Message({
    props: {
      text: data.content,
      isMine: data.user_id === currentUserId,
      time: getTimeFromData(data),
    },
  })
}

class Controller {
  private _component: ComponentFeed

  constructor(component: ComponentFeed) {
    this._component = component
    this._registerEvents()
  }

  private _registerEvents(): void {
    realtimeApiService.on(RealTimeAPI.EVENTS.MESSAGE, this._socketServiceOnMessage)
    realtimeApiService.on(RealTimeAPI.EVENTS.OPEN, this._socketServiceOnOpen)
  }

  private _socketServiceOnMessage = (event: MessageEvent): void => {
    const currentUser = getUser()
    if (event.data) {
      const eventData = JSON.parse(event.data)
      if (isArray(eventData)) {
        eventData.forEach((item) => {
          this._component.addMsg(makeMessageFromData(item, currentUser.id))
        })
      } else {
        this._component.addMsg(makeMessageFromData(eventData, currentUser.id))
      }
    }
  }

  private _socketServiceOnOpen = (): void => {
    this._component.children.messages = []
    realtimeApiService.getChatMessages()
  }

  sendMessage = (content: string): void => {
    if (realtimeApiService.isOpen) {
      if (content) {
        realtimeApiService.sendMessage(content)
      }
    } else {
      showModalError(`Failed to connect to the server. Try to tap on some chat`)
    }
  }
}

export { Controller }
