import t from '../../modules/templator'
import template from './error.tmpl'
import getValue from '../../utils/getValue'

export default (props) => {
  const compiledTemplate = t.compile(template)
  const errorCode = getValue(props, 'errorCode', '000')
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
    errorCode: getValue(props, 'errorCode', '000'),
    errorText: getValue(props, 'errorText', errorText),
  }

  return compiledTemplate(Object.assign(context, props))
}
