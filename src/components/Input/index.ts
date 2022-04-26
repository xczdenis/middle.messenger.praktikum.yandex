import { TComponentProperties } from '../../modules/engine/shared/Types'
import Component from './input'

export default (data: TComponentProperties = {}): Component => {
  const { name = 'Input', props, events, validator } = data
  return new Component(name, props, events, validator)
}
