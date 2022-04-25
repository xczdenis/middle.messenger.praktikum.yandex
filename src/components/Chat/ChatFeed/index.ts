import { ComponentProperties } from '../../../modules/engine/shared/Types'
import Component from './chatFeed'

export default (data: ComponentProperties = {}): Component => {
  const { name = 'ChatFeed', props, events } = data
  return new Component(name, props, events)
}
