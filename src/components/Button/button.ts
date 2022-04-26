import template from './template'
import t from '../../modules/templator'
import BaseComponent from '../../modules/engine/shared/BaseComponent'
import getValue from '../../utils/getValue'

export default class extends BaseComponent {
  render(): string {
    let titleClass = ''
    if (this.props.title && this.props.ico) {
      titleClass = 'ms-2'
    }
    if (this.props.titleBp) {
      titleClass += ` d-none d-${this.props.titleBp}-block`
    }
    const context = {
      type: getValue(this.props, 'type', 'button'),
      buttonClass: getValue(this.props, 'class', 'btn btn-primary'),
      titleClass,
    }
    return t.compile(template)(Object.assign(context, this.props))
  }
}
