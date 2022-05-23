import template from './template'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import t from '../../../modules/templator'
import { TComponentData } from '../../../modules/engine/shared/types'
import { ComponentMessageStatus } from '../MessageStatus/component'
import { MessageStatus } from '../MessageStatus'

type TProps = {
  isMine?: boolean
  text?: string
  time?: string
}

class Component extends BaseComponent {
  props: TProps

  status: ComponentMessageStatus

  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'Message', props, events, validator } = data
    super(name, props, events, validator)
  }

  data() {
    return {
      status: MessageStatus(),
    }
  }

  render(): string {
    const context = this.getContextData()
    return t.compile(template)(context)
  }

  markAsDelivered(): void {
    this.status.props.isDelivered = true
  }

  markAsRead(): void {
    this.status.props.isRead = true
  }
}

export { Component as ComponentMessage, TProps }
