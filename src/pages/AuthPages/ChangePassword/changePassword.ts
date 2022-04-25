import template from './template'
import t from '../../../modules/templator'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { Validators } from '../../../modules/validator/config'
import Breadcrumb from '../../../components/Breadcrumb'
import { changePassword } from './services'

export default class extends BaseComponent {
  render(): string {
    const context = {}
    return t.compile(template)(Object.assign(context, this.props))
  }

  children() {
    return [
      Breadcrumb({
        name: 'Breadcrumb',
        props: {
          items: [
            { href: '#', text: 'Chat' },
            { href: '#', text: 'My Profile' },
            { href: '#', text: 'Change password' },
          ],
        },
      }),
      Input({
        name: 'OldPassword',
        props: {
          name: 'oldPassword',
          placeholder: 'Old password',
          type: 'password',
        },
        validator: Validators.PASSWORD,
      }),
      Input({
        name: 'Password',
        props: {
          name: 'password',
          placeholder: 'New password',
          type: 'password',
        },
        validator: Validators.PASSWORD,
      }),
      Input({
        name: 'Password2',
        props: {
          name: 'password2',
          placeholder: 'Repeat new password',
          type: 'password',
        },
        validator: Validators.PASSWORD,
      }),
      Button({
        name: 'BtnSave',
        props: { title: 'Save' },
        events: { click: changePassword },
      }),
    ]
  }
}
