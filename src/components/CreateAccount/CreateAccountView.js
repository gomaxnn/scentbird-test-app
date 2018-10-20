import React from 'react'

import { Section } from '../common'

import EmailField from './Email'
import PasswordField from './Password'

const CreateAccount = () => (
  <Section>
    <Section.Title>Create account</Section.Title>
    <Section.Block>
      <EmailField />
      <PasswordField />
    </Section.Block>
  </Section>
)

export default CreateAccount
