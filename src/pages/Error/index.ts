import { ComponentProperties } from '../../modules/engine/shared/Types'
import Component from './error'

export default (data: ComponentProperties = {}): Component => {
  const { name = 'Error', props, events } = data
  return new Component(name, props, events)
}
