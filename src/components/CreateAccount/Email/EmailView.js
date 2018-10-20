import React from 'react'
import PropTypes from 'prop-types'

import {
  FieldWrapper,
  TextField,
} from '../../common'

const Email = ({
  value,
  error,
  onChange,
  onBlur,
}) => (
  <TextField
    id="accountEmail"
    label="Email address"
    value={value}
    error={error}
    onChange={onChange}
    onBlur={onBlur}
  />
)

Email.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

export default FieldWrapper(Email, ['fillHalfDesktop'])
