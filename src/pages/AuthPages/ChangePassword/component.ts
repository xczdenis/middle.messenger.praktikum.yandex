import template from './template'
import t from '../../../modules/templator'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import { TBaseProps, TComponentData } from '../../../modules/engine/shared/types'
import { ComponentInput } from '../../../components/Input/component'
import { ComponentButton } from '../../../components/Button/component'
import { Input } from '../../../components/Input'
import { Validators } from '../../../modules/validator/config'
import { Button } from '../../../components/Button'
import { ComponentAnchor } from '../../../components/Anchor/component'
import { Anchor } from '../../../components/Anchor'
import { router } from '../../../modules/engine/router/router'
import { Controller } from './controller'

type TProps = TBaseProps

class Component extends BaseComponent {
  oldPassword: ComponentInput

  password: ComponentInput

  linkChat: ComponentAnchor

  linkProfile: ComponentAnchor

  btnSave: ComponentButton

  private _controller: Controller

  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'ChangePassword', props, events, validator } = data
    super(name, props, events, validator)
    this._controller = new Controller(this)
  }

  data(): Record<string, unknown> {
    return {
      linkChat: Anchor({
        props: { text: 'Chat', class: 'text-secondary' },
        events: {
          click: () => {
            router.go('messenger')
          },
        },
      }),
      linkProfile: Anchor({
        props: { text: 'Profile', class: 'text-secondary' },
        events: {
          click: () => {
            router.go('settings')
          },
        },
      }),
      oldPassword: Input({
        props: {
          name: 'oldPassword',
          placeholder: 'Old password',
          type: 'password',
        },
        validator: Validators.PASSWORD,
      }),
      password: Input({
        props: {
          name: 'password',
          placeholder: 'New password',
          type: 'password',
        },
        validator: Validators.PASSWORD,
      }),
      btnSave: Button({
        props: { title: 'Save' },
      }),
    }
  }

  render(): string {
    const context = this.getContextData()
    return t.compile(template)(context)
  }

  mounted() {
    this.btnSave.addEvent('click', this._controller.changePassword)
  }
}

export { Component as ComponentChangePassword, TProps }
