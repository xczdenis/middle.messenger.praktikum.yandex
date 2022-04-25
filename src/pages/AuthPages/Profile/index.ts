import { ComponentProperties } from '../../../modules/engine/shared/Types'
import Component from './profile'

export default (data: ComponentProperties = {}): Component => {
  const { name = 'Profile', props, events } = data
  return new Component(name, props, events)
}
