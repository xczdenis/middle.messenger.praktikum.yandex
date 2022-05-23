import template from './template'
import t from '../../modules/templator'
import BaseComponent from '../../modules/engine/shared/BaseComponent'
import { TComponentData } from '../../modules/engine/shared/types'
import { isInput } from '../../utils/typeGuards'

type TProps = {
  type?: string
  name?: string
  class?: string
  placeholder?: string
  autocomplete?: string
}

class Component extends BaseComponent {
  Props: TProps

  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'Input', props, events, validator } = data
    super(name, props, events, validator)
  }

  setup() {
    this.props.type ??= 'text'
    this.props.name ??= ''
    this.props.class ??= 'form-control'
    this.props.placeholder ??= ''
    this.props.autocomplete ??= 'on'
  }

  render(): string {
    const context = this.getContextData()
    return t.compile(template)(context)
  }

  getValue(): string {
    const input = this._getFirstChild()
    if (isInput(input)) {
      return input.value
    }
    return ''
  }

  setValue(value: string): void {
    const input = this._getFirstChild()
    if (isInput(input)) {
      input.value = value
    }
  }
}

export { Component as ComponentInput, TProps }
