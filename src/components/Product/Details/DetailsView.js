import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Text } from '../../common'

import media from '../../../utils/media'

const Container = styled.div`
  margin-bottom: 6.25vw;
  padding: 1.5vw 0;
  border-bottom: 1px solid #E6E6E6;
  ${media.desktop`
    margin-bottom: 20px;
    padding: 5px 0;
  `}
`

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4.5vw;
  ${media.desktop`
    margin-bottom: 15px;
  `}
`

const Item = styled(Text)`
  font-size: 4.375vw;
  line-height: 1;
  ${media.desktop`
    font-size: 14px;
  `}
`

const Details = ({
  creditBalance,
  subscription,
  shipping,
  discount,
  credit,
  total,
  tax,
}) => (
  <Container>
    <Row>
      <Item>Monthly subscription</Item>
      <Item>{subscription}</Item>
    </Row>
    <Row>
      <Item>Shipping</Item>
      <Item modifiers={['uppercase']}>
        {shipping}
      </Item>
    </Row>
    <Row>
      <Item>Tax</Item>
      <Item>{tax}</Item>
    </Row>
    <Row>
      <Item>Discount</Item>
      <Item modifiers={['colorPink']}>
        {discount}
      </Item>
    </Row>
    <Row>
      <Item>
        Credit (Balance {creditBalance})
      </Item>
      <Item>{credit}</Item>
    </Row>
  </Container>
)

Details.propTypes = {
  subscription: PropTypes.string.isRequired,
  shipping: PropTypes.string.isRequired,
  tax: PropTypes.string.isRequired,
  discount: PropTypes.string.isRequired,
  creditBalance: PropTypes.string.isRequired,
  credit: PropTypes.string.isRequired,
}

export default Details
