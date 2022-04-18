import t from '../../../modules/templator'
import template from './signUp.tmpl'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

export default (props) => {
  const compiledTemplate = t.compile(template)
  const fields = [
    Input({ name: 'first_name', placeholder: 'Name' }),
    Input({ name: 'second_name', placeholder: 'Last name' }),
    Input({ name: 'login', placeholder: 'Login' }),
    Input({ name: 'email', type: 'email', placeholder: 'Email' }),
    Input({ name: 'password', type: 'password', placeholder: 'Password' }),
    Input({
      name: 'password2',
      type: 'password',
      placeholder: 'Repeat password',
    }),
    Input({ name: 'phone', placeholder: 'Phone' }),
  ]
  const context = {
    fields: fields,
    buttons: [
      Button({ title: 'Create account' }),
      Button({ title: 'Sign in', class: 'btn btn-link' }),
    ],
  }

  return compiledTemplate(Object.assign(context, props))
}
