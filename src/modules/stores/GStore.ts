import { isArray } from '../../utils/mydash/isArray'
import EventBus from '../engine/reactivity/EventBus'

class GStore extends EventBus {
  private static __instance: GStore

  private readonly _state: Record<string, any>

  constructor() {
    super()
    if (GStore.__instance) {
      return GStore.__instance
    }

    this._state = {}

    GStore.__instance = this
  }

  push(key: string, value: any): void {
    if (!this._state[key]) {
      this._state[key] = []
    }
    if (isArray(this._state[key])) {
      this._state[key].push(value)
      this.emit(key, value)
    }
  }

  get<T>(key: string): T {
    return this._state[key]
  }

  set(key: string, value: any): void {
    this._state[key] = value
    this.emit(key, value)
  }
}

const instance = new GStore()

export { instance as GStore }
