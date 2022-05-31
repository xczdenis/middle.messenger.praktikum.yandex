import template from './template'
import t from '../../modules/templator'
import BaseComponent from '../../modules/engine/shared/BaseComponent'
import { TComponentData } from '../../modules/engine/shared/types'

type TProps = {
  href?: string
  class?: string
  text?: string
}

class Component extends BaseComponent {
  props: TProps

  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'Anchor', props, events } = data
    super(name, props, events)
  }

  getContextData(): Record<string, unknown> {
    const context = super.getContextData()
    context.href = this.props.href ?? '#'
    return context
  }

  render(): string {
    const context = this.getContextData()
    return t.compile(template)(context)
  }
}

export { Component as ComponentAnchor, TProps }
