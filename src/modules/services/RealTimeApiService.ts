import EventBus from '../engine/reactivity/EventBus'

const BASE_URL = 'ya-praktikum.tech/ws'

class RealTimeAPI extends EventBus {
  static EVENTS = {
    OPEN: 'RealTimeAPI:open',
    MESSAGE: 'RealTimeAPI:message',
  }

  private static __instance: RealTimeAPI

  private readonly _protocol: string

  private _socket: WebSocket

  isOpen: boolean

  chatId: number

  constructor(data: { secure: boolean } = { secure: true }) {
    if (RealTimeAPI.__instance) {
      return RealTimeAPI.__instance
    }
    super()
    this._protocol = data.secure ? 'wss' : 'ws'
    RealTimeAPI.__instance = this
  }

  public connectToChat(userId: number, chatId: number, token: string): WebSocket {
    this.chatId = chatId
    this._socket = new WebSocket(`${this._protocol}://${BASE_URL}/chats/${userId}/${chatId}/${token}`)
    this._registerEvents()
    return this._socket
  }

  public sendMessage(content: string): void {
    if (this.isOpen) {
      this._socket.send(JSON.stringify({ content, type: 'message' }))
    }
  }

  public getChatMessages(): void {
    if (this.isOpen) {
      this._socket.send(JSON.stringify({ content: 0, type: 'get old' }))
    }
  }

  private _registerEvents(): void {
    this._socket.addEventListener('open', (event) => {
      this.isOpen = true
      this.emit(RealTimeAPI.EVENTS.OPEN, event)
      console.log('Connection to chat is open')
    })
    this._socket.addEventListener('message', (event) => {
      this.emit(RealTimeAPI.EVENTS.MESSAGE, event)
    })
    this._socket.addEventListener('close', () => {
      this.isOpen = false
      console.log('Connection to chat was closed')
    })
  }
}

const instance = new RealTimeAPI()

export { RealTimeAPI, instance as realtimeApiService }
