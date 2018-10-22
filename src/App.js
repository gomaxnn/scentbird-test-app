import React from 'react'

import {
  Layout,
  Logo,
  PageTitle,
  Product,
  CreateAccount,
  SubscriptionType,
  ShippingAddress,
  BillingAddress,
  CreditCard,
  BuyButton,
} from './components'

import { Desktop, Mobile } from './utils/media'

const App = () => (
  <Layout>
    <Layout.Header>
      <Logo />
    </Layout.Header>
    <Layout.ColumnLeft>
      <Mobile>
        <PageTitle
          title="Monthly Subscription"
          text="Billed monthly. Renews automatically, cancel any time. Free shipping."
        />
      </Mobile>
      <Product />
    </Layout.ColumnLeft>
    <Layout.ColumnRight>
      <Desktop>
        <PageTitle
          title="Month-to-month Subscription"
          text="Billed monthly. Renews automatically, cancel any time. Free shipping."
        />
      </Desktop>
      <CreateAccount />
      <SubscriptionType />
      <ShippingAddress />
      <BillingAddress />
      <CreditCard />
      <BuyButton />
    </Layout.ColumnRight>
  </Layout>
)

export default App
