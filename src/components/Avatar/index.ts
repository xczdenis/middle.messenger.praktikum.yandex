import { ComponentAvatar, TProps } from './component'
import { TComponentData } from '../../modules/engine/shared/types'

const Avatar = (data: TComponentData<TProps> = {}): ComponentAvatar => {
  return new ComponentAvatar(data)
}

export { Avatar }
