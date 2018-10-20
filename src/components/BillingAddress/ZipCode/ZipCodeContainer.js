import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import validate from 'validate.js'

import {
  setBillZipCode,
  setZipCodeErr,
} from '../../../redux/ducks/billingAddress'

import {
  billingAddressValidators,
} from '../../../utils/validators'

const mapStateToProps = ({ billingAddress }) => {
  const { zipCode, errors } = billingAddress
  return {
    value: zipCode,
    error: errors.zipCode,
  }
}

const mapDispatchToProps = {
  setBillZipCode,
  setZipCodeErr,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onChange: props => event => {
      props.setBillZipCode(event.target.value)
    },
    onBlur: props => event => {
      const { value } = event.target
      const errors = validate.single(value, billingAddressValidators.zipCode)
      props.setZipCodeErr(errors ? errors[0] : null)
    },
  })
)
