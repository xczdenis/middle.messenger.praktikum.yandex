import template from './template'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import t from '../../../modules/templator'
import {
  TBaseProps,
  TComponentData,
} from '../../../modules/engine/shared/types'
import { ComponentBreadcrumb } from '../../Breadcrumb/component'
import { ComponentInput } from '../../Input/component'
import { ComponentChatListItem } from '../ChatListItem/component'
import { Breadcrumb } from '../../Breadcrumb'
import { Input } from '../../Input'
import { ChatListItem } from '../ChatListItem'

type TProps = TBaseProps

class Component extends BaseComponent {
  children: {
    dialogues: ComponentChatListItem[]
  }

  breadcrumb: ComponentBreadcrumb

  search: ComponentInput

  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'ChatList', props, events, validator } = data
    super(name, props, events, validator)
  }

  data() {
    return {
      breadcrumb: Breadcrumb({
        props: { items: [{ href: '#', text: 'My Profile' }] },
      }),
      search: Input({
        name: 'Search',
        props: { placeholder: 'Search' },
      }),
      children: {
        dialogues: [],
      },
    }
  }

  setup() {
    for (let i = 0; i < 15; i++) {
      this.children.dialogues.push(
        ChatListItem({
          name: 'fake-dialog-1',
          props: { name: 'Alice', time: `${i}:01` },
        })
      )
    }
  }

  render(): string {
    const context = this.getContextData()
    return t.compile(template)(context)
  }
}

export { Component as ComponentChatList, TProps }
