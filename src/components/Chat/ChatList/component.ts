import template from './template'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import t from '../../../modules/templator'
import { TBaseProps, TComponentData } from '../../../modules/engine/shared/types'
import { ComponentInput } from '../../Input/component'
import { ComponentChat } from '../Chat/component'
import { Input } from '../../Input'
import { Button } from '../../Button'
import { ComponentButton } from '../../Button/component'
import { ComponentAnchor } from '../../Anchor/component'
import { Anchor } from '../../Anchor'
import { router } from '../../../modules/engine/router/router'
import { Controller } from './controller'

type TProps = TBaseProps

class Component extends BaseComponent {
  children: {
    chats: ComponentChat[]
  }

  search: ComponentInput

  btnCreateChat: ComponentButton

  linkProfile: ComponentAnchor

  private _controller: Controller

  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'ChatList', props, events, validator } = data
    super(name, props, events, validator)
    this._controller = new Controller(this)
  }

  data() {
    return {
      linkProfile: Anchor({
        props: { href: 'settings', text: 'Profile', class: 'text-secondary' },
        events: {
          click: () => {
            router.go('settings')
          },
        },
      }),
      search: Input({
        name: 'ChatList.search',
        props: { placeholder: 'Search' },
      }),
      children: {
        chats: [],
      },
      btnCreateChat: Button({
        name: 'ChatList.btnCreateChat',
        props: {
          title: 'Create chat',
          class: 'btn btn-primary d-inline w-10 text-center',
        },
      }),
    }
  }

  render(): string {
    const context = this.getContextData()
    return t.compile(template)(context)
  }

  mounted() {
    this.btnCreateChat.addEvent('click', this._controller.createChat)
    if (!this.children.chats.length) {
      this._controller.fetchChats().then((chats) => {
        chats.forEach((chat) => {
          this.addChat(chat)
        })
      })
    }
  }

  addChat(chat: ComponentChat): void {
    if (!this.exists(chat.props.id)) {
      this.children.chats.push(chat)
    }
  }

  exists(id: number): boolean {
    return !!this.children.chats.find((item) => item.props.id === id)
  }
}

export { Component as ComponentChatList, TProps }
