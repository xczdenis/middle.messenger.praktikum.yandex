import template from './template'
import t from '../../modules/templator'
import BaseComponent from '../../modules/engine/shared/BaseComponent'
import getValue from '../../utils/getValue'

export default class extends BaseComponent {
  render(): string {
    const context = {
      type: getValue(this.props, 'type', 'text'),
      name: getValue(this.props, 'name', ''),
      class: getValue(this.props, 'class', 'form-control'),
      placeholder: getValue(this.props, 'placeholder', ''),
    }
    return t.compile(template)(Object.assign(context, this.props))
  }
}
