import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Image } from '../../common'

import media from '../../../utils/media'

const Container = styled.div`
  margin-bottom: 4.5vw;
  padding: 12vw 0;
  border-bottom: 1px solid #E6E6E6;
  text-align: center;
  font-size: 0;
  ${media.desktop`
    margin-bottom: 15px;
    padding: 40px 0;
  `}
`

const StyledImage = styled(Image)`
  height: 48vw;
  ${media.desktop`
    height: 285px;
  `}
`

const Showcase = ({ imageUrl }) => (
  <Container>
    <StyledImage src={imageUrl} alt="" />
  </Container>
)

Showcase.propTypes = {
  imageUrl: PropTypes.string.isRequired,
}

export default Showcase
