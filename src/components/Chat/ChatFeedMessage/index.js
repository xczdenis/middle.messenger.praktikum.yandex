import compiler from './chatFeedMessage'
import baseComponentObject from '../../../modules/engine/components/baseComponentObject'

export default (props) => {
  return baseComponentObject('ChatFeedMessage', compiler(props))
}