import styled from 'styled-components'

import media from '../../../utils/media'

const Header = styled.div`
  width: 100%;
  margin-bottom: 2.125vw;
  padding: 5.625vw;
  ${media.desktop`
    margin-bottom: 26px;
    padding: 18px 0;
  `}
`

export default Header
