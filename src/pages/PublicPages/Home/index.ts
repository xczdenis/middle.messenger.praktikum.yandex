import { ComponentProperties } from '../../../modules/engine/shared/Types'
import Component from './home'

export default (data: ComponentProperties = {}): Component => {
  const { name = 'Home', props, events } = data
  return new Component(name, props, events)
}
