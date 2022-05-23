import { ComponentInput, TProps } from './component'
import { TComponentData } from '../../modules/engine/shared/types'

const Input = (data: TComponentData<TProps> = {}): ComponentInput => {
  return new ComponentInput(data)
}

export { Input }
