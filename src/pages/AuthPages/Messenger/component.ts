import template from './template'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import t from '../../../modules/templator'
import { ComponentChatList } from '../../../components/Chat/ChatList/component'
import { ComponentFeed } from '../../../components/Chat/Feed/component'
import { ChatList } from '../../../components/Chat/ChatList'
import { Feed } from '../../../components/Chat/Feed'
import { TBaseProps, TComponentData } from '../../../modules/engine/shared/types'

type TProps = TBaseProps

class Component extends BaseComponent {
  chatList: ComponentChatList

  chatFeed: ComponentFeed

  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'Messenger', props, events, validator } = data
    super(name, props, events, validator)
  }

  data() {
    return {
      chatList: ChatList({ props: { h100: true } }),
      chatFeed: Feed(),
    }
  }

  render(): string {
    const context = this.getContextData()
    return t.compile(template)(context)
  }
}

export { Component as ComponentMessenger, TProps }
