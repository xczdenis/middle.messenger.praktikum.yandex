import { ComponentProperties } from '../../../modules/engine/shared/Types'
import Component from './changePassword'

export default (data: ComponentProperties = {}): Component => {
  const { name = 'ChangePassword', props, events } = data
  return new Component(name, props, events)
}
