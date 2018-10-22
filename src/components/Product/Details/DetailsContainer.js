import { connect } from 'react-redux'
import numeral from 'numeral'

const FORMAT = '$0[.]00'
const FREE = 'free'

const mapStateToProps = ({ product }) => {
  const {
    subscription,
    shipping,
    tax,
    discount,
    creditBalance,
    credit,
  } = product

  return {
    subscription: numeral(subscription).format(FORMAT),
    shipping: shipping ? numeral(shipping).format(FORMAT) : FREE,
    tax: numeral(tax).format(FORMAT),
    discount: numeral(discount).format(FORMAT),
    creditBalance: numeral(creditBalance).format(FORMAT),
    credit: numeral(credit).format(FORMAT),
  }
}

export default connect(mapStateToProps)
