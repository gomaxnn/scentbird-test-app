import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import validate from 'validate.js'

import {
  setPhone,
  setPhoneError,
} from '../../../redux/ducks/shippingAddress'

import {
  shippingAddressValidators,
} from '../../../utils/validators'

const mapStateToProps = ({ shippingAddress }) => {
  const { phone, errors } = shippingAddress
  return {
    value: phone,
    error: errors.phone,
  }
}

const mapDispatchToProps = {
  setPhone,
  setPhoneError,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onChange: props => event => {
      props.setPhone(event.target.value)
    },
    onBlur: props => event => {
      const { value } = event.target
      const errors = validate.single(value, shippingAddressValidators.phone)
      props.setPhoneError(errors ? errors[0] : null)
    },
  })
)
