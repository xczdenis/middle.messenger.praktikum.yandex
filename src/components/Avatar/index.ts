import { TComponentProperties } from '../../modules/engine/shared/Types'
import Component from './avatar'

export default (data: TComponentProperties = {}): Component => {
  const { name = 'Avatar', props, events } = data
  return new Component(name, props, events)
}
