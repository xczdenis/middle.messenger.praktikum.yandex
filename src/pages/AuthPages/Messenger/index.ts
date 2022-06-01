import { ComponentMessenger, TProps } from './component'
import { TComponentData } from '../../../modules/engine/shared/types'

const Messenger = (data: TComponentData<TProps> = {}): ComponentMessenger => {
  return new ComponentMessenger(data)
}

export { Messenger }
