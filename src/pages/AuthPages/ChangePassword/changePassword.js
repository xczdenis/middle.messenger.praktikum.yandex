import t from '../../../modules/templator'
import template from './changePassword.tmpl'
import Input from '../../../components/Input'
import Button from '../../../components/Button'
import Breadcrumb from '../../../components/Breadcrumb'

export default (props) => {
  const compiledTemplate = t.compile(template)
  const context = {
    breadcrumbs: Breadcrumb({
      objectList: [
        { href: '#', text: 'Chat' },
        { href: '#', text: 'My Profile' },
        { href: '#', text: 'Change password' }],
    }).template,
    oldPassword: Input({
      name: 'oldPassword',
      placeholder: 'Old password',
    }).template,
    newPassword: Input({
      name: 'newPassword',
      placeholder: 'New password',
    }).template,
    newPasswordRepeat: Input({
      name: 'newPasswordRepeat',
      placeholder: 'Repeat new password',
    }).template,
    btnSave: Button({
      title: 'Save',
    }).template,
  }

  return compiledTemplate(Object.assign(context, props))
}
