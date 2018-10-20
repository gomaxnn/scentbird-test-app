import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import validate from 'validate.js'

import {
  setBillCountry,
  setCountryErr,
} from '../../../redux/ducks/billingAddress'

import {
  billingAddressValidators,
} from '../../../utils/validators'

import countries from '../../../utils/countries'

const mapStateToProps = ({ billingAddress }) => {
  const { country, errors } = billingAddress

  return {
    value: country,
    options: Object.keys(countries).map(key => ({
      value: key,
      text: key,
    })),
    error: errors.country,
  }
}

const mapDispatchToProps = {
  setBillCountry,
  setCountryErr,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onChange: props => event => {
      props.setBillCountry(event.target.value)
    },
    onBlur: props => event => {
      const { value } = event.target
      const errors = validate.single(value, billingAddressValidators.country)
      props.setCountryErr(errors ? errors[0] : null)
    },
  })
)
