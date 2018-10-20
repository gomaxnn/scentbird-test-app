import React from 'react'
import PropTypes from 'prop-types'

import {
  FieldWrapper,
  Select,
} from '../../common'

const Country = ({
  value,
  options,
  error,
  onChange,
  onBlur,
}) => (
  <Select
    label="Country"
    value={value}
    options={options}
    error={error}
    onChange={onChange}
    onBlur={onBlur}
  />
)

Country.propTypes = {
  value: PropTypes.string,
  options: PropTypes.array,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

export default FieldWrapper(Country)
