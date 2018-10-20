import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import validate from 'validate.js'

import {
  setCity,
  setCityError,
} from '../../../redux/ducks/shippingAddress'

import {
  setBillCity,
} from '../../../redux/ducks/billingAddress'

import {
  shippingAddressValidators,
} from '../../../utils/validators'

import countries from '../../../utils/countries'

const mapStateToProps = ({ shippingAddress }) => {
  const {
    myBillingAddress,
    country,
    state,
    city,
    errors,
  } = shippingAddress

  const cities = (country && state)
    ? countries[country][state] : []

  return {
    value: city,
    options: cities.map(value => ({
      value,
      text: value,
    })),
    error: errors.city,
    myBillingAddress,
  }
}

const mapDispatchToProps = {
  setCity,
  setCityError,
  setBillCity,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onChange: props => event => {
      const { value } = event.target
      props.myBillingAddress && props.setBillCity(value)
      props.setCity(value)
    },
    onBlur: props => event => {
      const { value } = event.target
      const errors = validate.single(value, shippingAddressValidators.city)
      props.setCityError(errors ? errors[0] : null)
    },
  })
)
