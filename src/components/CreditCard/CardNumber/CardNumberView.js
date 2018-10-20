import React from 'react'
import PropTypes from 'prop-types'

import {
  FieldWrapper,
  TextField,
} from '../../common'

const CardNumber = ({
  value,
  error,
  onChange,
  onBlur,
}) => (
  <TextField
    id="cardNumber"
    mask="9999-9999-9999-9999"
    label="Card number"
    value={value}
    error={error}
    onChange={onChange}
    onBlur={onBlur}
    modifiers={['whiteField']}
  />
)

CardNumber.propTypes = {
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

export default FieldWrapper(CardNumber, ['fillTwoThirdsDesktop'])
