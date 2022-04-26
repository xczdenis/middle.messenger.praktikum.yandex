import { TComponentProperties } from '../../../modules/engine/shared/Types'
import Component from './chatFeed'

const Instance = (data: TComponentProperties = {}): Component => {
  const { name = 'ChatFeed', props, events } = data
  return new Component(name, props, events)
}

export default Instance
