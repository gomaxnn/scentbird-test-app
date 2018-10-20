import styled from 'styled-components'

import { Image, Link } from '../common'

const LogoLink = styled(Link)`
  height: 100%;
  border: 0;
`

const LogoImage = styled(Image)`
  height: 100%;
`

const Logo = styled.div`
  height: 10vw;
  text-align: center;
  @media (min-width: 576px) {
    height: 38px;
    text-align: left;
  }
`

Logo.Link = LogoLink
Logo.Image = LogoImage

export default Logo
