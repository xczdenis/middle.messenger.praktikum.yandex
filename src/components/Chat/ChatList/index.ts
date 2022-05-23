import { ComponentChatList, TProps } from './component'
import { TComponentData } from '../../../modules/engine/shared/types'

const ChatList = (data: TComponentData<TProps> = {}): ComponentChatList => {
  return new ComponentChatList(data)
}

export { ChatList }
