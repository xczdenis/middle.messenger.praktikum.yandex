import template from './template'
import t from '../../modules/templator'
import BaseComponent from '../../modules/engine/shared/BaseComponent'
import getValue from '../../utils/getValue'

export default class extends BaseComponent {
  render(): string {
    const errorCode = getValue(this.props, 'errorCode', 0)
    let errorText = 'Some unknown error :('
    switch (errorCode) {
      case 404:
        errorText = "We've not found this page :("
        break
      case 500:
        errorText = 'We are fixing this right now'
        break
    }
    const context = {
      errorCode: errorCode,
      errorText: getValue(this.props, 'errorText', errorText),
    }
    return t.compile(template)(Object.assign(context, this.props))
  }
}
