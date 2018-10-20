import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Logo from './Logo'

const Container = styled.div`
  width: 100%;
  margin-bottom: 2.125vw;
  padding: 5.625vw;
  @media (min-width: 576px) {
    margin-bottom: 26px;
    padding: 18px 0;
  }
`

const Header = ({ linkUrl, linkTitle, imageSrc }) => (
  <Container>
    <Logo>
      <Logo.Link href={linkUrl} title={linkTitle}>
        <Logo.Image src={imageSrc} />
      </Logo.Link>
    </Logo>
  </Container>
)

Header.propTypes = {
  linkUrl: PropTypes.string.isRequired,
  linkTitle: PropTypes.string,
  imageSrc: PropTypes.string.isRequired,
}

export default Header
