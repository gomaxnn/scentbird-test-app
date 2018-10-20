import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import validate from 'validate.js'

import {
  setEmail,
  setEmailError,
} from '../../../redux/ducks/account'

import {
  accountValidators,
} from '../../../utils/validators'

const mapStateToProps = ({ account }) => {
  const { email, errors } = account
  return {
    value: email,
    error: errors.email,
  }
}

const mapDispatchToProps = {
  setEmail,
  setEmailError,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onChange: props => event => {
      props.setEmail(event.target.value)
    },
    onBlur: props => event => {
      const { value } = event.target
      const errors = validate.single(value, accountValidators.email)
      props.setEmailError(errors ? errors[0] : null)
    },
  })
)
