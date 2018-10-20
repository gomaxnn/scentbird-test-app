import React from 'react'
import PropTypes from 'prop-types'

import {
  FieldWrapper,
  TextField,
} from '../../common'

const Address = ({
  value,
  error,
  onChange,
  onBlur,
}) => (
  <TextField
    id="billingAddress"
    label="Street address"
    value={value}
    error={error}
    onChange={onChange}
    onBlur={onBlur}
  />
)

Address.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

export default FieldWrapper(Address, ['fillTwoThirdsDesktop'])
