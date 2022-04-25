import BaseComponent from '../shared/BaseComponent'

export default (components: BaseComponent[]) => {
  const routerView = document.querySelector('#routerView')
  if (routerView) {
    const routerLinks = document.querySelectorAll('[data-type="router-link"]')
    for (const routerLink of routerLinks) {
      routerLink.addEventListener('click', () => {
        const to = routerLink.getAttribute('data-router-to')
        if (to) {
          for (const component of components) {
            if (component.name.toLowerCase() === to.toLowerCase()) {
              routerView.innerHTML = ''
              component.mount('#routerView')
              break
            }
          }
        }
      })
    }
  }
}
