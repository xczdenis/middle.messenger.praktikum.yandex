import { ComponentProfile } from './component'
import { XhrResponse } from '../../../utils/xhrResponse'
import { router } from '../../../modules/engine/router/router'
import { showModalError } from '../../../utils/showModalError'
import { removeUser } from '../../../modules/services/LocalStorageService'
import AuthService from '../../../modules/services/api/AuthService'
import UserService from '../../../modules/services/api/UserService'
import Swal from 'sweetalert2'

class Controller {
  private _component: ComponentProfile

  constructor(component: ComponentProfile) {
    this._component = component
  }

  setUserInfo = async () => {
    const response = await AuthService.getUserInfo().then((xhr) => {
      return new XhrResponse(xhr)
    })
    if (response.isOk()) {
      const data = response.getData<Record<string, any>>()
      this._component.first_name.setValue(data.first_name)
      this._component.second_name.setValue(data.second_name)
      this._component.display_name.setValue(data.display_name)
      this._component.login.setValue(data.login)
      this._component.email.setValue(data.email)
      this._component.phone.setValue(data.phone)
      this._component.avatarForm.props.avatarURL = `https://ya-praktikum.tech/api/v2/resources/${data.avatar}`
    } else {
      router.go('/')
    }
  }

  changeProfile = () => {
    const data = {
      first_name: this._component.first_name.getValue(),
      second_name: this._component.second_name.getValue(),
      login: this._component.login.getValue(),
      display_name: this._component.display_name.getValue(),
      email: this._component.email.getValue(),
      phone: this._component.phone.getValue(),
    }
    UserService.changeProfile(data).then((xhr) => {
      const response = new XhrResponse(xhr)
      if (response.isOk()) {
        Swal.fire({ icon: 'success', title: 'Your profile has been changed' })
      } else {
        showModalError(`Error: ${response.getReason()}`)
      }
    })
  }

  changeAvatar = () => {
    const formData = this._component.avatarForm.getFormData()
    if (formData) {
      UserService.changeAvatar(formData).then((xhr) => {
        const response = new XhrResponse(xhr)
        if (response.isOk()) {
          Swal.fire({ icon: 'success', title: 'Your profile has been changed' }).finally(() => {
            document.location.reload()
          })
        } else {
          showModalError(`Error: ${response.getReason()}`)
        }
      })
    }
  }

  logout = async () => {
    const response = await AuthService.logout().then((xhr) => {
      return new XhrResponse(xhr)
    })
    if (response.isOk()) {
      removeUser()
      router.go('/')
    } else {
      showModalError(`Error: ${response.getReason()}`)
    }
  }
}

export { Controller }
