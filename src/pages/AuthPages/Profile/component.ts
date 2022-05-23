import template from './template'
import t from '../../../modules/templator'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import {
  TBaseProps,
  TComponentData,
} from '../../../modules/engine/shared/types'
import { ComponentInput } from '../../../components/Input/component'
import { ComponentButton } from '../../../components/Button/component'
import { ComponentBreadcrumb } from '../../../components/Breadcrumb/component'
import { Input } from '../../../components/Input'
import { Validators } from '../../../modules/validator/config'
import { Button } from '../../../components/Button'
import { changeProfile } from './services'
import { Breadcrumb } from '../../../components/Breadcrumb'
import { Avatar } from '../../../components/Avatar'

type TProps = TBaseProps

class Component extends BaseComponent {
  breadcrumb: ComponentBreadcrumb

  first_name: ComponentInput

  second_name: ComponentInput

  login: ComponentInput

  email: ComponentInput

  password: ComponentInput

  password2: ComponentInput

  phone: ComponentInput

  btnSignUp: ComponentButton

  btnSignIn: ComponentButton

  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'Profile', props, events, validator } = data
    super(name, props, events, validator)
  }

  data(): Record<string, unknown> {
    return {
      avatar: Avatar({ props: { form_name: 'form' } }),
      breadcrumb: Breadcrumb({
        props: {
          items: [
            { text: 'Profile', href: '#' },
            { text: 'Change profile', href: '#' },
          ],
        },
      }),
      first_name: Input({
        props: { name: 'first_name', placeholder: 'Name' },
        validator: Validators.FIRST_NAME,
      }),
      second_name: Input({
        props: { name: 'second_name', placeholder: 'Last name' },
        validator: Validators.SECOND_NAME,
      }),
      login: Input({
        props: { name: 'login', placeholder: 'Login' },
        validator: Validators.LOGIN,
      }),
      email: Input({
        props: { name: 'email', placeholder: 'Email', type: 'email' },
        validator: Validators.EMAIL,
      }),
      phone: Input({
        props: { name: 'phone', placeholder: 'Phone' },
        validator: Validators.PHONE,
      }),
      btnSave: Button({
        props: { title: 'Save' },
        events: { click: changeProfile(this) },
      }),
    }
  }

  render(): string {
    const context = this.getContextData()
    return t.compile(template)(context)
  }
}

export { Component as ComponentProfile, TProps }
