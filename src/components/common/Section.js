import styled from 'styled-components'

const Section = styled.div`
  // padding: 4.6875vw 0;
  // margin-bottom: 4.6875vw;
  margin-bottom: 9.375vw;
  @media (min-width: 576px) {
    // padding: 20px 0;
    margin-bottom: 40px;
  }
`

const Title = styled.div`
  margin-bottom: 7.75vw;
  text-align: center;
  font-size: 6.25vw;
  @media (min-width: 576px) {
    margin-bottom: 20px;
    text-align: left;
    font-size: 24px;
  }
`

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 0 -6.25vw;
  padding: 0 2.1875vw;
  @media (min-width: 576px) {
    margin: 0 -10px;
    padding: 0;
  }
`

Section.Title = Title
Section.Block = Block

export default Section
