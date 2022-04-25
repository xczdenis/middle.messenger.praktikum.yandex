import { ComponentProperties } from '../../../modules/engine/shared/Types'
import Component from './chat'

export default (data: ComponentProperties = {}): Component => {
  const { name = 'Chat', props, events } = data
  return new Component(name, props, events)
}
