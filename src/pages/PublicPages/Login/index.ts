import { ComponentLogin, TProps } from './component'
import { TComponentData } from '../../../modules/engine/shared/types'

const Login = (data: TComponentData<TProps> = {}): ComponentLogin => {
  return new ComponentLogin(data)
}

export { Login }
