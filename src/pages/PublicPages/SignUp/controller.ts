import { ComponentSignUp } from './component'
import { XhrResponse } from '../../../utils/xhrResponse'
import { router } from '../../../modules/engine/router/router'
import AuthService from '../../../modules/services/api/AuthService'

class Controller {
  private _component: ComponentSignUp

  constructor(component: ComponentSignUp) {
    this._component = component
  }

  signUp = (): void => {
    const data = {
      first_name: this._component.first_name.getValue(),
      second_name: this._component.second_name.getValue(),
      login: this._component.login.getValue(),
      email: this._component.email.getValue(),
      password: this._component.password.getValue(),
      password2: this._component.password2.getValue(),
      phone: this._component.phone.getValue(),
    }
    AuthService.signUp(data).then((xhr) => {
      const response = new XhrResponse(xhr)
      if (response.isOk()) {
        router.go('messenger')
      } else {
        this._component.errorText.props.text = `Error: ${JSON.parse(xhr.response).reason}`
      }
    })
  }
}

export { Controller }
