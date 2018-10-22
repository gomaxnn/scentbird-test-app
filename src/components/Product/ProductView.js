import React from 'react'
import styled from 'styled-components'

import media from '../../utils/media'

import Showcase from './Showcase'
import Details from './Details'
import Total from './Total'
import Coupon from './Coupon'

const Container = styled.div`
  margin-bottom: 9.25vw;
  ${media.desktop`
    margin-bottom: 25px;
    padding: 0 30px;
    border: 1px solid #E6E6E6;
  `}
`

const Product = () => (
  <Container>
    <Showcase />
    <Details />
    <Total />
    <Coupon />
  </Container>
)

export default Product
