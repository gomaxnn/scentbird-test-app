import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

import media from '../../utils/media'

const modifierConfig = {
  uppercase: () => `
    text-transform: uppercase;
  `,

  colorPink: () => `
    color: #FF408E;
  `,
}

const Text = styled.div`
  font-size: 5vw;
  color: #000000;
  ${media.desktop`
    font-size: 16px;
  `}
  ${applyStyleModifiers(modifierConfig)};
`

export default Text
