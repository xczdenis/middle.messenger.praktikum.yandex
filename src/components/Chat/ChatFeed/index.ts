import { ComponentChatFeed } from './component'
import { TComponentData } from '../../../modules/engine/shared/types'
import { TProps } from './component'

const ChatFeed = (data: TComponentData<TProps> = {}): ComponentChatFeed => {
  return new ComponentChatFeed(data)
}

export { ChatFeed }
