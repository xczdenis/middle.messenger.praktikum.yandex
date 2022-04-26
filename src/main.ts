import { app } from './app'
import './assets/less/main.less'
import 'remixicon/fonts/remixicon.css'
import { Component as List } from './components/List/list'

document.addEventListener('DOMContentLoaded', () => {
  app().mount('#app')
  const cmp = new List()
  // console.log(cmp)
  // console.log(cmp.render())
  cmp.render()
  // cmp.header = 'dsf'
  // setTimeout(() => {
  //   cmp.header = 'Пока'
  // }, 1000)
})
