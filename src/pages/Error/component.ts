import template from './template'
import t from '../../modules/templator'
import BaseComponent from '../../modules/engine/shared/BaseComponent'
import { TComponentData } from '../../modules/engine/shared/types'

type TProps = {
  errorCode?: number
  errorText?: string
}

class Component extends BaseComponent {
  props: TProps

  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'Error', props, events, validator } = data
    super(name, props, events, validator)
  }

  setup() {
    this.props.errorCode ??= 0
    let errorText = 'Some unknown error :('
    switch (this.props.errorCode) {
      case 404:
        errorText = "We've not found this page :("
        break
      case 500:
        errorText = 'We are fixing this right now'
        break
    }
    this.props.errorText ??= errorText
  }

  render(): string {
    const context = this.getContextData()
    return t.compile(template)(context)
  }
}

export { Component as ComponentError, TProps }
