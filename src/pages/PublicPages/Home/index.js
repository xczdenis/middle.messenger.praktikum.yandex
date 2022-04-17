import compiler from './home'
import baseComponentObject from '../../../modules/engine/components/baseComponentObject'

export default (props, name='Home') => {
  return baseComponentObject(name, compiler(props))
}
