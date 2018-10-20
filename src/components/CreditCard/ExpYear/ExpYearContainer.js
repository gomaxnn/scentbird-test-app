import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import validate from 'validate.js'

import {
  setCardYear,
  setCardYearError,
} from '../../../redux/ducks/creditCard'

import {
  creditCardValidators,
} from '../../../utils/validators'

const mapStateToProps = ({ creditCard }) => {
  const { expYear, errors } = creditCard

  const startYear = new Date().getFullYear()
  const yearsNum = 7

  const years = [...Array(yearsNum)].map((item, index) => ({
    value: index + 1,
    text: startYear + index,
  }))

  return {
    value: expYear,
    error: errors.expYear,
    options: years,
  }
}

const mapDispatchToProps = {
  setCardYear,
  setCardYearError,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onChange: props => event => {
      props.setCardYear(event.target.value)
    },
    onBlur: props => event => {
      const { value } = event.target
      const errors = validate.single(value, creditCardValidators.expYear)
      props.setCardYearError(errors ? errors[0] : null)
    },
  })
)
