import BaseComponent from './modules/engine/shared/BaseComponent'
import { ReadonlyUnknownArray as Arr } from './modules/engine/shared/Types'
import t from './modules/templator/index'
import DOMInit from './modules/engine/router/DOMInit'
import Home from './pages/PublicPages/Home'
import Login from './pages/PublicPages/Login'
import SignUp from './pages/PublicPages/SignUp'
import Error from './pages/Error'
import Chat from './pages/AuthPages/Chat'
import Profile from './pages/AuthPages/Profile'
import ChangePassword from './pages/AuthPages/ChangePassword'

const template = `<main class='page'>
  <div class='sticky-top d-flex justify-content-center pt-2 pb-2 bg-white shadow'
       style='height: 50px'
  >
    <nav>
      <ul class='nav'>
        <li class='nav-link cursor-pointer me-3' {{{routerLink 'home'}}}>Home</li>
        <li class='nav-link cursor-pointer me-3' {{{routerLink 'login'}}}>Login</li>
        <li class='nav-link cursor-pointer me-3' {{{routerLink 'signUp'}}}>Signup</li>
        <li class='nav-link cursor-pointer me-3' {{{routerLink 'error404'}}}>Error404</li>
        <li class='nav-link cursor-pointer me-3' {{{routerLink 'error500'}}}>Error404</li>
        <li class='nav-link cursor-pointer me-3' {{{routerLink 'chat'}}}>Chat</li>
        <li class='nav-link cursor-pointer me-3' {{{routerLink 'Profile'}}}>Profile</li>
        <li class='nav-link cursor-pointer me-3' {{{routerLink 'ChangePassword'}}}>Change password</li>
      </ul>
    </nav>
  </div>
  <div id='routerView' style='height: calc(100vh - 50px)'/>
</main>
`

class App extends BaseComponent {
  render(): string {
    return t.compile(template)({})
  }

  mounted() {
    DOMInit([
      Home(),
      Login(),
      SignUp(),
      Error({ name: 'error404', props: { errorCode: 404 } }),
      Error({ name: 'error500', props: { errorCode: 500 } }),
      Chat({ props: { h100: true } }),
      Profile(),
      ChangePassword(),
    ])
  }
}

export default (
  props: Record<string, unknown> = {},
  events: Record<string, (...args: Arr) => void> = {}
): App => {
  return new App('App', props, events)
}
