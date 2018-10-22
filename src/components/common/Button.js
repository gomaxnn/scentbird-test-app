import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import media from '../../utils/media'

const Button = ({
  children,
  className,
  onClick,
}) => (
  <button
    className={className}
    onClick={onClick}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
}

Button.defaultProps = {
  onClick: () => {},
}

const StyledButton = styled(Button)`
  display: block;
  width: 100%;
  padding: 4.75vw;
  background-color: #ff458f;
  border: none;
  text-align: center;
  white-space: nowrap;
  text-transform: uppercase;
  font-family: "Proxima Nova", sans-serif;
  font-weight: 600;
  font-size: 5.625vw;
  color: #FFF;
  outline: none;
  ${media.desktop`
    padding: 15px;
    font-size: 18px;
  `}
`

export default StyledButton
