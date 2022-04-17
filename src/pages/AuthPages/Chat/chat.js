import t from '../../../modules/templator'
import template from './chat.tmpl'
import ChatList from '../../../components/Chat/ChatList'
import ChatFeed from '../../../components/Chat/ChatFeed'

export default (props) => {
  const compiledTemplate = t.compile(template)
  const context = {
    chatList: ChatList().template,
    chatFeed: ChatFeed().template,
  }

  return compiledTemplate(Object.assign(context, props))
}
