import React from 'react'
import logo from './logo.svg'

import {
  Layout,
  Header,
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
    <Header
      linkUrl="/"
      linkTitle="Scentbird"
      imageSrc={logo}
    />
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
