import template from './template'
import t from '../../../modules/templator'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import {
  TBaseProps,
  TComponentData,
} from '../../../modules/engine/shared/types'
import { ComponentInput } from '../../../components/Input/component'
import { ComponentButton } from '../../../components/Button/component'
import { Input } from '../../../components/Input'
import { Validators } from '../../../modules/validator/config'
import { Button } from '../../../components/Button'
import { signUp } from './services'

type TProps = TBaseProps

class Component extends BaseComponent {
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
    const { name = 'SignUp', props, events, validator } = data
    super(name, props, events, validator)
  }

  data(): Record<string, unknown> {
    return {
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
      password: Input({
        props: { name: 'password', placeholder: 'Password', type: 'password' },
        validator: Validators.PASSWORD,
      }),
      password2: Input({
        props: {
          name: 'password2',
          placeholder: 'Repeat password',
          type: 'password',
        },
        validator: Validators.PASSWORD,
      }),
      phone: Input({
        props: { name: 'phone', placeholder: 'Phone' },
        validator: Validators.PHONE,
      }),
      btnSignUp: Button({
        props: { title: 'Create account' },
        events: { click: signUp(this) },
      }),
      btnSignIn: Button({
        props: { title: 'Sign in', class: 'btn btn-link' },
      }),
    }
  }

  render(): string {
    const context = this.getContextData()
    return t.compile(template)(context)
  }
}

export { Component as ComponentSignUp, TProps }
