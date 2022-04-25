import { ReadonlyUnknownArray as Arr } from '../shared/Types'

class EventBus {
  private readonly _listeners: Record<string, Array<(...args: Arr) => void>>

  constructor() {
    this._listeners = {}
  }

  on(event: string, callback: (...args: Arr) => void): void {
    if (!this._listeners[event]) {
      this._listeners[event] = []
    }
    this._listeners[event].push(callback)
  }

  off(event: string, callback: (...args: Arr) => void): void {
    if (!this._listeners[event]) {
      throw new Error(`Event ${event} not detected`)
    }
    this._listeners[event] = this._listeners[event].filter(
      (listener) => listener !== callback
    )
  }

  emit(event: string, ...args: readonly unknown[]): void {
    if (!this._listeners[event]) {
      throw new Error(`Event ${event} not detected`)
    }
    this._listeners[event].forEach((listener) => listener(...args))
  }
}

export default EventBus
