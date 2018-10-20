import styled from 'styled-components'

import { Text } from '../common'

const Coupon = styled(Text)`
  line-height: 1;
  padding: 2.5vw 0;
  @media (min-width: 576px) {
    margin-bottom: 30px;
    padding: 10px 0;
  }
`

export default Coupon
