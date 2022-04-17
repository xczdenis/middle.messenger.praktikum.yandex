import Handlebars from 'handlebars'
import Home from './pages/PublicPages/Home'
import Login from './pages/PublicPages/Login'
import SignUp from './pages/PublicPages/SignUp'
import Profile from './pages/AuthPages/Profile'
import Error from './pages/Error'
import Chat from './pages/AuthPages/Chat'
import getRouterLinkAttrs from './modules/engine/router/getRouterLinkAttrs'
import ChangePassword from './pages/AuthPages/ChangePassword'

const template = `
<div class='page'>
  <div class='sticky-top d-flex justify-content-center pt-2 pb-2 bg-white shadow'
       style='height: 50px'
  >
    <ul class='nav'>
      <li class='nav-link cursor-pointer me-3' {{{routerLink 'home'}}}>Home</li>
      <li class='nav-link cursor-pointer me-3' {{{routerLink 'login'}}}>Login</li>
      <li class='nav-link cursor-pointer me-3' {{{routerLink 'signUp'}}}>Signup</li>
      <li class='nav-link cursor-pointer me-3' {{{routerLink 'error404'}}}>Error404</li>
      <li class='nav-link cursor-pointer me-3' {{{routerLink 'error500'}}}>Error500</li>
      <li class='nav-link cursor-pointer me-3' {{{routerLink 'chat'}}}>Chat</li>
      <li class='nav-link cursor-pointer me-3' {{{routerLink 'Profile'}}}>Profile</li>
      <li class='nav-link cursor-pointer me-3' {{{routerLink 'ChangePassword'}}}>Change password</li>
    </ul>
  </div>
  
  <div id='routerView' style='height: calc(100vh - 50px)'/>
</div>
`

Handlebars.registerHelper('routerLink', function (to) {
  return getRouterLinkAttrs(to)
})

const hbs = Handlebars.compile(template)
const context = {}

export default {
  template: hbs(context),
  components: [
    Home(),
    Login(),
    SignUp(),
    Error({ errorCode: 500 }, 'error500'),
    Error({ errorCode: 404 }, 'error404'),
    Chat(),
    Profile(),
    ChangePassword()
  ],
}
