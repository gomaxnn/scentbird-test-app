import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import validate from 'validate.js'

import {
  setCardCode,
  setCardCodeError,
} from '../../../redux/ducks/creditCard'

import {
  creditCardValidators,
} from '../../../utils/validators'

const mapStateToProps = ({ creditCard }) => {
  const { secureCode, errors } = creditCard
  return {
    value: secureCode,
    error: errors.secureCode,
  }
}

const mapDispatchToProps = {
  setCardCode,
  setCardCodeError,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onChange: props => event => {
      props.setCardCode(event.target.value)
    },
    onBlur: props => event => {
      const { value } = event.target
      const errors = validate.single(value, creditCardValidators.secureCode)
      props.setCardCodeError(errors ? errors[0] : null)
    },
  })
)
