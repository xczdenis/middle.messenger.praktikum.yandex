import compiler from './chatFeed'
import baseComponentObject from '../../../modules/engine/components/baseComponentObject'

export default (props, name = 'ChatFeed') => {
  return baseComponentObject(name, compiler(props))
}
