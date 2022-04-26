import { TComponentProperties } from '../../modules/engine/shared/Types'
import Component from './button'

export default (data: TComponentProperties = {}): Component => {
  const { name = 'Input', props, events } = data
  return new Component(name, props, events)
}
