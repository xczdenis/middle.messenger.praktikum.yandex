import { ComponentBreadcrumb, TProps } from './component'
import { TComponentData } from '../../modules/engine/shared/types'

const Breadcrumb = (data: TComponentData<TProps> = {}): ComponentBreadcrumb => {
  return new ComponentBreadcrumb(data)
}

export { Breadcrumb }
