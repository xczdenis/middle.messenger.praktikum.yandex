import { ComponentHome, TProps } from './component'
import { TComponentData } from '../../../modules/engine/shared/types'

const Home = (data: TComponentData<TProps> = {}): ComponentHome => {
  return new ComponentHome(data)
}

export { Home }
