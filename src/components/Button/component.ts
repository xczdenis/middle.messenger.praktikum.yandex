import template from './template'
import t from '../../modules/templator'
import BaseComponent from '../../modules/engine/shared/BaseComponent'
import { TComponentData } from '../../modules/engine/shared/types'

type TProps = {
  type?: string
  class?: string
  ico?: string
  title?: string
  titleBp?: string
}

class Component extends BaseComponent {
  props: TProps

  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'Button', props, events, validator } = data
    super(name, props, events, validator)
  }

  getContextData(): Record<string, unknown> {
    const context = super.getContextData()
    let titleClass = ''
    if (this.props.title && this.props.ico) {
      titleClass = 'ms-2'
    }
    if (this.props.titleBp) {
      titleClass += ` d-none d-${this.props.titleBp}-block`
    }
    context.type = this.props.type ?? 'button'
    context.buttonClass = this.props.class ?? 'btn btn-primary'
    context.titleClass = titleClass
    return context
  }

  render(): string {
    const context = this.getContextData()
    return t.compile(template)(context)
  }
}

export { Component as ComponentButton, TProps }
