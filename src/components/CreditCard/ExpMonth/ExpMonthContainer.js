import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import validate from 'validate.js'

import {
  setCardMonth,
  setCardMonthError,
} from '../../../redux/ducks/creditCard'

import {
  creditCardValidators,
} from '../../../utils/validators'

const mapStateToProps = ({ creditCard }) => {
  const { expMonth, errors } = creditCard
  return {
    value: expMonth,
    error: errors.expMonth,
    options: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ].map((value, key) => ({
      value: key + 1,
      text: value,
    })),
  }
}

const mapDispatchToProps = {
  setCardMonth,
  setCardMonthError,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onChange: props => event => {
      props.setCardMonth(event.target.value)
    },
    onBlur: props => event => {
      const { value } = event.target
      const errors = validate.single(value, creditCardValidators.expMonth)
      props.setCardMonthError(errors ? errors[0] : null)
    },
  })
)
