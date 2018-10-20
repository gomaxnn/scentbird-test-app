import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'

import {
  switchType,
  setTypeError,
} from '../../redux/ducks/subscriptionType'

const TYPE_WOMEN = 'women'
const TYPE_MEN = 'men'

const mapStateToProps = ({ subscriptionType }) => ({
  forWomen: (subscriptionType.type === TYPE_WOMEN),
  forMen: (subscriptionType.type === TYPE_MEN),
  error: subscriptionType.error,
})

const mapDispatchToProps = {
  switchToWomen() {},
  switchToMen() {},
  setTypeError,
  switchType,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    switchToWomen: props => event => {
      props.switchType(TYPE_WOMEN)
      props.setTypeError(null)
    },
    switchToMen: props => event => {
      props.switchType(TYPE_MEN)
      props.setTypeError(null)
    },
  })
)
