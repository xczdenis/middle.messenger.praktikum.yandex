import { ReadonlyUnknownArray as Arr } from '../shared/Types'
import { v4 as uuidv4 } from 'uuid'
import Validator from '../../validator'
import { ClassInvalid } from '../../validator/config'

abstract class BaseComponent {
  private readonly _meta: {
    tagName: string
    events: Record<string, (...args: Arr) => void>
    validator: string
    id: string
  }

  private _element: HTMLElement | null = null

  private _validatorFunction: (() => void) | null = null

  private _removeInvalidClass = (): void => {
    const listener = this._getFirstChild()
    if (listener) {
      listener.classList.remove(ClassInvalid)
    }
  }

  name: string

  props: Record<string, unknown>

  components: BaseComponent[]

  constructor(
    name: string,
    props: Record<string, unknown> = {},
    events: Record<string, (...args: Arr) => void> = {},
    validator = '',
    tagName = 'div'
  ) {
    this.name = name
    this.props = this._makePropsProxy(props)
    const id = uuidv4()
    this._meta = { tagName, events, id, validator }
    this._createResource()
  }

  private _createResource(): void {
    this.beforeCreated()
    this._element = this._createElement()
    this._setComponents()
    this._render()
    this._initValidator()
    this.created()
  }

  private _initValidator(): void {
    const { validator } = this._meta
    if (validator) {
      const listener = this._getFirstChild()
      if (listener) {
        const validatorInstance = new Validator(validator, listener)
        const validatorFunction = validatorInstance.getValidator()
        if (validatorFunction) {
          this._validatorFunction = validatorFunction
          this._addValidator()
        }
      }
    }
  }

  private _createElement(): HTMLElement {
    const { tagName, validator } = this._meta
    const element = document.createElement(tagName)
    if (validator) {
      element.classList.add('needs-validation')
    }
    if (this.props.h100) {
      element.classList.add('h-10')
    }
    element.setAttribute('data-uuid', this.id())
    return element
  }

  private _render(): void {
    if (this._element) {
      this._removeEvents()
      this._element.innerHTML = this.render()
      this._addEvents()
    }
  }

  private _getFirstChild(): Element | null {
    if (
      this._element &&
      this._element.children &&
      this._element.children.length > 0
    ) {
      return this._element.children[0]
    } else {
      return this._element
    }
  }

  private _updateResource(): void {
    this.beforeUpdate()
    this._render()
    this.updated()
  }

  private _addEvents(): void {
    const listener = this._getFirstChild()
    if (listener) {
      const { events = {} } = this._meta
      Object.keys(events).forEach((eventName) => {
        listener.addEventListener(eventName, events[eventName])
      })
    }
  }

  private _addValidator(): void {
    if (this._validatorFunction) {
      const listener = this._getFirstChild()
      if (listener) {
        listener.addEventListener('blur', this._validatorFunction)
        listener.addEventListener('focus', this._removeInvalidClass)
      }
    }
  }

  private _removeEvents(): void {
    const listener = this._getFirstChild()
    if (listener) {
      const { events = {} } = this._meta
      Object.keys(events).forEach((eventName) => {
        listener.removeEventListener(eventName, events[eventName])
      })
      if (this._validatorFunction) {
        listener.removeEventListener('blur', this._validatorFunction)
        listener.removeEventListener('focus', this._removeInvalidClass)
      }
    }
  }

  private _makePropsProxy(props: Record<string, unknown>) {
    return new Proxy(Object.assign({ self: this }, props), {
      get(target, key: string) {
        if (props.hasOwnProperty(key)) {
          const value = target[key]
          return typeof value === 'function' ? value.bind(target) : value
        }
      },
      set(target, key: string, value: unknown) {
        if (props.hasOwnProperty(key)) {
          target[key] = value
          target.self._updateResource()
        }
        return true
      },
    })
  }

  private _setComponents(): void {
    this.components = this.children()
  }

  children(): BaseComponent[] {
    return []
  }

  addListener(eventName: string, cb: (...args: Arr) => void): void {
    this._meta.events[eventName] = cb
    this._element?.addEventListener(eventName, cb)
  }

  setProps(nextProps: Record<string, unknown>): void {
    if (!nextProps) {
      return
    }
    Object.assign(this.props, nextProps)
  }

  getContent(): HTMLElement | null {
    return this._element
  }

  id(): string {
    return this._meta.id
  }

  render(): string {
    return ''
  }

  mount(query: string, container: HTMLElement | null = null): void {
    this.beforeMount()
    const rootContainer = container ? container : document
    const root = rootContainer.querySelector(query)
    if (root) {
      const element = this.getContent()
      if (element) {
        root.appendChild(element)
        this.components.forEach((component) => {
          component.mount(
            `[data-child-component="${component.name}"]`,
            this._element
          )
        })
      }
    }
    this.mounted()
  }

  beforeCreated(): void {}

  created(): void {}

  beforeMount(): void {}

  mounted(): void {}

  beforeUpdate(): void {}

  updated(): void {}
}

export default BaseComponent
