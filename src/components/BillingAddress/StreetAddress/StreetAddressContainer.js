import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import validate from 'validate.js'

import {
  setBillStreetAddress,
  setStreetAddressErr,
} from '../../../redux/ducks/billingAddress'

import {
  billingAddressValidators,
} from '../../../utils/validators'

const mapStateToProps = ({ billingAddress }) => {
  const { streetAddress, errors } = billingAddress
  return {
    value: streetAddress,
    error: errors.streetAddress,
  }
}

const mapDispatchToProps = {
  setBillStreetAddress,
  setStreetAddressErr,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onChange: props => event => {
      props.setBillStreetAddress(event.target.value)
    },
    onBlur: props => event => {
      const { value } = event.target
      const errors = validate.single(value, billingAddressValidators.streetAddress)
      props.setStreetAddressErr(errors ? errors[0] : null)
    },
  })
)
