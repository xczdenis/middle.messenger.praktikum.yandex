import Handlebars from 'handlebars'
import getRouterLinkAttrs from '../engine/router/getRouterLinkAttrs'

Handlebars.registerHelper('routerLink', function (to) {
  return getRouterLinkAttrs(to)
})

export default Handlebars