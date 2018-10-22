import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import classNames from 'classnames'

import media from '../../utils/media'

const FieldError = styled.div`
  padding-top: 1.5vw;
  font-size: 3.75vw;
  color: #F00;
  ${media.desktop`
    padding-top: 5px;
    font-size: 12px;
  `}
`

// Option
const Option = ({ value, text }) => (
  <option value={value}>{text}</option>
)

Option.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
}

// Select
const Select = ({
  className,
  options,
  value,
  label,
  error,
  onChange,
  onBlur,
}) => {
  const hasLabel = (label && !value)

  return (
    <div className={classNames(
      className,
      hasLabel && 'has-label',
      error && 'error',
    )}>
      <select
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        {hasLabel && (
          <Option
            value=""
            text={label}
          />
        )}
        {options.map(({ value, text }) => (
          <Option
            key={value}
            value={value}
            text={text}
          />
        ))}
      </select>
      {error && (
        <FieldError>{error}</FieldError>
      )}
    </div>
  )
}

Select.propTypes = {
  options: PropTypes.array,
  value: PropTypes.string,
  label: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

Select.defaultProps = {
  options: [],
  onChange: () => {},
  onBlur: () => {},
}

const modifierConfig = {
  whiteField: () => `
    select {
      background-color: #FFF;
      border-color: #E6E6E6;
    }
  `
}

const StyledSelect = styled(Select)`
  position: relative;
  select {
    display: block;
    width: 100%;
    padding: 4.75vw;
    background-color: #FAFAFA;
    border: 1px solid #E6E6E6;
    font-family: "Proxima Nova", sans-serif;
    font-size: 5.625vw;
    appearance: none;
    outline: none;
    ::-ms-expand {
      display: none;
    }
    :focus {
      background-color: #FFF;
      border-color: rgba(255, 69, 143, .6);
    }
  }
  &.has-label {
    select {
      color: #9B9B9B;
    }
  }
  &.error {
    select {
      border: 2px solid #FD6464;
    }
  }
  ::after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid #FF458F;
    right: 4.75vw;
    top: 8vw;
  }
  ${media.desktop`
    select {
      padding: 15px;
      font-size: 18px;
    }
    ::after {
      right: 15px;
      top: 25px;
    }
  `}
  ${applyStyleModifiers(modifierConfig)};
`

export default StyledSelect
