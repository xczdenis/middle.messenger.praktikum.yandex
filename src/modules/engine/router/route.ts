import BaseComponent from '../shared/BaseComponent'

import { ROUTER_VIEW_QUERY } from './settings'

class Route {
  private readonly _pathname: string

  private readonly _component: BaseComponent

  constructor(pathname: string, component: BaseComponent) {
    this._pathname = pathname
    this._component = component
  }

  public navigate(): void {
    const routerView = document.querySelector(ROUTER_VIEW_QUERY)
    if (routerView) {
      routerView.innerHTML = ''
      this._component.mount(ROUTER_VIEW_QUERY)
    }
  }

  public match(pathname: string): boolean {
    return pathname === this._pathname || pathname === '/' + this._pathname
  }
}

export { Route }
