import * as Handlebars from 'handlebars'
import getRouterLinkAttrs from '../engine/router/getRouterLinkAttrs'
import getChildComponentLinkAttrs from '../engine/router/getChildComponentLinkAttrs'

Handlebars.registerHelper('routerLink', function (to) {
  return getRouterLinkAttrs(to)
})

Handlebars.registerHelper('child', function (name) {
  return getChildComponentLinkAttrs(name)
})

export default Handlebars
