import { connect } from 'react-redux'

const mapStateToProps = ({ shippingAddress }) => ({
  hasCountry: Boolean(shippingAddress.country),
})

export default connect(mapStateToProps)
