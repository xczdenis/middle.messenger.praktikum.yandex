import compiler from './changePassword'
import baseComponentObject from '../../../modules/engine/components/baseComponentObject'

export default (props, name='ChangePassword') => {
  return baseComponentObject(name, compiler(props))
}