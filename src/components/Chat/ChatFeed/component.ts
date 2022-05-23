import template from './template'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import { ComponentInput } from '../../Input/component'
import { ComponentButton } from '../../Button/component'
import { ComponentMessage } from '../Message/component'
import { Button } from '../../Button'
import { Input } from '../../Input'
import { Message } from '../Message'
import t from '../../../modules/templator'
import {
  TBaseProps,
  TComponentData,
} from '../../../modules/engine/shared/types'
import { Validators } from '../../../modules/validator/config'

type TProps = TBaseProps

class Component extends BaseComponent {
  children: {
    messages: ComponentMessage[]
  }

  btnAttach: ComponentButton

  inputMsg: ComponentInput

  btnSend: ComponentButton

  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'ChatFeed', props, events, validator } = data
    super(name, props, events, validator)
  }

  data() {
    return {
      children: {
        messages: [],
      },
      btnAttach: Button({ props: { ico: 'attachment-2' } }),
      btnSend: Button({
        props: { ico: 'send-plane-fill', title: 'Send', titleBp: 'xl' },
      }),
      inputMsg: Input({
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
    const msg1 = Message({
      props: { text: 'Привет!', time: '10:59' },
    })
    const msg2 = Message({
      props: { text: 'ну привет )', isMine: true, time: '11:00' },
    })
    this.children.messages.push(msg1, msg2)
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
    if (text) {
      const msg = Message({
        props: {
          text: text,
          isMine: true,
          time: '11:00',
        },
      })
      this.children.messages.push(msg)
      setTimeout(() => {
        msg.markAsDelivered()
      }, 2000)
      setTimeout(() => {
        msg.markAsRead()
      }, 10000)
    }
    this.setMessageText('')
  }

  mounted() {
    this.btnSend.addEvent('click', this.sendMsg)
  }
}

export { Component as ComponentChatFeed, TProps }
