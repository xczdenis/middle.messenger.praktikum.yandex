import { ComponentSignUp, TProps } from './component'
import { TComponentData } from '../../../modules/engine/shared/types'

const SignUp = (data: TComponentData<TProps> = {}): ComponentSignUp => {
  return new ComponentSignUp(data)
}

export { SignUp }
