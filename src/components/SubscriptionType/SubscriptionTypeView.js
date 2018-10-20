import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import {
  CheckboxImage,
  Section,
} from '../common'

import imageFemale from './female.svg'
import imageMale from './male.svg'

const SectionBlock = styled(Section.Block)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 85vw;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 576px) {
    max-width: 480px;
  }
`

const FieldError = styled.div`
  width: 100%;
  padding-top: 1.5vw;
  text-align: center;
  font-size: 3.75vw;
  color: #F00;
  @media (min-width: 576px) {
    padding-top: 5px;
    font-size: 12px;
  }
`

const SubscriptionType = ({
  forWomen,
  forMen,
  switchToWomen,
  switchToMen,
  error,
}) => (
  <Section>
    <Section.Title>Choose your subscription type</Section.Title>
    <SectionBlock>
      <CheckboxImage
        imageUrl={imageFemale}
        checked={forWomen}
        onClick={switchToWomen}
      >
        For women
      </CheckboxImage>
      <CheckboxImage
        imageUrl={imageMale}
        checked={forMen}
        onClick={switchToMen}
      >
        For men
      </CheckboxImage>
      {error && (
        <FieldError>{error}</FieldError>
      )}
    </SectionBlock>
  </Section>
)

SubscriptionType.propTypes = {
  forWomen: PropTypes.bool.isRequired,
  forMen: PropTypes.bool.isRequired,
  switchToWomen: PropTypes.func.isRequired,
  switchToMen: PropTypes.func.isRequired,
  error: PropTypes.string,
}

export default SubscriptionType
