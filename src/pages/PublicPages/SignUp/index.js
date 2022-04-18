import compiler from './signUp'
import baseComponentObject from '../../../modules/engine/components/baseComponentObject'

export default (props, name='SignUp') => {
  return baseComponentObject(name, compiler(props))
}