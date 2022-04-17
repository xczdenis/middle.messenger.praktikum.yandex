import isArrayLike from '../../../utils/mydash/isArrayLike'

export default (appContainer, appInstance) => {
  const routerView = appContainer.querySelector('#routerView')
  if (routerView) {
    const routerLinks = appContainer.querySelectorAll('[datatype="router-link"]')
    for (const routerLink of routerLinks) {
      routerLink.addEventListener('click', () => {
        const to = routerLink.getAttribute('data-router-to')
        if (to) {
          const components = appInstance.components
          if (isArrayLike(components)) {
            for (const component of components) {
              if (component.name.toLowerCase() === to.toLowerCase()) {
                routerView.innerHTML = component.template
                break
              }
            }
          }
        }
      })
    }
  }
}
