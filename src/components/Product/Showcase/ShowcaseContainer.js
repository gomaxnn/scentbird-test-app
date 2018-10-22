import { connect } from 'react-redux'

const mapStateToProps = ({ product }) => ({
  imageUrl: product.imageUrl,
})

export default connect(mapStateToProps)
