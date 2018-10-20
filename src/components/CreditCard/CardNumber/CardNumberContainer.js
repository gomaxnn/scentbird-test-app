import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import validate from 'validate.js'

import {
  setCardNumber,
  setCardNumberError,
} from '../../../redux/ducks/creditCard'

import {
  creditCardValidators,
} from '../../../utils/validators'

const mapStateToProps = ({ creditCard }) => {
  const { cardNumber, errors } = creditCard
  return {
    value: cardNumber,
    error: errors.cardNumber,
  }
}

const mapDispatchToProps = {
  setCardNumber,
  setCardNumberError,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onChange: props => event => {
      props.setCardNumber(event.target.value)
    },
    onBlur: props => event => {
      const { value } = event.target
      const errors = validate.single(value, creditCardValidators.cardNumber)
      props.setCardNumberError(errors ? errors[0] : null)
    },
  })
)
