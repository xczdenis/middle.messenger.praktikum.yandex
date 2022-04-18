import compiler from './breadcrumb'
import baseComponentObject from '../../modules/engine/components/baseComponentObject'

export default (props) => {
  return baseComponentObject('Breadcrumb', compiler(props))
}
