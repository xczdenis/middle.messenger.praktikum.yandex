import { ComponentChangePassword, TProps } from './component'
import { TComponentData } from '../../../modules/engine/shared/types'

const ChangePassword = (
  data: TComponentData<TProps> = {}
): ComponentChangePassword => {
  return new ComponentChangePassword(data)
}

export { ChangePassword }
