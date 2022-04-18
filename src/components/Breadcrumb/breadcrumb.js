import t from '../../modules/templator'
import template from './breadcrumb.tmpl'
import getValue from '../../utils/getValue'

export default (props) => {
  const compiledTemplate = t.compile(template)

  const context = {
    objectList: getValue(props, 'items', []),
  }

  return compiledTemplate(Object.assign(context, props))
}