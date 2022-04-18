import compiler from './chatListItem'
import baseComponentObject from '../../../modules/engine/components/baseComponentObject'

export default (props, name = 'ChatListItem') => {
  return baseComponentObject(name, compiler(props))
}
