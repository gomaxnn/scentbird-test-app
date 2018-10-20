import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import validate from 'validate.js'

import {
  setLastName,
  setLastNameError,
} from '../../../redux/ducks/shippingAddress'

import {
  shippingAddressValidators,
} from '../../../utils/validators'

const mapStateToProps = ({ shippingAddress }) => {
  const { lastName, errors } = shippingAddress
  return {
    value: lastName,
    error: errors.lastName,
  }
}

const mapDispatchToProps = {
  setLastName,
  setLastNameError,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onChange: props => event => {
      props.setLastName(event.target.value)
    },
    onBlur: props => event => {
      const { value } = event.target
      const errors = validate.single(value, shippingAddressValidators.lastName)
      props.setLastNameError(errors ? errors[0] : null)
    },
  })
)
