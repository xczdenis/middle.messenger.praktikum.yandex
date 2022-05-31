import template from './template'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import { ComponentButton } from '../../Button/component'
import { ComponentText } from '../../Text/component'
import { Button } from '../../Button'
import { Text } from '../../Text'
import t from '../../../modules/templator'
import { TComponentData } from '../../../modules/engine/shared/types'
import { GStore } from '../../../modules/stores/GStore'
import { User } from '../../../models/User'
import { Controller } from './controller'

type TProps = {
  id: number
  title: string
  active?: boolean
  itsMe?: boolean
  msg?: string
  time?: string
  newMessagesNumber?: number
}

class Component extends BaseComponent {
  static STORE_KEYS = {
    CURRENT_CHAT_ID: 'Chat.CURRENT_CHAT_ID',
  }

  props: TProps

  btnMenu: ComponentButton

  navLinkAddUser: ComponentText

  navLinkDeleteChat: ComponentText

  navLinkShowUsers: ComponentText

  users: User[]

  private _controller: Controller

  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'Chat', props, events, validator } = data
    super(name, props, events, validator)
    this._controller = new Controller(this)
  }

  data() {
    return {
      btnMenu: Button({
        name: 'Chat.btnMenu',
        props: {
          title: '...',
          class: 'btn btn-menu',
        },
      }),
      navLinkAddUser: Text({
        name: 'Chat.navLinkAddUser',
        props: { text: 'Add user', class: 'nav-link' },
      }),
      navLinkDeleteChat: Text({
        name: 'Chat.navLinkDeleteChat',
        props: { text: 'Delete chat', class: 'nav-link' },
      }),
      navLinkShowUsers: Text({
        name: 'Chat.navLinkShowUsers',
        props: { text: 'Show users', class: 'nav-link' },
      }),
    }
  }

  setup() {
    this.props.title ??= '<user>'
    this.props.itsMe ??= false
    this.props.msg ??= '<msg>'
    this.props.time ??= '<time>'
    this.props.newMessagesNumber ??= 0

    GStore.on(Component.STORE_KEYS.CURRENT_CHAT_ID, () => {
      const element = this._getFirstChild()
      if (element) {
        if (GStore.get<number>(Component.STORE_KEYS.CURRENT_CHAT_ID) === this.props.id) {
          element.classList.add('active')
        } else {
          element.classList.remove('active')
        }
      }
    })
  }

  render(): string {
    const context = this.getContextData()
    return t.compile(template)(context)
  }

  toggleMenu = (): void => {
    const element = this.getElement()
    if (element) {
      element.querySelector('.chat__menu')?.classList.toggle('d-none')
    }
  }

  mounted() {
    this.btnMenu.addEvent('click', this.toggleMenu)
    this.navLinkShowUsers.addEvent('click', this._controller.showUsers)
    this.navLinkDeleteChat.addEvent('click', this._controller.deleteChat)
    this.navLinkAddUser.addEvent('click', this._controller.addUserToChat)
    this.addEvent('click', this._controller.connectToChat)
  }

  addUser(user: User): void {
    if (!this.userExists(user.id)) {
      this.users.push(user)
    }
  }

  userExists(id: number): boolean {
    return !!this.users.find((item) => item.id === id)
  }
}

export { Component as ComponentChat, TProps }
