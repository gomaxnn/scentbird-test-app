import styled from 'styled-components'

import { Image } from '../common'

const ShowcaseImage = styled(Image)`
  height: 48vw;
  @media (min-width: 576px) {
    height: 285px;
  }
`

const Showcase = styled.div`
  margin-bottom: 4.5vw;
  padding: 12vw 0;
  border-bottom: 1px solid #E6E6E6;
  text-align: center;
  font-size: 0;
  @media (min-width: 576px) {
    margin-bottom: 15px;
    padding: 40px 0;
  }
`

Showcase.Image = ShowcaseImage

export default Showcase
