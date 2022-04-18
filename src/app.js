import t from './modules/templator'
import Home from './pages/PublicPages/Home'
import Login from './pages/PublicPages/Login'
import SignUp from './pages/PublicPages/SignUp'
import Profile from './pages/AuthPages/Profile'
import Error from './pages/Error'
import Chat from './pages/AuthPages/Chat'
import ChangePassword from './pages/AuthPages/ChangePassword'
import DOMInit from './modules/engine/router/DOMInit'

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

class Component {
  constructor(name) {
    this.name = name
  }

  renderTemplate() {
    return t.compile(template)()
  }

  mount(targetElementId) {
    const targetElement = document.querySelector(`#${targetElementId}`)
    if (targetElement) {
      targetElement.innerHTML = this.renderTemplate()
    }
    this.onMount(targetElement)
  }

  onMount(targetElement) {
    if (targetElement) {
      DOMInit(targetElement, {
        components: [
          Home(),
          Login(),
          SignUp(),
          Error({ errorCode: 500 }, 'error500'),
          Error({ errorCode: 404 }, 'error404'),
          Chat(),
          Profile(),
          ChangePassword(),
        ],
      })
    }
  }
}

export default new Component('App')
