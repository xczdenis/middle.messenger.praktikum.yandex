import app from './app'
import './assets/less/main.less'
import 'remixicon/fonts/remixicon.css'
import DOMInit from './modules/engine/router/DOMInit'

document.addEventListener('DOMContentLoaded', () => {
  const APP_DIV = document.querySelector('#app')
  APP_DIV.innerHTML = app.template

  DOMInit(APP_DIV, app)
})
