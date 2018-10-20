import React from 'react'
import PropTypes from 'prop-types'

import {
  FieldWrapper,
  TextField,
} from '../../common'

const LastName = ({
  value,
  error,
  onChange,
  onBlur,
}) => (
  <TextField
    id="shippingLastName"
    label="Last name"
    value={value}
    error={error}
    onChange={onChange}
    onBlur={onBlur}
  />
)

LastName.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

export default FieldWrapper(LastName, ['fillHalfDesktop'])
