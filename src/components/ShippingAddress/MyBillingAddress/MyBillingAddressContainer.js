import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'

import {
  setMyBillingAddress,
} from '../../../redux/ducks/shippingAddress'

import {
  setBillVisibility,
  setBillStreetAddress,
  setBillAptSuite,
  setBillZipCode,
  setBillCity,
  setBillState,
  setBillCountry,
} from '../../../redux/ducks/billingAddress'

const mapStateToProps = ({ shippingAddress }) => ({
  value: shippingAddress.myBillingAddress,
  ...shippingAddress,
})

const mapDispatchToProps = {
  setBillVisibility,
  setMyBillingAddress,
  setBillStreetAddress,
  setBillAptSuite,
  setBillZipCode,
  setBillCity,
  setBillState,
  setBillCountry,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onChange: props => event => {
      const { checked } = event.target
      
      props.setMyBillingAddress(checked)
      props.setBillVisibility(!checked)

      // Sync shipping address with billing one
      checked && props.setBillStreetAddress(props.streetAddress)
      checked && props.setBillAptSuite(props.aptSuite)
      checked && props.setBillZipCode(props.zipCode)
      checked && props.setBillCity(props.city)
      checked && props.setBillState(props.state)
      checked && props.setBillCountry(props.country)
    },
  })
)
