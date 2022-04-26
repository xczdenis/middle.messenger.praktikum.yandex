import { TComponentProperties } from '../../../modules/engine/shared/Types'
import Component from './home'

export default (data: TComponentProperties = {}): Component => {
  const { name = 'Home', props, events } = data
  return new Component(name, props, events)
}
