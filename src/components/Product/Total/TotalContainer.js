import { connect } from 'react-redux'
import numeral from 'numeral'

const mapStateToProps = ({ product }) => ({
  total: numeral(product.total).format('$0.00'),
})

export default connect(mapStateToProps)
