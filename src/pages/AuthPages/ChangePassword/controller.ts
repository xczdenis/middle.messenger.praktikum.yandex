import { ComponentChangePassword } from './component'
import { XhrResponse } from '../../../utils/xhrResponse'
import { router } from '../../../modules/engine/router/router'
import { showModalError } from '../../../utils/showModalError'
import UserService from '../../../modules/services/api/UserService'
import Swal from 'sweetalert2'

class Controller {
  private _component: ComponentChangePassword

  constructor(component: ComponentChangePassword) {
    this._component = component
  }

  changePassword = () => {
    const data = {
      oldPassword: this._component.oldPassword.getValue(),
      newPassword: this._component.password.getValue(),
    }
    UserService.changePassword(data).then((xhr) => {
      const response = new XhrResponse(xhr)
      if (response.isOk()) {
        Swal.fire({ icon: 'success', title: 'Your password has been changed' }).finally(() => {
          router.go('settings')
        })
      } else {
        showModalError(`Error: ${response.getReason()}`)
      }
    })
  }
}

export { Controller }
