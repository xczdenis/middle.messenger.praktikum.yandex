import t from '../../../modules/templator'
import template from './signUp.tmpl'
import Input from '../../../components/Input'
import Button from '../../../components/Button'

export default (props) => {
  const compiledTemplate = t.compile(template)
  const context = {
    first_name: Input({
      name: 'first_name',
      placeholder: 'Name',
    }).template,
    second_name: Input({
      name: 'second_name',
      placeholder: 'Last name',
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
    password: Input({
      name: 'password',
      type: 'password',
      placeholder: 'Password',
    }).template,
    password2: Input({
      name: 'password2',
      type: 'password',
      placeholder: 'Repeat password',
    }).template,
    phone: Input({
      name: 'phone',
      placeholder: 'Phone',
    }).template,
    btnSignUp: Button({
      title: 'Create account',
    }).template,
    btnSignIn: Button({
      title: 'Sign in',
      class: 'btn btn-link',
    }).template,
  }

  return compiledTemplate(Object.assign(context, props))
}
