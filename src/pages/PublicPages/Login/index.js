import compiler from './login'
import baseComponentObject from '../../../modules/engine/components/baseComponentObject'

export default (props, name='Login') => {
  return baseComponentObject(name, compiler(props))
}