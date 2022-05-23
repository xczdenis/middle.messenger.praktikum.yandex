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
import { signIn } from './services'

type TProps = TBaseProps

class Component extends BaseComponent {
  login: ComponentInput

  password: ComponentInput

  btnSignIn: ComponentButton

  btnSignUp: ComponentButton

  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'Login', props, events, validator } = data
    super(name, props, events, validator)
  }

  data(): Record<string, unknown> {
    return {
      login: Input({
        props: { name: 'login', placeholder: 'Login' },
        validator: Validators.LOGIN,
      }),
      password: Input({
        props: { name: 'password', placeholder: 'Password', type: 'password' },
        validator: Validators.PASSWORD,
      }),
      btnSignIn: Button({
        props: { title: 'Sign in' },
        events: { click: signIn(this) },
      }),
      btnSignUp: Button({
        props: { title: 'Create account', class: 'btn btn-link' },
      }),
    }
  }

  render(): string {
    const context = this.getContextData()
    return t.compile(template)(context)
  }
}

export { Component as ComponentLogin, TProps }
