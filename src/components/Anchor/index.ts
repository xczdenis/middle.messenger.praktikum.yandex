import { ComponentAnchor, TProps } from './component'
import { TComponentData } from '../../modules/engine/shared/types'

const Anchor = (data: TComponentData<TProps> = {}): ComponentAnchor => {
  return new ComponentAnchor(data)
}

export { Anchor }
