import compiler from './input'
import baseComponentObject from '../../modules/engine/components/baseComponentObject'

export default (props) => {
  return baseComponentObject('Input', compiler(props))
}
