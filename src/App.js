import React from 'react'

import {
  SubscriptionType,
  ShippingAddress,
  BillingAddress,
  CreateAccount,
  ShippingInfo,
  CreditCard,
  PageTitle,
  BuyButton,
  Product,
  Layout,
  Logo,
} from './components'

import { Desktop, Mobile } from './utils/media'

const App = () => (
  <Layout>
    <Layout.Header>
      <Logo />
    </Layout.Header>
    <Layout.ColumnLeft>
      <Mobile>
        <PageTitle />
      </Mobile>
      <Product />
      <Desktop>
        <ShippingInfo />
      </Desktop>
    </Layout.ColumnLeft>
    <Layout.ColumnRight>
      <Desktop>
        <PageTitle />
      </Desktop>
      <CreateAccount />
      <SubscriptionType />
      <ShippingAddress />
      <BillingAddress />
      <CreditCard />
      <BuyButton />
      <Mobile>
        <ShippingInfo />
      </Mobile>
    </Layout.ColumnRight>
  </Layout>
)

export default App
