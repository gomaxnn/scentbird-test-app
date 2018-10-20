import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import validate from 'validate.js'

import {
  setFirstName,
  setFirstNameError,
} from '../../../redux/ducks/shippingAddress'

import {
  shippingAddressValidators,
} from '../../../utils/validators'

const mapStateToProps = ({ shippingAddress }) => {
  const { firstName, errors } = shippingAddress
  return {
    value: firstName,
    error: errors.firstName,
  }
}

const mapDispatchToProps = {
  setFirstName,
  setFirstNameError,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onChange: props => event => {
      props.setFirstName(event.target.value)
    },
    onBlur: props => event => {
      const { value } = event.target
      const errors = validate.single(value, shippingAddressValidators.firstName)
      props.setFirstNameError(errors ? errors[0] : null)
    },
  })
)
