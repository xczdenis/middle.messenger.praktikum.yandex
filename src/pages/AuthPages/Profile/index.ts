import { ComponentProfile, TProps } from './component'
import { TComponentData } from '../../../modules/engine/shared/types'

const Profile = (data: TComponentData<TProps> = {}): ComponentProfile => {
  return new ComponentProfile(data)
}

export { Profile }
