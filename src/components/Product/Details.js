import styled from 'styled-components'

import { Text } from '../common'

const Details = styled.div`
  margin-bottom: 6.25vw;
  padding: 1.5vw 0;
  border-bottom: 1px solid #E6E6E6;
  @media (min-width: 576px) {
    margin-bottom: 20px;
    padding: 5px 0;
  }
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4.5vw;
  @media (min-width: 576px) {
    margin-bottom: 15px;
  }
`

const Item = styled(Text)`
  font-size: 4.375vw;
  line-height: 1;
  @media (min-width: 576px) {
    font-size: 14px;
  }
`

Details.Row = Row
Details.Item = Item

export default Details
