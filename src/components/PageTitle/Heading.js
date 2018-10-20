import styled from 'styled-components'

import { Text } from '../common'

const Title = styled(Text)`
  margin-bottom: 3vw;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 6.875vw;
  @media (min-width: 576px) {
    margin-bottom: 8px;
    font-size: 36px;
  }
`

const Description = styled(Text)`
  line-height: 1.2;
  color: #FF408E;
`

const Heading = styled.div`
  margin-bottom: 2vw;
  text-align: center;
  @media (min-width: 576px) {
    margin-bottom: 40px;
    text-align: left;
  }
`

Heading.Title = Title
Heading.Description = Description

export default Heading
