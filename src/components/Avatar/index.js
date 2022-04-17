import compiler from './avatar'
import baseComponentObject from '../../modules/engine/components/baseComponentObject'

export default (props) => {
  return baseComponentObject('Avatar', compiler(props))
}
