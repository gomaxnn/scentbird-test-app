import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import validate from 'validate.js'

import {
  setPassword,
  setPasswordError,
} from '../../../redux/ducks/account'

import {
  accountValidators,
} from '../../../utils/validators'

const mapStateToProps = ({ account }) => {
  const { password, errors } = account
  return {
    value: password,
    error: errors.password,
  }
}

const mapDispatchToProps = {
  setPassword,
  setPasswordError,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onChange: props => event => {
      props.setPassword(event.target.value)
    },
    onBlur: props => event => {
      const { value } = event.target
      const errors = validate.single(value, accountValidators.password)
      props.setPasswordError(errors ? errors[0] : null)
    },
  })
)
