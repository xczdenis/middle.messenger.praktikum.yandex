import { ComponentChatListItem, TProps } from './component'
import { TComponentData } from '../../../modules/engine/shared/types'

const ChatListItem = (
  data: TComponentData<TProps> = {}
): ComponentChatListItem => {
  return new ComponentChatListItem(data)
}

export { ChatListItem }
