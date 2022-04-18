
import t from '../../../modules/templator'
import template from './home.tmpl'

export default (props) => {

  const compiledTemplate = t.compile(template)
  const context = {}

  return compiledTemplate(Object.assign(context, props))

}