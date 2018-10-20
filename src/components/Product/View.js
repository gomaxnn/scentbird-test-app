import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Link } from '../common'

import Showcase from './Showcase'
import Details from './Details'
import Total from './Total'
import Coupon from './Coupon'

const Container = styled.div`
  margin-bottom: 9.25vw;
  @media (min-width: 576px) {
    padding: 0 30px;
    border: 1px solid #E6E6E6;
  }
`

const Product = ({
  imageUrl,
  subscription,
  shipping,
  tax,
  discount,
  creditBalance,
  credit,
  total,
}) => (
  <Container>
    <Showcase>
      <Showcase.Image src={imageUrl} />
    </Showcase>
    <Details>
      <Details.Row>
        <Details.Item>Monthly subscription</Details.Item>
        <Details.Item>{subscription}</Details.Item>
      </Details.Row>
      <Details.Row>
        <Details.Item>Shipping</Details.Item>
        <Details.Item modifiers={['uppercase']}>
          {shipping}
        </Details.Item>
      </Details.Row>
      <Details.Row>
        <Details.Item>Tax</Details.Item>
        <Details.Item>{tax}</Details.Item>
      </Details.Row>
      <Details.Row>
        <Details.Item>Discount</Details.Item>
        <Details.Item modifiers={['colorPink']}>
          {discount}
        </Details.Item>
      </Details.Row>
      <Details.Row>
        <Details.Item>
          Credit (Balance {creditBalance})
        </Details.Item>
        <Details.Item>{credit}</Details.Item>
      </Details.Row>
    </Details>
    <Total>
      <Total.Item modifiers={['uppercase']}>Total</Total.Item>
      <Total.Item>{total}</Total.Item>
    </Total>
    <Coupon>
      Have a <Link href="#" modifiers={['dashed']}>coupon code</Link>?
    </Coupon>
  </Container>
)

Product.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  subscription: PropTypes.string.isRequired,
  shipping: PropTypes.string.isRequired,
  tax: PropTypes.string.isRequired,
  discount: PropTypes.string.isRequired,
  creditBalance: PropTypes.string.isRequired,
  credit: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
}

export default Product
