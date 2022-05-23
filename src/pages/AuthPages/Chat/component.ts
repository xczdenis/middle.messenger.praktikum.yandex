import template from './template'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import t from '../../../modules/templator'
import { ComponentChatList } from '../../../components/Chat/ChatList/component'
import { ComponentChatFeed } from '../../../components/Chat/ChatFeed/component'
import { ChatList } from '../../../components/Chat/ChatList'
import { ChatFeed } from '../../../components/Chat/ChatFeed'
import {
  TBaseProps,
  TComponentData,
} from '../../../modules/engine/shared/types'

type TProps = TBaseProps

class Component extends BaseComponent {
  chatList: ComponentChatList

  chatFeed: ComponentChatFeed

  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'Chat', props, events, validator } = data
    super(name, props, events, validator)
  }

  data() {
    return {
      chatList: ChatList(),
      chatFeed: ChatFeed(),
    }
  }

  render(): string {
    const context = this.getContextData()
    return t.compile(template)(context)
  }
}

export { Component as ComponentChat, TProps }
