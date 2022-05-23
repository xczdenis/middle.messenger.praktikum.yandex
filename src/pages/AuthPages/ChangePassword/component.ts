import template from './template'
import t from '../../../modules/templator'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import {
  TBaseProps,
  TComponentData,
} from '../../../modules/engine/shared/types'
import { ComponentInput } from '../../../components/Input/component'
import { Input } from '../../../components/Input'
import { Validators } from '../../../modules/validator/config'
import { Button } from '../../../components/Button'
import { Breadcrumb } from '../../../components/Breadcrumb'
import { changePassword } from './services'

type TProps = TBaseProps

class Component extends BaseComponent {
  oldPassword: ComponentInput

  password: ComponentInput

  password2: ComponentInput

  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'ChangePassword', props, events, validator } = data
    super(name, props, events, validator)
  }

  data(): Record<string, unknown> {
    return {
      breadcrumb: Breadcrumb({
        props: {
          items: [
            { text: 'Profile', href: '#' },
            { text: 'Change profile', href: '#' },
            { text: 'Change password', href: '#' },
          ],
        },
      }),
      oldPassword: Input({
        props: {
          name: 'oldPassword',
          placeholder: 'Old password',
          type: 'password',
        },
        validator: Validators.PASSWORD,
      }),
      password: Input({
        props: {
          name: 'password',
          placeholder: 'New password',
          type: 'password',
        },
        validator: Validators.PASSWORD,
      }),
      password2: Input({
        props: {
          name: 'password2',
          placeholder: 'Repeat new password',
          type: 'password',
        },
        validator: Validators.PASSWORD,
      }),
      btnSave: Button({
        props: { title: 'Save' },
        events: { click: changePassword(this) },
      }),
    }
  }

  render(): string {
    const context = this.getContextData()
    return t.compile(template)(context)
  }
}

export { Component as ComponentChangePassword, TProps }
