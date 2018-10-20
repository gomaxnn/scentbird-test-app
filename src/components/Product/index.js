import { connect } from 'react-redux'

import View from './View'

const mapStateToProps = ({ product }) => product

export default connect(mapStateToProps)(View)
