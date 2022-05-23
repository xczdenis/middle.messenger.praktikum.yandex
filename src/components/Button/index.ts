import { ComponentButton, TProps } from './component'
import { TComponentData } from '../../modules/engine/shared/types'

const Button = (data: TComponentData<TProps> = {}): ComponentButton => {
  return new ComponentButton(data)
}

export { Button }
