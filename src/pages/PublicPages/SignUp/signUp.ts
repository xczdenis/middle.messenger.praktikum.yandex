import template from './template'
import t from '../../../modules/templator'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { signUp } from './services'
import { Validators } from '../../../modules/validator/config'

export default class extends BaseComponent {
  render(): string {
    const context = {}
    return t.compile(template)(Object.assign(context, this.props))
  }

  children() {
    return [
      Input({
        name: 'first_name',
        props: { name: 'first_name', placeholder: 'Name' },
        validator: Validators.FIRST_NAME,
      }),
      Input({
        name: 'second_name',
        props: { name: 'second_name', placeholder: 'Last name' },
        validator: Validators.SECOND_NAME,
      }),
      Input({
        name: 'login',
        props: { name: 'login', placeholder: 'Login' },
        validator: Validators.LOGIN,
      }),
      Input({
        name: 'email',
        props: { name: 'email', placeholder: 'Email', type: 'email' },
        validator: Validators.EMAIL,
      }),
      Input({
        name: 'password',
        props: { name: 'password', type: 'password', placeholder: 'Password' },
        validator: Validators.PASSWORD,
      }),
      Input({
        name: 'password2',
        props: {
          name: 'password2',
          type: 'password',
          placeholder: 'Repeat password',
        },
        validator: Validators.PASSWORD,
      }),
      Input({
        name: 'phone',
        props: { name: 'phone', placeholder: 'Phone' },
        validator: Validators.PHONE,
      }),
      Button({
        name: 'btnSignUp',
        props: { title: 'Create account' },
        events: { click: signUp },
      }),
      Button({
        name: 'btnSignIn',
        props: { title: 'Sign in', class: 'btn btn-link' },
      }),
    ]
  }
}
