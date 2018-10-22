import styled from 'styled-components'

import media from '../../utils/media'

const Section = styled.div`
  margin-bottom: 9.375vw;
  ${media.desktop`
    margin-bottom: 40px;
  `}
`

const Title = styled.div`
  margin-bottom: 7.75vw;
  text-align: center;
  font-size: 6.25vw;
  ${media.desktop`
    margin-bottom: 20px;
    text-align: left;
    font-size: 24px;
  `}
`

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 -6.25vw;
  padding: 0 2.1875vw;
  ${media.desktop`
    margin: 0 -10px;
    padding: 0;
  `}
`

Section.Title = Title
Section.Block = Block

export default Section
