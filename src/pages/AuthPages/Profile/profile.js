import t from '../../../modules/templator'
import template from './profile.tmpl'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import Breadcrumb from '../../../components/Breadcrumb'
import Avatar from '../../../components/Avatar'

export default (props) => {
  const compiledTemplate = t.compile(template)
  const context = {
    breadcrumbs: Breadcrumb({
      objectList: [
        { href: '#', text: 'Chat' },
        { href: '#', text: 'My Profile' }],
    }).template,
    avatar: Avatar({
      form_name: 'form'
    }).template,
    first_name: Input({
      name: 'first_name',
      placeholder: 'Name',
    }).template,
    second_name: Input({
      name: 'second_name',
      placeholder: 'Last name',
    }).template,
    display_name: Input({
      name: 'display_name',
      placeholder: 'Display name',
    }).template,
    login: Input({
      name: 'login',
      placeholder: 'Login',
    }).template,
    email: Input({
      name: 'email',
      type: 'email',
      placeholder: 'Email',
    }).template,
    phone: Input({
      name: 'phone',
      placeholder: 'Phone',
    }).template,
    btnSave: Button({
      title: 'Save',
    }).template,
  }

  return compiledTemplate(Object.assign(context, props))
}
