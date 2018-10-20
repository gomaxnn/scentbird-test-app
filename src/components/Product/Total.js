import styled from 'styled-components'

import { Text } from '../common'

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6.25vw;
  @media (min-width: 576px) {
    margin-bottom: 20px;
  }
`

const Item = styled(Text)`
  line-height: 1;
`

Total.Item = Item

export default Total
