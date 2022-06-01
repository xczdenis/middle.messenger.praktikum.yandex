import { ComponentMessageStatus, TProps } from './component'
import { TComponentData } from '../../../modules/engine/shared/types'

const MessageStatus = (data: TComponentData<TProps> = {}): ComponentMessageStatus => {
  return new ComponentMessageStatus(data)
}

export { MessageStatus }
