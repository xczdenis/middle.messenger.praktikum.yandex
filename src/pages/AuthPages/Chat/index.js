import compiler from './chat'
import baseComponentObject from '../../../modules/engine/components/baseComponentObject'

export default (props, name='Chat') => {
  return baseComponentObject(name, compiler(props))
}