import { ComponentMessage, TProps } from './component'
import { TComponentData } from '../../../modules/engine/shared/types'

const Message = (data: TComponentData<TProps> = {}): ComponentMessage => {
  return new ComponentMessage(data)
}

export { Message }
