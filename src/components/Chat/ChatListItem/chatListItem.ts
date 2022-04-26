import template from './template'
import t from '../../../modules/templator'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import getValue from '../../../utils/getValue'
// import img from '../../../assets/images/ico/circle.svg'

export default class extends BaseComponent {
  render(): string {
    const context = {
      name: getValue(this.props, 'name', '<user>'),
      itsMe: getValue(this.props, 'itsMe', true),
      msg: getValue(this.props, 'msg', '<msg>'),
      time: getValue(this.props, 'msg', '<time>'),
      // img: img,
      newMessagesNumber: getValue(this.props, 'newMessagesNumber', 1),
    }
    return t.compile(template)(Object.assign(context, this.props))
  }
}
