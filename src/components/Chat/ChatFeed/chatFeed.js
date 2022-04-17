import t from '../../../modules/templator'
import template from './chatFeed.tmpl'
import Input from '../../Input'
import Button from '../../Button'
import ChatFeedMessage from '../ChatFeedMessage'
import getValue from '../../../utils/getValue'

export default (props) => {
  const compiledTemplate = t.compile(template)
  const fakeMessage1 = {
    isMine: false,
    text: 'Hi! What are you doing?',
    time: '11:56',
  }
  const fakeMessage2 = {
    isMine: true,
    text: 'am gonna to drive my Porsche.',
    time: '11:57',
    msgSent: true,
    msgDelivered: true,
    msgRead: true,
  }
  const fakeMessage3 = {
    isMine: true,
    text: 'you?',
    time: '11:58',
    msgSent: true,
    msgDelivered: true,
    msgRead: false,
  }
  const fakeMessage4 = Object.assign({}, fakeMessage3)
  fakeMessage4.msgDelivered = false
  let messages = [
    { template: ChatFeedMessage(fakeMessage1).template, ...fakeMessage1 },
    { template: ChatFeedMessage(fakeMessage2).template, ...fakeMessage2 },
    { template: ChatFeedMessage(fakeMessage3).template, ...fakeMessage3 },
    { template: ChatFeedMessage(fakeMessage4).template, ...fakeMessage4 },
  ]
  for (let i = 0; i < 10; i++) {
    messages.push({ template: ChatFeedMessage(fakeMessage1).template, ...fakeMessage1 },)
  }

  const context = {
    messages: getValue(props, 'fake', true) ? messages : [],
    btnAttach: Button({
      name: 'attachFile',
      ico: 'attachment-line',
    }).template,
    inputMsg: Input({
      name: 'message',
      placeholder: 'Type your message',
    }).template,
    btnSend: Button({
      name: 'sendMessage',
      title: 'Send',
      titleBp: 'xl',
      ico: 'send-plane-line',
    }).template,
  }
  return compiledTemplate(Object.assign(context, props))
}
