import { ComponentProperties } from '../../modules/engine/shared/Types'
import Component from './breadcrumb'

export default (data: ComponentProperties = {}): Component => {
  const { name = 'Breadcrumb', props, events } = data
  return new Component(name, props, events)
}
