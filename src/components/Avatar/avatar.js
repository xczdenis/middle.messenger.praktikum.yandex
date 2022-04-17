import t from '../../modules/templator'
import template from './avatar.tmpl'
import getValue from '../../utils/getValue'

export default (props) => {

  const compiledTemplate = t.compile(template)
  const context = {
    type: getValue(props, 'type', 'text'),
    name: getValue(props, 'name', ''),
    class: getValue(props, 'class', 'form-control'),
    placeholder: getValue(props, 'placeholder', ''),
  }

  return compiledTemplate(Object.assign(context, props))

}