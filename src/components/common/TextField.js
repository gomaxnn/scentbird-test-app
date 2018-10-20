import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'
import InputMask from 'react-input-mask'
import classNames from 'classnames'

const FieldError = styled.div`
  padding-top: 1.5vw;
  font-size: 3.75vw;
  color: #F00;
  @media (min-width: 576px) {
    padding-top: 5px;
    font-size: 12px;
  }
`

const TextField = ({
  className,
  id,
  type,
  mask,
  label,
  value,
  error,
  onChange,
  onBlur,
}) => (
  <div className={classNames(
    className,
    error && 'error',
  )}>
    {(mask && type === 'text') ? (
      <InputMask
        mask={mask}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      >
        {inputProps => (
          <input id={id} type={type} {...inputProps} />
        )}
      </InputMask>
    ) : (
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    )}
    <label htmlFor={id}>{label}</label>
    {error && (
      <FieldError>{error}</FieldError>
    )}
  </div>
)

TextField.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password']),
  mask: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
}

TextField.defaultProps = {
  type: "text",
  onChange: () => {},
  onBlur: () => {},
}

const modifierConfig = {
  whiteField: () => `
    input {
      background-color: #FFF;
      border-color: #E6E6E6;
    }
  `
}

const StyledTextField = styled(TextField)`
  position: relative;
  input {
    display: block;
    width: 100%;
    padding: 4.75vw;
    background-color: #FAFAFA;
    border: 1px solid #E6E6E6;
    font-family: "Proxima Nova", sans-serif;
    font-size: 5.625vw;
    outline: none;
    :focus {
      background-color: #FFF;
      border-color: rgba(255, 69, 143, .6);
    }
    :not([value=""]) + label,
    :focus + label {
      left: 2.5vw;
      top: -1.75vw;
      padding: 0 1.25vw;
      line-height: 1;
      background-color: #FFF;
      font-size: 4.375vw;
    }
  }
  label {
    display: block;
    position: absolute;
    left: 4.75vw;
    top: 4.75vw;
    font-size: 5.625vw;
    color: #9B9B9B;
    transition: all .1s linear;
  }
  &.error {
    input {
      border: 2px solid #FD6464;
    }
  }
  @media (min-width: 576px) {
    input {
      padding: 15px;
      font-size: 18px;
      :not([value=""]) + label,
      :focus + label {
        left: 12px;
        top: -7px;
        padding: 0 3px;
        font-size: 14px;
      }
    }
    label {
      left: 15px;
      top: 15px;
      font-size: 18px;
    }
  }
  ${applyStyleModifiers(modifierConfig)};
`

export default StyledTextField
