import * as Handlebars from 'handlebars'
import getRouterLinkAttrs from '../engine/router/getRouterLinkAttrs'
// import getChildComponentLinkAttrs from '../engine/router/getChildComponentLinkAttrs'
import { dataAttrs } from '../engine/shared/constants'

Handlebars.registerHelper('routerLink', function (to) {
  return getRouterLinkAttrs(to)
})

// Handlebars.registerHelper(':child', function (name) {
//   return getChildComponentLinkAttrs(name)
// })

Handlebars.registerHelper(':content', function (name) {
  return `${dataAttrs.content}='${name}'`
})

Handlebars.registerHelper(':child', function (name) {
  return `${dataAttrs.child}='${name}'`
})

export default Handlebars
