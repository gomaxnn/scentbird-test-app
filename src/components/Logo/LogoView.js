import React from 'react'
import styled from 'styled-components'

import logo from './logo.svg'

import { Image, Link } from '../common'

import media from '../../utils/media'

const StyledLink = styled(Link)`
  height: 100%;
  border: 0;
`

const StyledImage = styled(Image)`
  height: 100%;
`

const StyledLogo = styled.div`
  height: 10vw;
  text-align: center;
  ${media.desktop`
    height: 38px;
    text-align: left;
  `}
`

const Logo = () => (
  <StyledLogo>
    <StyledLink href="/" title="Scentbird">
      <StyledImage src={logo} alt="" />
    </StyledLink>
  </StyledLogo>
)

export default Logo
