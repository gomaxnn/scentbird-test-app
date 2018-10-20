import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Checkbox = ({
  children,
  className,
  checked,
  onChange,
}) => (
  <label className={className}>
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
    />
    {children}
    <span />
  </label>
)

Checkbox.propTypes = {
  children: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
}

Checkbox.defaultProps = {
  checked: false,
  onChange: () => {},
}

const StyledCheckbox = styled(Checkbox)`
  display: block;
  position: relative;
  padding-left: 8vw;
  line-height: 6.75vw;
  font-size: 4vw;
  color: rgba(0, 0, 0, .6);
  > input {
    display: none;
    :checked + span {
      background-color: #FF6BA6;
      border: 1px solid #FF458F;
      ::after {
        display: block;
      }
    }
  }
  > span {
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 6vw;
    height: 6vw;
    background-color: #FFF;
    border: 1px solid #1D1B2B;
    color: #FFF;
    ::after {
      content: '';
      display: none;
      position: absolute;
      left: 0.85vw;
      top: 0.85vw;
      width: 4vw;
      height: 2.5vw;
      border: 1vw solid #FFFFFF;
      border-right: 0;
      border-top: 0;
      transform: rotate(-45deg);
    }
  }
  @media (min-width: 576px) {
    padding-left: 24px;
    line-height: normal;
    font-size: 14px;
    > span {
      width: 16px;
      height: 16px;
      ::after {
        left: 2px;
        top: 2px;
        width: 10px;
        height: 7px;
        border-width: 3px;
      }
    }
  }
`

export default StyledCheckbox
