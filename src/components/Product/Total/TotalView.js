import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Text } from '../../common'

import media from '../../../utils/media'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6.25vw;
  ${media.desktop`
    margin-bottom: 20px;
  `}
`

const Item = styled(Text)`
  line-height: 1;
`

const Total = ({ total }) => (
  <Container>
    <Item modifiers={['uppercase']}>Total</Item>
    <Item>{total}</Item>
  </Container>
)

Total.propTypes = {
  total: PropTypes.string.isRequired,
}

export default Total
