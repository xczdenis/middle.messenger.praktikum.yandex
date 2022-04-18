import compiler from './error'
import baseComponentObject from '../../modules/engine/components/baseComponentObject'

export default (props, name='Error') => {
  return baseComponentObject(name, compiler(props))
}
