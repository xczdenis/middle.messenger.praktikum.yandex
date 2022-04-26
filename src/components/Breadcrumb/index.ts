import { TComponentProperties } from '../../modules/engine/shared/Types'
import Component from './breadcrumb'

export default (data: TComponentProperties = {}): Component => {
  const { name = 'Breadcrumb', props, events } = data
  return new Component(name, props, events)
}
