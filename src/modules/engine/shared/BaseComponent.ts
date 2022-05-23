import { v4 as uuidv4 } from 'uuid'
import Validator from '../../validator'
import { ClassInvalid } from '../../validator/config'
import EventBus from '../reactivity/EventBus'
import { TBaseProps, TEvents } from './types'
import { attributeChildren, dataAttrs } from './constants'

abstract class BaseComponent {
  static EVENTS = {
    INIT: 'init',
    INIT_VALIDATOR: 'init:validator',
    INIT_SET_COMPONENTS: 'init:set-components',
    FLOW_BEFORE_CREATE: 'flow:before-create',
    FLOW_CREATED: 'flow:created',
    FLOW_RENDER: 'flow:render',
  }

  private readonly _meta: {
    tagName: string
    validator: string
  }

  private _element: HTMLElement | null = null

  private _validatorFunction: (() => void) | null = null

  private _eventBus: () => EventBus

  private _data: Record<string, unknown>

  id: string

  name: string

  props: TBaseProps

  events: TEvents

  constructor(
    name: string,
    props: TBaseProps = {},
    events: TEvents = {},
    validator = '',
    tagName = 'div'
  ) {
    this.name = name
    this.props = props
    this.events = events
    this.id = uuidv4()
    this._meta = { tagName, validator }
    const eventBus = new EventBus()
    this._eventBus = () => eventBus
    this._registerEvents(eventBus)
    return this.makeProxyComponent()
  }

