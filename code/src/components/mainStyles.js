/* eslint-disable linebreak-style */
import styled from 'styled-components/macro';

//  background-color: #ffe8b7;

export const OuterWrapper = styled.div`
  background-color: #F4D288;
  padding: 2% 5%;
`

export const InnerWrapper = styled.div`
  background-color: #18211E;
  overflow-x: hidden;
  border: double gray;
  border-radius: 5px;
  width: 90%;
  max-width: 900px;
  min-height: 50vh;
  margin: 0 auto;
  padding: 5% 5%;

  @media (min-width: 1024px) {
    hight: 60%;
   }
`
