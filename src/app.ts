import BaseComponent from './modules/engine/shared/BaseComponent'
import t from './modules/templator/index'
import DOMInit from './modules/engine/router/DOMInit'
import { Home } from './pages/PublicPages/Home'
import { Login } from './pages/PublicPages/Login'
import { SignUp } from './pages/PublicPages/SignUp'
import { Error } from './pages/Error'
import { Chat } from './pages/AuthPages/Chat'
import { Profile } from './pages/AuthPages/Profile'
import { ChangePassword } from './pages/AuthPages/ChangePassword'
import { TBaseProps, TComponentData } from './modules/engine/shared/types'

const THEME_LIGHT = 'theme-light'
const THEME_DARK = 'theme-dark'

const template = `<main class='page'>
  <div class='sticky-top d-flex justify-content-center pt-2 pb-2 bg-white shadow'
       style='height: 50px'
  >
    <div class='switch-button'>
      <input class='switch-button-checkbox' type='checkbox' id='theme_switcher'>
      <label class='switch-button-label' for=''><span class='switch-button-label-span'></span></label>
    </div>

    <nav>
      <ul class='nav'>
        <li class='nav-link cursor-pointer me-3' {{{routerLink 'chat'}}}>Home</li>
        <li class='nav-link cursor-pointer me-3' {{{routerLink 'login'}}}>Login</li>
        <li class='nav-link cursor-pointer me-3' {{{routerLink 'signUp'}}}>Signup</li>
        <li class='nav-link cursor-pointer me-3' {{{routerLink 'error404'}}}>Error404</li>
        <li class='nav-link cursor-pointer me-3' {{{routerLink 'error500'}}}>Error404</li>
        <li class='nav-link cursor-pointer me-3' {{{routerLink 'home'}}}>Chat</li>
        <li class='nav-link cursor-pointer me-3' {{{routerLink 'profile'}}}>Profile</li>
        <li class='nav-link cursor-pointer me-3' {{{routerLink 'changePassword'}}}>Change password</li>
      </ul>
    </nav>
  </div>
  <div id='routerView' style='height: calc(100vh - 50px)'/>
</main>
`

type TProps = TBaseProps

class Component extends BaseComponent {
  constructor(data: TComponentData<TProps> = {}) {
    const { name = 'App', props, events, validator } = data
    super(name, props, events, validator)
  }

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
    const getSwitcher = (): HTMLInputElement | null => {
      return document.querySelector('#theme_switcher')
    }
    const switcher = getSwitcher()
    if (switcher) {
      switcher.addEventListener('click', () => {
        const page = this.getElement()
        if (page) {
          if (switcher.checked) {
            page.classList.remove(THEME_LIGHT)
            page.classList.add(THEME_DARK)
          } else {
            page.classList.remove(THEME_DARK)
            page.classList.add(THEME_LIGHT)
          }
        }
      })
    }
  }
}

const createInstance = (data: TComponentData<TProps> = {}): Component => {
  return new Component(data)
}

export { createInstance as App }
