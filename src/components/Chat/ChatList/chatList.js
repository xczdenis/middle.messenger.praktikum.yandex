import t from '../../../modules/templator'
import template from './chatList.tmpl'
import ChatListItem from '../ChatListItem'
import Breadcrumb from '../../Breadcrumb'
import Input from '../../Input'

export default (props) => {
  const compiledTemplate = t.compile(template)
  let dialogues = []
  for (let i = 0; i < 15; i++) {
    dialogues.push(
      ChatListItem({
        active: i === 0,
        name: `Alice-${i}`,
        itsMe: i % 2 === 0,
        msg: `Hi there ${i}!`,
        time: `11:01`,
        newMessagesNumber: i % 2 !== 0 ? 0 : 1,
      })
    )
  }

  const context = {
    chatListItem: ChatListItem().template,
    breadcrumbs: Breadcrumb({
      objectList: [{ href: '#', text: 'My Profile' }],
    }).template,
    search: Input({
      name: 'search',
      placeholder: 'Search',
    }).template,
    dialogues: dialogues.map((item) => item.template),
  }
  return compiledTemplate(Object.assign(context, props))
}
