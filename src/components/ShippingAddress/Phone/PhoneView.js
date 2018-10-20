import React from 'react'
import PropTypes from 'prop-types'

import {
  FieldWrapper,
  TextField,
} from '../../common'

const Phone = ({
  value,
  error,
  onChange,
  onBlur,
}) => (
  <TextField
    id="shippingPhone"
    mask="+1 999 999 99 99"
    label="Phone number (Optional)"
    value={value}
    error={error}
    onChange={onChange}
    onBlur={onBlur}
  />
)

Phone.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

export default FieldWrapper(Phone, ['fillHalfDesktop'])
