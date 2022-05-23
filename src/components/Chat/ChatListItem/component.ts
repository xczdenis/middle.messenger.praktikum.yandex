import template from './template'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import t from '../../../modules/templator'
import { TComponentData } from '../../../modules/engine/shared/types'

type TProps = {
  active?: boolean
  name?: string
  itsMe?: boolean
  msg?: string
  time?: string
  newMessagesNumber?: number
}

class Component extends BaseComponent {
  props: TProps

  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'ChatListItem', props, events, validator } = data
    super(name, props, events, validator)
  }

  setup() {
    this.props.name ??= '<user>'
    this.props.itsMe ??= false
    this.props.msg ??= '<msg>'
    this.props.time ??= '<time>'
    this.props.newMessagesNumber ??= 0
  }

  render(): string {
    const context = this.getContextData()
    return t.compile(template)(context)
  }
}

export { Component as ComponentChatListItem, TProps }
