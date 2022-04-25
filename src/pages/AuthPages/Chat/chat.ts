import template from './template'
import t from '../../../modules/templator'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import ChatList from '../../../components/Chat/ChatList'
import ChatFeed from '../../../components/Chat/ChatFeed'

export default class extends BaseComponent {
  render(): string {
    const context = {}
    return t.compile(template)(Object.assign(context, this.props))
  }

  children() {
    return [
      ChatList({
        name: 'chatList',
        props: { h100: true },
      }),
      ChatFeed({
        name: 'chatFeed',
        props: { h100: true },
      }),
    ]
  }
}
