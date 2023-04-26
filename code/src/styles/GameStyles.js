import styled from 'styled-components/macro';
import { Devices } from './GlobalStyles';

export const GameWrapper = styled.div`
/* background-color: #cdc5bb; */
  overflow-x: hidden;
  border: double gray;
  border-radius: 5px;
  max-width: 800px;
  min-height: 20vh;
  margin: 0 auto;
  padding-top: 5px;
  box-shadow: 1px 1px 1px 1px grey;
  background-color: rgba(255, 255, 255, 0.063);
  backdrop-filter: blur(30px);
  --webkit-backdrop-filter: blur(30px);

  @media ${Devices.mobile} {
  max-width: 400px;
  max-height: 75vh;
  }
`

export const Th1 = styled.h1`
font-family: 'Special Elite', cursive;
font-size: 1.5em;
color: white;

@media ${Devices.mobile} {
  font-size: 1.3em;

}
`
export const GameP = styled.p`
font-family: 'Special Elite', cursive;
font-size: 1.3em;
color: black;
line-height: 1.4;

@media ${Devices.mobile} {
  font-size: 14px;
}
`