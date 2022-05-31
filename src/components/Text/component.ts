import template from './template'
import t from '../../modules/templator'
import BaseComponent from '../../modules/engine/shared/BaseComponent'
import { TComponentData } from '../../modules/engine/shared/types'

type TProps = {
  text?: string
  class?: string
}

class Component extends BaseComponent {
  props: TProps

  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'Text', props, events } = data
    super(name, props, events)
  }

  render(): string {
    const context = this.getContextData()
    return t.compile(template)(context)
  }
}

export { Component as ComponentText, TProps }
