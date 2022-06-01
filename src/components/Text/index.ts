import { ComponentText, TProps } from './component'
import { TComponentData } from '../../modules/engine/shared/types'

const Text = (data: TComponentData<TProps> = {}): ComponentText => {
  return new ComponentText(data)
}

export { Text }
