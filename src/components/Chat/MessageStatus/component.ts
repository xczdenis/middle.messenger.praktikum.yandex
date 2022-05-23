import template from './template'
import t from '../../../modules/templator'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import { TComponentData } from '../../../modules/engine/shared/types'

type TProps = {
  isRead?: boolean
  isDelivered?: boolean
}

class Component extends BaseComponent {
  props: TProps

  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'MessageStatus', props, events, validator } = data
    super(name, props, events, validator)
  }

  render(): string {
    const context = this.getContextData()
    return t.compile(template)(context)
  }
}

export { Component as ComponentMessageStatus, TProps }
