import { ComponentProperties } from '../../modules/engine/shared/Types'
import Component from './button'

export default (data: ComponentProperties = {}): Component => {
  const { name = 'Input', props, events } = data
  return new Component(name, props, events)
}
