import React from 'react'
import styled from 'styled-components'

import image from './shipping.png'

import { Image, Text } from '../common'

import media from '../../utils/media'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 -1.625vw;
  ${media.desktop`
    flex-direction: column-reverse;
    margin: 0;
  `}
`

const StyledText = styled(Text)`
  margin-bottom: 9.5vw;
  ${media.desktop`
    margin-bottom: 0;
    line-height: 1.5;
    font-size: 14px;
  `}
`

const StyledImage = styled(Image)`
  display: block;
  width: 100%;
  ${media.desktop`
    margin-bottom: 20px;
  `}
`

const ShippingInfo = () => (
  <Container>
    <StyledText>
      You will receive an email confirmation when recipient accepts your gift. Scentbird ships between the 15th and the 18th of every month. Recipient will receive an email confirmation of shipment every month. Please allow 5-7 days for delivery.
    </StyledText>
    <StyledImage src={image} alt="" />
  </Container>
)

export default ShippingInfo
