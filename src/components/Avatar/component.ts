import template from './template'
import t from '../../modules/templator'
import BaseComponent from '../../modules/engine/shared/BaseComponent'
import { ComponentButton } from '../Button/component'
import { Button } from '../Button'
import { TComponentData } from '../../modules/engine/shared/types'
import { isForm } from '../../utils/typeGuards'

type TProps = {
  formId?: string
  avatarURL?: string
}

class Component extends BaseComponent {
  props: TProps

  btnSave: ComponentButton

  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'Avatar', props, events, validator } = data
    super(name, props, events, validator)
  }

  data(): Record<string, unknown> {
    return {
      btnSave: Button({ name: 'saveAvatar', props: { title: 'Change', type: 'submit' } }),
    }
  }

  getContextData(): Record<string, unknown> {
    const context = super.getContextData()
    context.formId = this.props.formId ?? 'avatarForm'
    return context
  }

  render(): string {
    const context = this.getContextData()
    return t.compile(template)(context)
  }

  getFormData(): FormData | null {
    const form = this._getFirstChild()
    if (isForm(form)) {
      return new FormData(form)
    }
    return null
  }
}

export { Component as ComponentAvatar, TProps }
