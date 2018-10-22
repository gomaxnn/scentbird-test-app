import React from 'react'
import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

import media, { sizes } from '../../utils/media'

const modifierConfig = {
  fillFull: () => `
    width: 100%;
  `,
  fillFullDesktop: () => `
    @media (min-width: ${sizes.desktop}px) {
      width: 100%;
    }
  `,
  fillTwoThirds: () => `
    width: 66.6666%;
  `,
  fillTwoThirdsDesktop: () => `
    @media (min-width: ${sizes.desktop}px) {
      width: 66.6666%;
    }
  `,
  fillHalf: () => `
    width: 50%;
  `,
  fillHalfDesktop: () => `
    @media (min-width: ${sizes.desktop}px) {
      width: 50%;
    }
  `,
  fillThird: () => `
    width: 33.3333%;
  `,
  fillThirdDesktop: () => `
    @media (min-width: ${sizes.desktop}px) {
      width: 33.3333%;
    }
  `,
  fillFourth: () => `
    width: 25%;
  `,
  fillFourthDesktop: () => `
    @media (min-width: ${sizes.desktop}px) {
      width: 25%;
    }
  `,
  secureCode: () => `
    order: 2;
    @media (min-width: ${sizes.desktop}px) {
      order: 0;
    }
  `,
}

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 4.6875vw;
  padding: 0 2.5vw;
  ${media.desktop`
    margin-bottom: 20px;
    padding: 0 10px;
  `}
  ${applyStyleModifiers(modifierConfig)};
`

const FieldWrapper = (ComposedComponent, modifiers = []) => props => (
  <Wrapper modifiers={modifiers}>
    <ComposedComponent {...props} />
  </Wrapper>
)

export default FieldWrapper
