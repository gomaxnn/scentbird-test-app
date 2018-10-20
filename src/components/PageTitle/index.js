import React from 'react'
import PropTypes from 'prop-types'

import Heading from './Heading'

const PageTitle = ({ title, text }) => (
  <Heading>
    <Heading.Title>{title}</Heading.Title>
    <Heading.Description>{text}</Heading.Description>
  </Heading>
)

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default PageTitle
