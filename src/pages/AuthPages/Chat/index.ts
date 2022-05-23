import { ComponentChat, TProps } from './component'
import { TComponentData } from '../../../modules/engine/shared/types'

const Chat = (data: TComponentData<TProps> = {}): ComponentChat => {
  return new ComponentChat(data)
}

export { Chat }
