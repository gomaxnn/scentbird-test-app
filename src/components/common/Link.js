import styled from 'styled-components'
import { applyStyleModifiers } from 'styled-components-modifiers'

const modifierConfig = {
  dashed: () => `
    border-bottom-style: dashed;
  `,
}

const Link = styled.a`
  display: inline-block;
  line-height: 1;
  text-decoration: none;
  border-bottom: 1px solid #FF408E;
  color: #FF408E;
  &:hover {
    color: #000000;
    border-color: #000000;
  }
  ${applyStyleModifiers(modifierConfig)};
`

export default Link
