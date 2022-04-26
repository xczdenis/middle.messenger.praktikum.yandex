import template from './template'
import t from '../../../modules/templator'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { signIn } from './services'
import { Validators } from '../../../modules/validator/config'

export default class extends BaseComponent {
  render(): string {
    const context = {}
    return t.compile(template)(Object.assign(context, this.props))
  }

  children() {
    return [
      Input({
        name: 'login',
        props: { name: 'login', placeholder: 'Login' },
        validator: Validators.LOGIN,
      }),
      Input({
        name: 'password',
        props: { name: 'password', placeholder: 'Password', type: 'password' },
        validator: Validators.PASSWORD,
      }),
      Button({
        name: 'btnSignIn',
        props: { title: 'Sign in' },
        events: { click: signIn },
      }),
      Button({
        name: 'btnSignUp',
        props: { title: 'Create account', class: 'btn btn-link' },
      }),
    ]
  }
}
