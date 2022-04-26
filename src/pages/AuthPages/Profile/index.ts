import { TComponentProperties } from '../../../modules/engine/shared/Types'
import Component from './profile'

export default (data: TComponentProperties = {}): Component => {
  const { name = 'Profile', props, events } = data
  return new Component(name, props, events)
}
