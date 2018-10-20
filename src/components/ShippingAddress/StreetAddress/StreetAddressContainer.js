import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import validate from 'validate.js'

import {
  setStreetAddress,
  setStreetAddressError,
} from '../../../redux/ducks/shippingAddress'

import {
  setBillStreetAddress,
} from '../../../redux/ducks/billingAddress'

import {
  shippingAddressValidators,
} from '../../../utils/validators'

const mapStateToProps = ({ shippingAddress }) => {
  const {
    myBillingAddress,
    streetAddress,
    errors,
  } = shippingAddress
  
  return {
    value: streetAddress,
    error: errors.streetAddress,
    myBillingAddress,
  }
}

const mapDispatchToProps = {
  setStreetAddress,
  setStreetAddressError,
  setBillStreetAddress,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onChange: props => event => {
      const { value } = event.target
      props.myBillingAddress && props.setBillStreetAddress(value)
      props.setStreetAddress(value)
    },
    onBlur: props => event => {
      const { value } = event.target
      const errors = validate.single(value, shippingAddressValidators.streetAddress)
      props.setStreetAddressError(errors ? errors[0] : null)
    },
  })
)
