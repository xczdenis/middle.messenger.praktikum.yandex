import template from './template'
import t from '../../../modules/templator'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'
import getValue from '../../../utils/getValue'

export default class extends BaseComponent {
  render(): string {
    const context = {
      type: getValue(this.props, 'type', 'button'),
      class: getValue(this.props, 'class', 'btn btn-primary'),
    }
    return t.compile(template)(Object.assign(context, this.props))
  }
}
