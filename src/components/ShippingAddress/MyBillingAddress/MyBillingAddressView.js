import React from 'react'
import PropTypes from 'prop-types'

import {
  FieldWrapper,
  Checkbox,
} from '../../common'

const MyBillingAddress = ({
  value,
  onChange,
}) => (
  <Checkbox
    checked={value}
    onChange={onChange}
  >
    Use this address as my billing address
  </Checkbox>
)

MyBillingAddress.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
}

export default FieldWrapper(MyBillingAddress)
