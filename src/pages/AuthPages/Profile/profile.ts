import template from './template'
import t from '../../../modules/templator'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import { Validators } from '../../../modules/validator/config'
import Breadcrumb from '../../../components/Breadcrumb'
import { changeProfile } from './services'
import Avatar from '../../../components/Avatar'

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
          ],
        },
      }),
      Avatar({
        props: { form_name: 'form' },
      }),
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
        name: 'phone',
        props: { name: 'phone', placeholder: 'Phone' },
        validator: Validators.PHONE,
      }),
      Button({
        name: 'btnSave',
        props: { title: 'Save' },
        events: { click: changeProfile },
      }),
    ]
  }
}
