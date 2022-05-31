import template from './template'
import t from '../../../modules/templator'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import { TBaseProps, TComponentData } from '../../../modules/engine/shared/types'
import { ComponentInput } from '../../../components/Input/component'
import { ComponentButton } from '../../../components/Button/component'
import { Input } from '../../../components/Input'
import { Validators } from '../../../modules/validator/config'
import { Button } from '../../../components/Button'
import { Avatar } from '../../../components/Avatar'
import { router } from '../../../modules/engine/router/router'
import { isInput } from '../../../utils/typeGuards'
import { Controller } from './controller'
import { ComponentAnchor } from '../../../components/Anchor/component'
import { Anchor } from '../../../components/Anchor'
import { ComponentAvatar } from '../../../components/Avatar/component'

const THEME_LIGHT = 'theme-light'
const THEME_DARK = 'theme-dark'

type TProps = TBaseProps

class Component extends BaseComponent {
  first_name: ComponentInput

  second_name: ComponentInput

  display_name: ComponentInput

  login: ComponentInput

  email: ComponentInput

  password: ComponentInput

  password2: ComponentInput

  phone: ComponentInput

  btnSave: ComponentButton

  btnChangePassword: ComponentButton

  btnLogout: ComponentButton

  linkChat: ComponentAnchor

  avatarForm: ComponentAvatar

  private _controller: Controller

  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'Profile', props, events, validator } = data
    super(name, props, events, validator)
    this._controller = new Controller(this)
  }

  data(): Record<string, unknown> {
    return {
      avatarForm: Avatar({ props: { formId: 'avatarForm' } }),
      linkChat: Anchor({
        props: { text: 'Chat', class: 'text-secondary' },
        events: {
          click: () => {
            router.go('messenger')
          },
        },
      }),
      first_name: Input({
        props: { name: 'first_name', placeholder: 'Name' },
        validator: Validators.FIRST_NAME,
      }),
      second_name: Input({
        props: { name: 'second_name', placeholder: 'Last name' },
        validator: Validators.SECOND_NAME,
      }),
      login: Input({
        props: { name: 'login', placeholder: 'Login' },
        validator: Validators.LOGIN,
      }),
      display_name: Input({
        props: { name: 'display_name', placeholder: 'Display name' },
      }),
      email: Input({
        props: { name: 'email', placeholder: 'Email', type: 'email' },
        validator: Validators.EMAIL,
      }),
      phone: Input({
        props: { name: 'phone', placeholder: 'Phone' },
        validator: Validators.PHONE,
      }),
      btnSave: Button({
        props: { title: 'Save' },
      }),
      btnChangePassword: Button({
        props: { title: 'Change password', class: 'mx-2 btn btn-secondary' },
        events: {
          click: () => {
            router.go('change-password')
          },
        },
      }),
      btnLogout: Button({
        props: { title: 'Logout', class: 'mx-2 btn btn-danger' },
      }),
    }
  }

  getContextData(): Record<string, unknown> {
    const context = super.getContextData()
    if (localStorage.getItem('theme') === THEME_DARK) {
      context.checked = 'checked'
    }
    return context
  }

  render(): string {
    const context = this.getContextData()
    return t.compile(template)(context)
  }

  mounted() {
    this.btnLogout.addEvent('click', this._controller.logout)
    this.btnSave.addEvent('click', this._controller.changeProfile)
    this.avatarForm.btnSave.addEvent('click', this._controller.changeAvatar)
    const switcher = this.getElement()?.querySelector('#theme_switcher')
    if (isInput(switcher)) {
      switcher.addEventListener('click', () => {
        const page = document.getElementById('app')
        if (page) {
          if (switcher.checked) {
            localStorage.setItem('theme', THEME_DARK)
            page.classList.remove(THEME_LIGHT)
            page.classList.add(THEME_DARK)
          } else {
            localStorage.setItem('theme', THEME_LIGHT)
            page.classList.remove(THEME_DARK)
            page.classList.add(THEME_LIGHT)
          }
        }
      })
    }
    this._controller.setUserInfo()
  }
}

export { Component as ComponentProfile, TProps }
