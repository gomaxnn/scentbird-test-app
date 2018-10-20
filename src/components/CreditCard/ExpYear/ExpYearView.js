import React from 'react'
import PropTypes from 'prop-types'

import {
  FieldWrapper,
  Select,
} from '../../common'

const ExpYear = ({
  value,
  options,
  error,
  onChange,
  onBlur,
}) => (
  <Select
    label="Year"
    value={value}
    options={options}
    error={error}
    onChange={onChange}
    onBlur={onBlur}
    modifiers={['whiteField']}
  />
)

ExpYear.propTypes = {
  value: PropTypes.string,
  options: PropTypes.array,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

export default FieldWrapper(ExpYear, ['fillHalf', 'fillFourthDesktop'])
