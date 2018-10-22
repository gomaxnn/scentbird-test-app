import React from 'react'
import { css } from 'styled-components'
import Responsive from 'react-responsive'

export const sizes = {
  desktop: 768,
}

export const Desktop = props => (
  <Responsive {...props} minWidth={sizes.desktop} />
)

export const Mobile = props => (
  <Responsive {...props} maxWidth={sizes.desktop - 1} />
)

const media = Object.keys(sizes).reduce((acc, key) => {
  acc[key] = (...args) => css`
    @media (min-width: ${sizes[key]}px) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export default media
