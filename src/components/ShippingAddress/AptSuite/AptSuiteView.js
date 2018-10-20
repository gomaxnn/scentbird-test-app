import React from 'react'
import PropTypes from 'prop-types'

import {
  FieldWrapper,
  TextField,
} from '../../common'

const AptSuite = ({
  value,
  onChange,
}) => (
  <TextField
    id="shippingApt"
    label="Apt/Suite (Optional)"
    value={value}
    onChange={onChange}
  />
)

AptSuite.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}

export default FieldWrapper(AptSuite, ['fillThirdDesktop'])
