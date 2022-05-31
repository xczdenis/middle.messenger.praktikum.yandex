import template from './template'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import { ComponentInput } from '../../Input/component'
import { ComponentButton } from '../../Button/component'
import { ComponentMessage } from '../Message/component'
import { Button } from '../../Button'
import { Input } from '../../Input'
import t from '../../../modules/templator'
import { TBaseProps, TComponentData } from '../../../modules/engine/shared/types'
import { Validators } from '../../../modules/validator/config'
import { Controller } from './controller'

type TProps = TBaseProps

class Component extends BaseComponent {
  children: {
    messages: ComponentMessage[]
  }

  btnAttach: ComponentButton

  inputMsg: ComponentInput

  btnSend: ComponentButton

  private _controller: Controller

  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'Feed', props, events, validator } = data
    super(name, props, events, validator)
    this._controller = new Controller(this)
  }

  data() {
    return {
      children: {
        messages: [],
      },
      btnAttach: Button({ name: 'Feed.btnAttach', props: { ico: 'attachment-2' } }),
      btnSend: Button({
        name: 'Feed.btnSend',
        props: { ico: 'send-plane-fill', title: 'Send', titleBp: 'xl' },
      }),
      inputMsg: Input({
        name: 'Feed.inputMsg',
        props: {
          name: 'message',
          placeholder: 'Type your message here',
          autocomplete: 'off',
        },
        validator: Validators.MESSAGE,
      }),
    }
  }

  setup() {
    this.props.h100 = true
  }

  render(): string {
    const context = this.getContextData()
    return t.compile(template)(context)
  }

  getMessageText(): string {
    return this.inputMsg.getValue()
  }

  setMessageText(text: string): void {
    return this.inputMsg.setValue(text)
  }

  sendMsg = (): void => {
    const text = this.getMessageText()
    this._controller.sendMessage(text)
    this.setMessageText('')
  }

  addMsg = (message: ComponentMessage): void => {
    this.children.messages.push(message)
  }

  mounted() {
    this.btnSend.addEvent('click', this.sendMsg)
  }
}

export { Component as ComponentFeed, TProps }
