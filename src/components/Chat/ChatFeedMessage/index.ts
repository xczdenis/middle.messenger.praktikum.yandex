import { ComponentProperties } from '../../../modules/engine/shared/Types'
import Component from './chatFeedMessage'

export default (data: ComponentProperties = {}): Component => {
  const { name = 'ChatFeedMessage', props, events } = data
  return new Component(name, props, events)
}
