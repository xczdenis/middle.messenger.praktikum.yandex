import template from './template'
import t from '../../../modules/templator'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import ChatFeedMessage from '../ChatFeedMessage'
import Input from '../../Input'
import { Validators } from '../../../modules/validator/config'
import Button from '../../Button'
import { senMsg } from './services'

export default class extends BaseComponent {
  render(): string {
    const context = {
      messages: true,
    }
    return t.compile(template)(Object.assign(context, this.props))
  }

  children() {
    return [
      ChatFeedMessage({
        name: 'Msg1',
        props: {
          isMine: false,
          text: 'Hi! What are you doing?',
          time: '11:56',
        },
      }),
      ChatFeedMessage({
        name: 'Msg2',
        props: {
          isMine: true,
          text: 'am gonna to drive my Porsche.',
          time: '11:57',
          msgSent: true,
          msgDelivered: true,
          msgRead: true,
        },
      }),
      ChatFeedMessage({
        name: 'Msg3',
        props: {
          isMine: true,
          text: 'you?',
          time: '11:58',
          msgSent: true,
          msgDelivered: true,
          msgRead: false,
        },
      }),
      Input({
        name: 'InputMsg',
        props: { name: 'message', placeholder: 'Type your message' },
        validator: Validators.MESSAGE,
      }),
      Button({
        name: 'BtnAttach',
        props: { name: 'attachFile', ico: 'attachment-line' },
      }),
      Button({
        name: 'BtnSend',
        props: {
          name: 'sendMessage',
          title: 'Send',
          titleBp: 'xl',
          ico: 'send-plane-line',
        },
        events: { click: senMsg },
      }),
    ]
  }
}
