import { template } from './template'
import t from '../../modules/templator'

type TProps = {
  items?: string[]
}

export class Component {
  props: TProps

  header: string

  constructor(props: TProps = {}) {
    this.props = props
    return this._makeProxy(this)
  }

  data() {
    return {
      header: 'Привет',
    }
  }

  getContext() {
    const context: Record<string, unknown> = Object.assign({}, this.props)
    Object.keys(this.data()).forEach((key) => {
      context[key] = Object.getOwnPropertyDescriptor(this, key)?.value
    })
    return context
  }

  render(): string {
    const context = this.getContext()
    const tt = t.compile(template)(Object.assign({}, this.props, context))
    console.log(tt)
    return tt
  }

  private _makeProxy(self: this) {
    for (const [key, value] of Object.entries(self.data())) {
      Object.defineProperty(self, key, {
        value: value,
        writable: true,
      })
    }
    return new Proxy(self, {
      get(target: any, key) {
        const value = target[key]
        return typeof value === 'function' ? value.bind(target) : value
      },
      set(target, key: string, value: unknown) {
        target[key] = value
        // console.log(`change '${key}' to '${value}'`)
        self.render()
        return true
      },
    })
  }
}
