import compiler from './profile'
import baseComponentObject from '../../../modules/engine/components/baseComponentObject'

export default (props, name='Profile') => {
  return baseComponentObject(name, compiler(props))
}