import React from 'react'
import PropTypes from 'prop-types'

import { Section } from '../common'

import { Mobile, Desktop } from '../../utils/media'

import StreetAddressField from './StreetAddress'
import AptSuiteField from './AptSuite'
import ZipCodeField from './ZipCode'
import CityField from './City'
import StateField from './State'
import CountryField from './Country'

const BillingAddress = ({
  hasCountry,
  isVisible,
}) => (
  <div>
    {isVisible && (
      <Section>
        <Section.Title>Billing address</Section.Title>
        <Section.Block>
          <StreetAddressField />
          <AptSuiteField />
          <ZipCodeField />
          <Mobile>
            {hasCountry && <CityField />}
            {hasCountry && <StateField />}
          </Mobile>
          <Desktop>
            <CityField />
            <StateField />
          </Desktop>
          <CountryField />
        </Section.Block>
      </Section>
    )}
  </div>
)

BillingAddress.propTypes = {
  hasCountry: PropTypes.bool,
  isVisible: PropTypes.bool,
}

export default BillingAddress
