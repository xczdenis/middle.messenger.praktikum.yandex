import compiler from './button'
import baseComponentObject from '../../modules/engine/components/baseComponentObject'

export default (props) => {
  return baseComponentObject('Button', compiler(props))
}