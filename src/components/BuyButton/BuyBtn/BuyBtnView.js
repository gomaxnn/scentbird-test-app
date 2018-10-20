import React from 'react'
import PropTypes from 'prop-types'

import {
  FieldWrapper,
  Button,
} from '../../common'

const BuyBtn = ({ onClick }) => (
  <Button onClick={onClick}>Buy now</Button>
)

BuyBtn.propTypes = {
  onClick: PropTypes.func,
}

export default FieldWrapper(BuyBtn, ['fillFull', 'fillThirdDesktop'])
