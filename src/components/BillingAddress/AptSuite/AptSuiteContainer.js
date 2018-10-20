import { connect } from 'react-redux'
import { compose, withHandlers } from 'recompose'

import {
  setBillAptSuite,
} from '../../../redux/ducks/billingAddress'

const mapStateToProps = ({ billingAddress }) => {
  const { aptSuite } = billingAddress
  return {
    value: aptSuite,
  }
}

const mapDispatchToProps = {
  setBillAptSuite,
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onChange: props => event => {
      props.setBillAptSuite(event.target.value)
    },
  })
)
