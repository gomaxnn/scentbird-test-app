import React from 'react'
import PropTypes from 'prop-types'

import {
  FieldWrapper,
  TextField,
} from '../../common'

const SecureCode = ({
  value,
  error,
  onChange,
  onBlur,
}) => (
  <TextField
    id="cardCode"
    mask="999"
    label="CVV/CVC"
    value={value}
    error={error}
    onChange={onChange}
    onBlur={onBlur}
    modifiers={['whiteField']}
  />
)

SecureCode.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

export default FieldWrapper(SecureCode, ['fillHalf', 'fillThirdDesktop', 'secureCode'])
