import { TComponentProperties } from '../../../modules/engine/shared/Types'
import Component from './signUp'

export default (data: TComponentProperties = {}): Component => {
  const { name = 'SignUp', props, events } = data
  return new Component(name, props, events)
}
