import React from 'react'
import PropTypes from 'prop-types'

import { Section } from '../common'

import { Mobile, Desktop } from '../../utils/media'

import FirstNameField from './FirstName'
import LastNameField from './LastName'
import StreetAddressField from './StreetAddress'
import AptSuiteField from './AptSuite'
import ZipCodeField from './ZipCode'
import CityField from './City'
import StateField from './State'
import CountryField from './Country'
import PhoneField from './Phone'
import MyBillingAddressField from './MyBillingAddress'

const ShippingAddress = ({ hasCountry }) => (
  <Section>
    <Section.Title>Shipping address</Section.Title>
    <Section.Block>
      <FirstNameField />
      <LastNameField />
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
      <PhoneField />
      <MyBillingAddressField />
    </Section.Block>
  </Section>
)

ShippingAddress.propTypes = {
  hasCountry: PropTypes.bool,
}

export default ShippingAddress
