import React from 'react'
import styled from 'styled-components'

import { Text } from '../common'

import media, { Mobile, Desktop } from '../../utils/media'

const Title = styled(Text)`
  margin-bottom: 3vw;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 6.875vw;
  ${media.desktop`
    margin-bottom: 8px;
    font-size: 36px;
  `}
`

const Description = styled(Text)`
  line-height: 1.2;
  color: #FF408E;
`

const Container = styled.div`
  margin-bottom: 2vw;
  text-align: center;
  ${media.desktop`
    margin-bottom: 40px;
    text-align: left;
  `}
`

const PageTitle = () => (
  <Container>
    <Title>
      <Mobile>Monthly Subscription</Mobile>
      <Desktop>Month-to-month Subscription</Desktop>
    </Title>
    <Description>
      Billed monthly. Renews automatically, cancel any time. Free shipping.
    </Description>
  </Container>
)

export default PageTitle
