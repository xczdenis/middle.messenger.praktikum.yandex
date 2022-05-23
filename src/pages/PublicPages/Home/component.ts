import template from './template'
import t from '../../../modules/templator'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import {
  TBaseProps,
  TComponentData,
} from '../../../modules/engine/shared/types'

type TProps = TBaseProps

class Component extends BaseComponent {
  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'Home', props, events, validator } = data
    super(name, props, events, validator)
  }

  render(): string {
    const context = this.getContextData()
    return t.compile(template)(context)
  }
}

export { Component as ComponentHome, TProps }
