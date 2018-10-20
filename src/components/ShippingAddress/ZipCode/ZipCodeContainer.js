import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import validate from 'validate.js'

import {
  setZipCode,
  setZipCodeError,
} from '../../../redux/ducks/shippingAddress'

import {
  setBillZipCode,
} from '../../../redux/ducks/billingAddress'

import {
  shippingAddressValidators,
} from '../../../utils/validators'

const mapStateToProps = ({ shippingAddress }) => {
  const {
    myBillingAddress,
    zipCode,
    errors,
  } = shippingAddress
  
  return {
    value: zipCode,
    error: errors.zipCode,
    myBillingAddress,
  }
}

const mapDispatchToProps = {
  setZipCode,
  setZipCodeError,
  setBillZipCode,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onChange: props => event => {
      const { value } = event.target
      props.myBillingAddress && props.setBillZipCode(value)
      props.setZipCode(value)
    },
    onBlur: props => event => {
      const { value } = event.target
      const errors = validate.single(value, shippingAddressValidators.zipCode)
      props.setZipCodeError(errors ? errors[0] : null)
    },
  })
)
