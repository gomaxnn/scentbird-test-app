import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'

import {
  switchType,
  typeSetErrors,
} from '../../redux/ducks/subscriptionType'

const TYPE_WOMEN = 'women'
const TYPE_MEN = 'men'

const mapStateToProps = ({ subscriptionType }) => ({
  forWomen: (subscriptionType.type === TYPE_WOMEN),
  forMen: (subscriptionType.type === TYPE_MEN),
  error: subscriptionType.errors.type,
})

const mapDispatchToProps = {
  switchToWomen() {},
  switchToMen() {},
  typeSetErrors,
  switchType,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    switchToWomen: props => event => {
      props.switchType(TYPE_WOMEN)
      props.typeSetErrors()
    },
    switchToMen: props => event => {
      props.switchType(TYPE_MEN)
      props.typeSetErrors()
    },
  })
)
