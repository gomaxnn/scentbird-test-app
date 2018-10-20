import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import validate from 'validate.js'

import * as accountActions from '../../../redux/ducks/account'
import * as typeActions from '../../../redux/ducks/subscriptionType'
import * as shippingActions from '../../../redux/ducks/shippingAddress'
import * as billingActions from '../../../redux/ducks/billingAddress'
import * as cardActions from '../../../redux/ducks/creditCard'

import {
  accountValidators,
  subscriptionTypeValidators,
  shippingAddressValidators,
  billingAddressValidators,
  creditCardValidators,
} from '../../../utils/validators'

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = {
  ...accountActions,
  ...typeActions,
  ...shippingActions,
  ...billingActions,
  ...cardActions,
}

const setError = (errors, handler) => {
  handler(errors ? errors[0] : null)
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onClick: props => event => {
      // account
      const accountErrors = validate(props.account, accountValidators) || {}
      setError(accountErrors.email, props.setEmailError)
      setError(accountErrors.password, props.setPasswordError)

      // subscription type
      const typeErrors = validate(props.subscriptionType, subscriptionTypeValidators) || {}
      setError(typeErrors.type, props.setTypeError)

      // shipping address
      const shippingErrors = validate(props.shippingAddress, shippingAddressValidators) || {}
      setError(shippingErrors.firstName, props.setFirstNameError)
      setError(shippingErrors.lastName, props.setLastNameError)
      setError(shippingErrors.streetAddress, props.setStreetAddressError)
      setError(shippingErrors.zipCode, props.setZipCodeError)
      setError(shippingErrors.city, props.setCityError)
      setError(shippingErrors.state, props.setStateError)
      setError(shippingErrors.country, props.setCountryError)
      setError(shippingErrors.phone, props.setPhoneError)

      // billing address
      const billingErrors = validate(props.billingAddress, billingAddressValidators) || {}
      setError(billingErrors.streetAddress, props.setStreetAddressErr)
      setError(billingErrors.zipCode, props.setZipCodeErr)
      setError(billingErrors.city, props.setCityErr)
      setError(billingErrors.state, props.setStateErr)
      setError(billingErrors.country, props.setCountryErr)

      // credit card
      const cardErrors = validate(props.creditCard, creditCardValidators) || {}
      setError(cardErrors.cardNumber, props.setCardNumberError)
      setError(cardErrors.expMonth, props.setCardMonthError)
      setError(cardErrors.expYear, props.setCardYearError)
      setError(cardErrors.secureCode, props.setCardCodeError)
      
      const noErrors = (
        Object.keys(accountErrors).length === 0 &&
        Object.keys(typeErrors).length === 0 &&
        Object.keys(shippingErrors).length === 0 &&
        Object.keys(billingErrors).length === 0 &&
        Object.keys(cardErrors).length === 0
      )
      
      noErrors && alert('Congrats! All the fields are valid.')
    },
  })
)
