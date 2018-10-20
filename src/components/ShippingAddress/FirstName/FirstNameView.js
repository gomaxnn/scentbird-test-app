import React from 'react'
import PropTypes from 'prop-types'

import {
  FieldWrapper,
  TextField,
} from '../../common'

const FirstName = ({
  value,
  error,
  onChange,
  onBlur,
}) => (
  <TextField
    id="shippingFirstName"
    label="First name"
    value={value}
    error={error}
    onChange={onChange}
    onBlur={onBlur}
  />
)

FirstName.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

export default FieldWrapper(FirstName, ['fillHalfDesktop'])
