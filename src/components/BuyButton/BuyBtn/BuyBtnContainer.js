import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'
import validate from 'validate.js'

import { accountSetErrors } from '../../../redux/ducks/account'
import { typeSetErrors } from '../../../redux/ducks/subscriptionType'
import { shippingSetErrors } from '../../../redux/ducks/shippingAddress'
import { billingSetErrors } from '../../../redux/ducks/billingAddress'
import { cardSetErrors } from '../../../redux/ducks/creditCard'

import {
  accountValidators,
  subscriptionTypeValidators,
  shippingAddressValidators,
  billingAddressValidators,
  creditCardValidators,
} from '../../../utils/validators'

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = {
  accountSetErrors,
  typeSetErrors,
  shippingSetErrors,
  billingSetErrors,
  cardSetErrors,
}

const setErrors = (errors, handler) => {
  const errorsObj = Object.keys(errors).reduce((acc, key) => {
    acc[key] = errors[key][0]
    return acc
  }, {})

  handler(errorsObj)
}

const onClickHandler = props => event => {
  // account
  const accountErrors = validate(props.account, accountValidators) || {}
  setErrors(accountErrors, props.accountSetErrors)

  // subscription type
  const typeErrors = validate(props.subscriptionType, subscriptionTypeValidators) || {}
  setErrors(typeErrors, props.typeSetErrors)

  // shipping address
  const shippingErrors = validate(props.shippingAddress, shippingAddressValidators) || {}
  setErrors(shippingErrors, props.shippingSetErrors)

  // billing address
  const billingErrors = validate(props.billingAddress, billingAddressValidators) || {}
  setErrors(billingErrors, props.billingSetErrors)

  // credit card
  const cardErrors = validate(props.creditCard, creditCardValidators) || {}
  setErrors(cardErrors, props.cardSetErrors)

  const noErrors = (
    Object.keys(accountErrors).length === 0 &&
    Object.keys(typeErrors).length === 0 &&
    Object.keys(shippingErrors).length === 0 &&
    Object.keys(billingErrors).length === 0 &&
    Object.keys(cardErrors).length === 0
  )

  noErrors && alert('Congrats! All the fields are valid.')
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onClick: onClickHandler,
  })
)
