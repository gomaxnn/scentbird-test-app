import React from 'react'
import PropTypes from 'prop-types'

import {
  FieldWrapper,
  Select,
} from '../../common'

const State = ({
  value,
  options,
  error,
  onChange,
  onBlur,
}) => (
  <Select
    label="State"
    value={value}
    options={options}
    error={error}
    onChange={onChange}
    onBlur={onBlur}
  />
)

State.propTypes = {
  value: PropTypes.string,
  options: PropTypes.array,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

export default FieldWrapper(State, ['fillThirdDesktop'])
