import React from 'react'
import styled from 'styled-components'

import { Section } from '../common'

import SubTitle from './SubTitle'
import CardNumberField from './CardNumber'
import ExpMonthField from './ExpMonth'
import ExpYearField from './ExpYear'
import SecureCodeField from './SecureCode'

const SectionBlock = styled(Section.Block)`
  align-items: flex-start;
  padding-top: 4.6875vw;
  background-color: #fafafa;
  border: 1px solid #e6e6e6;
  border-left: 0;
  border-right: 0;
  @media (min-width: 576px) {
    margin-left: 0;
    margin-right: 0;
    padding: 20px 10px 0;
    border: 1px solid #e6e6e6;
  }
`

const CreditCard = () => (
  <Section>
    <Section.Title>Secure credit card payment</Section.Title>
    <SectionBlock>
      <SubTitle modifiers={['uppercase']}>
        128-bit encryption. You're safe
      </SubTitle>
      <CardNumberField />
      <SecureCodeField />
      <ExpMonthField />
      <ExpYearField />
    </SectionBlock>
  </Section>
)

export default CreditCard
