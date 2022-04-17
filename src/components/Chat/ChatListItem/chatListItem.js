import t from '../../../modules/templator'
import template from './chatListItem.tmpl'
import getValue from '../../../utils/getValue'
import img from '~/src/assets/images/ico/circle.svg'

export default (props) => {
  const compiledTemplate = t.compile(template)
  const context = {
    name: getValue(props, 'name', '<user>'),
    itsMe: getValue(props, 'itsMe', true),
    msg: getValue(props, 'msg', '<msg>'),
    time: getValue(props, 'msg', '<time>'),
    img: img,
    newMessagesNumber: getValue(props, 'newMessagesNumber', 1),
  }

  return compiledTemplate(Object.assign(context, props))
}
