import { TComponentProperties } from '../../../modules/engine/shared/Types'
import Component from './login'

export default (data: TComponentProperties = {}): Component => {
  const { name = 'Login', props, events } = data
  return new Component(name, props, events)
}
