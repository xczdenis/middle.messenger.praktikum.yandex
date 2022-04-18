import t from '../../modules/templator'
import template from './button.tmpl'
import getValue from '../../utils/getValue'

export default (props) => {
  const compiledTemplate = t.compile(template)
  const context = {
    type: getValue(props, 'type', 'button'),
    class: getValue(props, 'class', 'btn btn-primary'),
  }

  return compiledTemplate(Object.assign(context, props))
}