import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'

import {
  setAptSuite,
} from '../../../redux/ducks/shippingAddress'

import {
  setBillAptSuite,
} from '../../../redux/ducks/billingAddress'

const mapStateToProps = ({ shippingAddress }) => ({
  value: shippingAddress.aptSuite,
  myBillingAddress: shippingAddress.myBillingAddress,
})

const mapDispatchToProps = {
  setAptSuite,
  setBillAptSuite,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onChange: props => event => {
      const { value } = event.target
      props.myBillingAddress && props.setBillAptSuite(value)
      props.setAptSuite(value)
    },
  })
)
