import styled from 'styled-components'

import media from '../../../utils/media'

const ColumnLeft = styled.div`
  // max-width: 400px;
  // width: 100%;
  flex: auto;
  ${media.desktop`
    flex: 1;
    margin-right: 65px;
  `}
`

export default ColumnLeft
