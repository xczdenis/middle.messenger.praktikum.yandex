import { ComponentLogin } from './component'
import AuthService from '../../../modules/services/api/AuthService'
import { XhrResponse } from '../../../utils/xhrResponse'
import { router } from '../../../modules/engine/router/router'
import { setUser } from '../../../modules/services/LocalStorageService'
import { User } from '../../../models/User'
import { showModalError } from '../../../utils/showModalError'

class Controller {
  private _component: ComponentLogin

  constructor(component: ComponentLogin) {
    this._component = component
  }



  updateUser = async () => {
    const response = await AuthService.getUserInfo().then((xhr) => {
      return new XhrResponse(xhr)
    })
    if (response.isOk()) {
      setUser(new User(response.getData<Record<string, any>>()))
    }
  }

  signIn = async () => {
    const login = this._component.login.getValue()
    const password = this._component.password.getValue()
    if (login) {
      const response = await AuthService.login({ login, password }).then((xhr) => {
        return new XhrResponse(xhr)
      })
      if (response.isOk()) {
        await this.updateUser()
        router.go('/messenger')
      } else {
        this._component.errorText.props.text = `Error: ${response.getReason()}`
      }
    } else {
      showModalError(`Enter correct login and password`)
    }
  }
}

export { Controller }
