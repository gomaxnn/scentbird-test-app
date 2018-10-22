import styled from 'styled-components'

import Header from './Header'
import ColumnLeft from './ColumnLeft'
import ColumnRight from './ColumnRight'

import media from '../../utils/media'

const Container = styled.div`
  display: flex;
  margin-bottom: 30vw;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0 6.25vw;
  ${media.desktop`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto 100px;
    padding: 0;
  `}
`

Container.Header = Header
Container.ColumnLeft = ColumnLeft
Container.ColumnRight = ColumnRight

export default Container
