import template from './template'
import t from '../../../modules/templator'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import { TBaseProps, TComponentData } from '../../../modules/engine/shared/types'
import { ComponentInput } from '../../../components/Input/component'
import { ComponentButton } from '../../../components/Button/component'
import { ComponentText } from '../../../components/Text/component'
import { Input } from '../../../components/Input'
import { Validators } from '../../../modules/validator/config'
import { Button } from '../../../components/Button'
import { Text } from '../../../components/Text'
import { router } from '../../../modules/engine/router/router'
import { Controller } from './controller'

type TProps = TBaseProps

class Component extends BaseComponent {
  login: ComponentInput

  password: ComponentInput

  btnSignIn: ComponentButton

  btnSignUp: ComponentButton

  errorText: ComponentText

  title: string

  private _controller: Controller

  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'Login', props, events, validator } = data
    super(name, props, events, validator)
    this._controller = new Controller(this)
  }

  data(): Record<string, unknown> {
    return {
      title: 'Sign in',
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
      }),
      btnSignUp: Button({
        props: { title: 'Create account', class: 'btn btn-link' },
        events: {
          click: () => {
            router.go('sign-up')
          },
        },
      }),
      errorText: Text({ props: { class: 'card-footer text-danger' } }),
    }
  }

  render(): string {
    const context = this.getContextData()
    return t.compile(template)(context)
  }

  mounted() {
    this.btnSignIn.addEvent('click', this._controller.signIn)
  }
}

export { Component as ComponentLogin, TProps }
