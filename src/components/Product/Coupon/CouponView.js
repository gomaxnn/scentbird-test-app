import React from 'react'
import styled from 'styled-components'

import { Text, Link } from '../../common'

import media from '../../../utils/media'

const StyledText = styled(Text)`
  line-height: 1;
  padding: 2.5vw 0;
  ${media.desktop`
    margin-bottom: 30px;
    padding: 10px 0;
  `}
`

const Coupon = () => (
  <StyledText>
    Have a <Link href="#" modifiers={['dashed']}>coupon code</Link>?
  </StyledText>
)

export default Coupon
