import React from 'react'
import styled from 'styled-components'

import { Section } from '../common'

import BuyBtn from './BuyBtn'

const SectionBlock = styled(Section.Block)`
  justify-content: flex-end;
`

const BuyButton = () => (
  <Section>
    <SectionBlock>
      <BuyBtn />
    </SectionBlock>
  </Section>
)

export default BuyButton
