import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import validate from 'validate.js'

import {
  setCountry,
  setCountryError,
} from '../../../redux/ducks/shippingAddress'

import {
  setBillCountry,
} from '../../../redux/ducks/billingAddress'

import {
  shippingAddressValidators,
} from '../../../utils/validators'

import countries from '../../../utils/countries'

const mapStateToProps = ({ shippingAddress }) => {
  const {
    myBillingAddress,
    country,
    errors,
  } = shippingAddress

  return {
    value: country,
    options: Object.keys(countries).map(key => ({
      value: key,
      text: key,
    })),
    error: errors.country,
    myBillingAddress,
  }
}

const mapDispatchToProps = {
  setCountry,
  setCountryError,
  setBillCountry,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onChange: props => event => {
      const { value } = event.target
      props.myBillingAddress && props.setBillCountry(value)
      props.setCountry(value)
    },
    onBlur: props => event => {
      const { value } = event.target
      const errors = validate.single(value, shippingAddressValidators.country)
      props.setCountryError(errors ? errors[0] : null)
    },
  })
)
