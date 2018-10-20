import React from 'react'
import PropTypes from 'prop-types'

import {
  FieldWrapper,
  Select,
} from '../../common'

const ExpMonth = ({
  value,
  options,
  error,
  onChange,
  onBlur,
}) => (
  <Select
    label="Month"
    value={value}
    options={options}
    error={error}
    onChange={onChange}
    onBlur={onBlur}
    modifiers={['whiteField']}
  />
)

ExpMonth.propTypes = {
  value: PropTypes.string,
  options: PropTypes.array,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

export default FieldWrapper(ExpMonth, ['fillHalf', 'fillFourthDesktop'])
