import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import validate from 'validate.js'

import {
  setBillCity,
  setCityErr,
} from '../../../redux/ducks/billingAddress'

import {
  billingAddressValidators,
} from '../../../utils/validators'

import countries from '../../../utils/countries'

const mapStateToProps = ({ billingAddress }) => {
  const {
    country,
    state,
    city,
    errors,
  } = billingAddress
  
  const cities = (country && state)
    ? countries[country][state] : []
  
  return {
    value: city,
    options: cities.map(value => ({
      value,
      text: value,
    })),
    error: errors.city,
  }
}

const mapDispatchToProps = {
  setBillCity,
  setCityErr,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onChange: props => event => {
      props.setBillCity(event.target.value)
    },
    onBlur: props => event => {
      const { value } = event.target
      const errors = validate.single(value, billingAddressValidators.city)
      props.setCityErr(errors ? errors[0] : null)
    },
  })
)
