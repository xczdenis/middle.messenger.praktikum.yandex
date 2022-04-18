import compiler from './chatList'
import baseComponentObject from '../../../modules/engine/components/baseComponentObject'

export default (props, name = 'ChatList') => {
  return baseComponentObject(name, compiler(props))
}
