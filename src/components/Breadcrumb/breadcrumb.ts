import template from './template'
import t from '../../modules/templator'
import BaseComponent from '../../modules/engine/shared/BaseComponent'
import getValue from '../../utils/getValue'

export default class extends BaseComponent {
  render(): string {
    const context = {
      objectList: getValue(this.props, 'items', []),
    }
    return t.compile(template)(Object.assign(context, this.props))
  }
}
