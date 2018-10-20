import React from 'react'
import PropTypes from 'prop-types'

import {
  FieldWrapper,
  TextField,
} from '../../common'

const Password = ({
  value,
  error,
  onChange,
  onBlur,
}) => (
  <TextField
    id="accountPassword"
    type="password"
    label="Password"
    value={value}
    error={error}
    onChange={onChange}
    onBlur={onBlur}
  />
)

Password.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

export default FieldWrapper(Password, ['fillHalfDesktop'])
