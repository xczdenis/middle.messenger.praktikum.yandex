import { Route } from './route'
import BaseComponent from '../shared/BaseComponent'

class Router {
  private static __instance: Router

  private _history: History

  component404: BaseComponent

  routes: Route[]

  constructor() {
    if (Router.__instance) {
      return Router.__instance
    }

    this._history = window.history
    this.routes = []
    Router.__instance = this
  }

  public start(): void {
    window.onpopstate = () => {
      this._onRoute(document.location.pathname)
    }
    this._onRoute(window.location.pathname)
  }

  public use(pathname: string, component: BaseComponent): Router {
    this.routes.push(new Route(pathname, component))
    return this
  }

  public go(pathname: string): void {
    this._history.pushState({}, '', pathname)
    this._onRoute(pathname)
  }

  private _onRoute(pathname: string): void {
    const route = this._getRout(pathname)
    if (route) {
      route.navigate()
    } else {
      if (this.component404) {
        new Route(pathname, this.component404).navigate()
      }
    }
  }

  private _getRout(pathname: string): Route | undefined {
    return this.routes.find((item) => item.match(pathname))
  }
}

const instance = new Router()

export { instance as router }
