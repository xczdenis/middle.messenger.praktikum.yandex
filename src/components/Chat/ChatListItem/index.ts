import { ComponentProperties } from '../../../modules/engine/shared/Types'
import Component from './chatListItem'

export default (data: ComponentProperties = {}): Component => {
  const { name = 'ChatListItem', props, events } = data
  return new Component(name, props, events)
}