  private _registerEvents(eventBus: EventBus): void {
    eventBus.on(
      BaseComponent.EVENTS.INIT_VALIDATOR,
      this._initValidator.bind(this)
    )
    eventBus.on(
      BaseComponent.EVENTS.FLOW_BEFORE_CREATE,
      this.beforeCreate.bind(this)
    )
    eventBus.on(BaseComponent.EVENTS.FLOW_CREATED, this.created.bind(this))
    eventBus.on(BaseComponent.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  private _makeProxyObject(): BaseComponent {
    this._data = this.data()
    for (const [key, value] of Object.entries(this._data)) {
      Object.defineProperty(this, key, {
        value: value,
        writable: true,
      })
    }
    this.setup()

    const selfObject = Object.assign({}, { self: this })

    const handler = () => {
      return {
        get(target: any, key: string): any {
          if (
            ['[object Object]', '[object Array]'].indexOf(
              Object.prototype.toString.call(target[key])
            ) > -1
          ) {
            return new Proxy(target[key], handler())
          }
          return Reflect.get(target, key)
        },
        set(target: any, key: string, value: any) {
          Reflect.set(target, key, value)
          if (target.hasOwnProperty(key)) {
            selfObject.self.update()
          }
          return true
        },
      }
    }

    return new Proxy(this, handler())
  }

  private _makeProxyProps(props: TBaseProps): TBaseProps {
    const selfObject = Object.assign({}, { self: this })
    const handler = () => {
      return {
        get(target: any, key: string): any {
          if (
            ['[object Object]', '[object Array]'].indexOf(
              Object.prototype.toString.call(target[key])
            ) > -1
          ) {
            return new Proxy(target[key], handler())
          }
          return Reflect.get(target, key)
        },
        set(target: any, key: string, value: any) {
          Reflect.set(target, key, value)
          selfObject.self._render()
          selfObject.self._mountChildren()
          return true
        },
      }
    }

    return new Proxy(props, handler())
  }

  private _createElement(): HTMLElement {
    const { tagName, validator } = this._meta
    const element = document.createElement(tagName)
    element.setAttribute('data-uuid', this.id)
    if (validator) {
      element.classList.add('needs-validation')
    }
    if (this.props.h100) {
      element.classList.add('h-10')
    }
    return element
  }

  private _addEvents(): void {
    const listener = this._getFirstChild()
    if (listener) {
      Object.keys(this.events).forEach((eventName) => {
        listener.addEventListener(eventName, this.events[eventName])
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
      Object.keys(this.events).forEach((eventName) => {
        listener.removeEventListener(eventName, this.events[eventName])
      })
      if (this._validatorFunction) {
        listener.removeEventListener('blur', this._validatorFunction)
        listener.removeEventListener('focus', this._removeInvalidClass)
      }
    }
  }

  private _getContext<TValue>(): Record<string, TValue> {
    const context: Record<string, TValue> = {}
    Object.keys(this._data).forEach((key) => {
      context[key] = Object.getOwnPropertyDescriptor(this, key)?.value
    })
    return context
  }

  private _getData<TValue>(key: string): TValue {
    const context = this._getContext<TValue>()
    return context[key]
  }

  private _updateData(dataName: string): void {
    const dataNameArray = dataName.split('.')
    const dataKey = dataNameArray[0]
    if (dataKey === attributeChildren) {
      this._mountChildren(dataNameArray[1])
    } else {
      const targetElement = this._element?.querySelector(
        `[${dataAttrs.content}="${dataKey}"]`
      )
      if (targetElement) {
        targetElement.textContent = String(this._getData(dataKey))
      }
    }
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

  private _getChildrenContainer(
    collectionName: string,
    parentNode: Element | null = null
  ): Element | undefined | null {
    const parent = parentNode ? parentNode : this._element
    return parent?.querySelector(`[${dataAttrs.child}="${collectionName}"]`)
  }

  private _mountChildren(collectionName = ''): void {
    const childrenObject =
      this._getData<Record<string, BaseComponent[]>>(attributeChildren)
    if (childrenObject) {
      Object.keys(childrenObject).forEach((collection) => {
        if (!collectionName || collection === collectionName) {
          const childrenContainer = this._getChildrenContainer(collection)
          if (childrenContainer) {
            childrenObject[collection].forEach((child) => {
              if (!child.isMounted(childrenContainer)) {
                child.mount(
                  `[${dataAttrs.child}="${collection}"]`,
                  this._element
                )
              }
            })
          }
        }
      })
    }
    for (const [key, descriptor] of Object.entries(
      Object.getOwnPropertyDescriptors(this)
    )) {
      if (this.isComponent(descriptor.value)) {
        descriptor.value.mount(`[${dataAttrs.child}="${key}"]`, this._element)
      }
    }
  }

  private _render(): void {
    if (this._element) {
      this._removeEvents()
      this._element.innerHTML = this.render()
      this._addEvents()
    }
  }

  protected _getFirstChild(): Element | null {
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

  private _removeInvalidClass = (): void => {
    const listener = this._getFirstChild()
    if (listener) {
      listener.classList.remove(ClassInvalid)
    }
  }

  protected isMounted(parentNode: Element | null = null): boolean {
    const parent = parentNode ? parentNode : document
    return !!parent.querySelector(`[${dataAttrs.uid}="${this.id}"]`)
  }

  protected isComponent(value: unknown): value is BaseComponent {
    return value instanceof BaseComponent
  }

  makeProxyComponent(): BaseComponent {
    this._eventBus().emit(BaseComponent.EVENTS.FLOW_BEFORE_CREATE)
    const proxyObject = this._makeProxyObject()
    this._element = this._createElement()
    this.props = this._makeProxyProps(this.props)
    this._eventBus().emit(BaseComponent.EVENTS.FLOW_RENDER)
    this._eventBus().emit(BaseComponent.EVENTS.INIT_VALIDATOR)
    this._eventBus().emit(BaseComponent.EVENTS.FLOW_CREATED)
    return proxyObject
  }

  getContextData(): Record<string, unknown> {
    return Object.assign({}, { id: this.id }, this.props, this._data)
  }

  addEvent(eventName: string, cb: () => void): void {
    const listener = this._getFirstChild()
    if (listener) {
      listener.addEventListener(eventName, cb)
    }
  }

  getElement(): HTMLElement | null {
    return this._element
  }

  mount(query: string, container: HTMLElement | null = null): void {
    this.beforeMount()
    const rootContainer = container ? container : document
    const root = rootContainer.querySelector(query)
    if (root) {
      const element = this.getElement()
      if (element) {
        root.appendChild(element)
        this._mountChildren()
      }
    }
    this.mounted()
  }

  data(): Record<string, unknown> {
    return {}
  }

  setup(): void {}

  render(): string {
    return ''
  }

  update(Attrs: string[] = []): void {
    this.beforeUpdate()
    const keysArray = Attrs.length > 0 ? Attrs : Object.keys(this._data)
    keysArray.forEach((dataName) => this._updateData(dataName))
    this.updated()
  }

  beforeCreate(): void {}

  created(): void {}

  beforeMount(): void {}

  mounted(): void {}

  beforeUpdate(): void {}

  updated(): void {}
}

export default BaseComponent
