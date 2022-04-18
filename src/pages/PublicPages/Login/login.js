import t from '../../../modules/templator'
import template from './login.tmpl'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

export default (props) => {

  const compiledTemplate = t.compile(template)
  const context = {
    login: Input({ name: 'login', placeholder: 'Login' }).template,
    password: Input({ name: 'password', placeholder: 'Password' }).template,
    btnSignIn: Button({ title: 'Sign in' }).template,
    btnSignUp: Button({ title: 'Create account', class: 'btn btn-link' }).template,
  }

  return compiledTemplate(Object.assign(context, props))

}