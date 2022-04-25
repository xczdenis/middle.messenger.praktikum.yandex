import template from './template'
import t from '../../../modules/templator'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import ChatListItem from '../ChatListItem'
import Breadcrumb from '../../Breadcrumb'
import Input from '../../Input'

export default class extends BaseComponent {
  render(): string {
    const context = {}
    return t.compile(template)(Object.assign(context, this.props))
  }

  children() {
    return [
      ChatListItem({
        name: 'ChatListItem1',
        props: {
          active: true,
          name: `Alice`,
          itsMe: false,
          msg: `Hi there!`,
          time: `11:01`,
          newMessagesNumber: 0,
        },
      }),
      ChatListItem({
        name: 'ChatListItem2',
        props: {
          active: false,
          name: `Bob`,
          itsMe: true,
          msg: `Hi :)`,
          time: `11:02`,
          newMessagesNumber: 0,
        },
      }),
      ChatListItem({
        name: 'ChatListItem3',
        props: {
          active: false,
          name: `Marta`,
          itsMe: false,
          msg: `What's up?`,
          time: `11:02`,
          newMessagesNumber: 1,
        },
      }),
      ChatListItem({
        name: 'ChatListItem4',
        props: {
          active: false,
          name: `Pol`,
          itsMe: false,
          msg: `ok`,
          time: `11:03`,
          newMessagesNumber: 0,
        },
      }),
      Breadcrumb({
        name: 'Breadcrumb',
        props: { items: [{ href: '#', text: 'My Profile' }] },
      }),
      Input({
        name: 'Search',
        props: { name: 'search', placeholder: 'Search' },
      }),
    ]
  }
}
