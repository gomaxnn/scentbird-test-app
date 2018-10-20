import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import validate from 'validate.js'

import {
  setState,
  setStateError,
} from '../../../redux/ducks/shippingAddress'

import {
  setBillState,
} from '../../../redux/ducks/billingAddress'

import {
  shippingAddressValidators,
} from '../../../utils/validators'

import countries from '../../../utils/countries'

const mapStateToProps = ({ shippingAddress, regions }) => {
  const {
    myBillingAddress,
    country,
    state,
    errors,
  } = shippingAddress
  
  const states = countries[country] || {}

  return {
    value: state,
    options: Object.keys(states).map(key => ({
      value: key,
      text: key,
    })),
    error: errors.state,
    myBillingAddress,
  }
}

const mapDispatchToProps = {
  setState,
  setStateError,
  setBillState,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onChange: props => event => {
      const { value } = event.target
      props.myBillingAddress && props.setBillState(value)
      props.setState(value)
    },
    onBlur: props => event => {
      const { value } = event.target
      const errors = validate.single(value, shippingAddressValidators.state)
      props.setStateError(errors ? errors[0] : null)
    },
  })
)
