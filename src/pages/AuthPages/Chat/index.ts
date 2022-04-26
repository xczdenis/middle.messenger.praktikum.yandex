import { TComponentProperties } from '../../../modules/engine/shared/Types'
import Component from './chat'

export default (data: TComponentProperties = {}): Component => {
  const { name = 'Chat', props, events } = data
  return new Component(name, props, events)
}
