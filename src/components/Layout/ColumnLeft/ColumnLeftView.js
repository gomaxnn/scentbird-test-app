import styled from 'styled-components'

import media from '../../../utils/media'

const ColumnLeft = styled.div`
  flex: auto;
  ${media.desktop`
    max-width: 400px;
    margin-right: 65px;
  `}
`

export default ColumnLeft
