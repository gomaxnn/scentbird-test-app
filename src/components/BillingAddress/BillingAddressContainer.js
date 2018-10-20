import { connect } from 'react-redux'

const mapStateToProps = ({ billingAddress }) => ({
  hasCountry: Boolean(billingAddress.country),
  isVisible: billingAddress.visible,
})

export default connect(mapStateToProps)
