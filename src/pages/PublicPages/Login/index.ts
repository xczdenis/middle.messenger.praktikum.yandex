import { ComponentProperties } from '../../../modules/engine/shared/Types'
import Component from './login'

export default (data: ComponentProperties = {}): Component => {
  const { name = 'Login', props, events } = data
  return new Component(name, props, events)
}
