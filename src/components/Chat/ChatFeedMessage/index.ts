import { TComponentProperties } from '../../../modules/engine/shared/Types'
import Component from './chatFeedMessage'

export default (data: TComponentProperties = {}): Component => {
  const { name = 'ChatFeedMessage', props, events } = data
  return new Component(name, props, events)
}
