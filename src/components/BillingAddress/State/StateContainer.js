import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import validate from 'validate.js'

import {
  setBillState,
  setStateErr,
} from '../../../redux/ducks/billingAddress'

import {
  billingAddressValidators,
} from '../../../utils/validators'

import countries from '../../../utils/countries'

const mapStateToProps = ({ billingAddress, regions }) => {
  const {
    country,
    state,
    errors,
  } = billingAddress
  
  const states = countries[country] || {}
  
  return {
    value: state,
    options: Object.keys(states).map(key => ({
      value: key,
      text: key,
    })),
    error: errors.state,
  }
}

const mapDispatchToProps = {
  setBillState,
  setStateErr,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onChange: props => event => {
      props.setBillState(event.target.value)
    },
    onBlur: props => event => {
      const { value } = event.target
      const errors = validate.single(value, billingAddressValidators.state)
      props.setStateErr(errors ? errors[0] : null)
    },
  })
)
