import React from 'react'
import PropTypes from 'prop-types'

import {
  FieldWrapper,
  TextField,
} from '../../common'

const ZipCode = ({
  value,
  error,
  onChange,
  onBlur,
}) => (
  <TextField
    id="shippingZip"
    label="Zip code"
    value={value}
    error={error}
    onChange={onChange}
    onBlur={onBlur}
  />
)

ZipCode.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

export default FieldWrapper(ZipCode, ['fillThirdDesktop'])
