import styled from 'styled-components'

import { Text } from '../../common'

import encryption from './encryption.svg'

const SubTitle = styled(Text)`
  margin: 0 2.5vw 4.6875vw;
  padding-left: 10vw;
  line-height: 9.5vw;
  background-image: url(${encryption});
  background-repeat: no-repeat;
  background-size: auto 100%;
  font-weight: 600;
  font-size: 3.75vw;
  color: #74bb2c;
  @media (min-width: 576px) {
    margin: 0 10px 20px;
    padding-left: 38px;
    line-height: 35px;
    font-size: 14px;
  }
`

export default SubTitle
