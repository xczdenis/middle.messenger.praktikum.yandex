import { ComponentFeed } from './component'
import { TComponentData } from '../../../modules/engine/shared/types'
import { TProps } from './component'

const Feed = (data: TComponentData<TProps> = {}): ComponentFeed => {
  return new ComponentFeed(data)
}

export { Feed }
