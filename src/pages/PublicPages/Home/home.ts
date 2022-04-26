import template from './template'
import t from '../../../modules/templator'
import BaseComponent from '../../../modules/engine/shared/BaseComponent'

export default class extends BaseComponent {
  render(): string {
    const context = {}
    return t.compile(template)(Object.assign(context, this.props))
  }
}
