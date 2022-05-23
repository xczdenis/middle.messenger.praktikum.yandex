import { ComponentError, TProps } from './component'
import { TComponentData } from '../../modules/engine/shared/types'

const Error = (data: TComponentData<TProps> = {}): ComponentError => {
  return new ComponentError(data)
}

export { Error }
