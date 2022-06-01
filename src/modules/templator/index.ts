import * as Handlebars from 'handlebars'
import BaseComponent from '../engine/shared/BaseComponent'
import { dataAttrs } from '../engine/shared/constants'
import { isString } from '../../utils/typeGuards'

Handlebars.registerHelper(':content', function (name) {
  return `${dataAttrs.content}='${name}'`
})

Handlebars.registerHelper(':child', function (component: BaseComponent, prefix = '') {
  if (isString(prefix) && prefix) {
    return `${dataAttrs.child}='${prefix}-${component.id}'`
  } else {
    return `${dataAttrs.child}='${component.id}'`
  }
})

export default Handlebars
