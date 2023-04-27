import styled from 'styled-components/macro';
import { Devices } from './GlobalStyles';

export const GameWrapper = styled.div`
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
/* background-color: #cdc5bb;
  overflow-x: hidden;
  border: double gray;
  border-radius: 5px;
  max-width: 800px;
  min-height: 20vh;
  margin: 0 auto;
  padding-top: 5px;
  box-shadow: 1px 1px 1px 1px grey; */

  @media ${Devices.mobile} {
  max-width: 200px;
  max-height: 50vh;
  }
`
export const InnerWrapper = styled.main`
  height: 60vh; 
  width: 100vw;
  padding: 20px;
  border-radius: 10px;
  background-color: rgb(140,122,103);
  backdrop-filter: blur(12px);
  --webkit-backdrop-filter: blur(12px);

  @media (min-width: 768px) {
    margin: 0 auto;
    max-width: 500px;
  }
`

export const Th1 = styled.h1`
margin: 10px;
font-family: 'Special Elite', cursive;
font-size: 1.2em;
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
export const DirectionContainer = styled.div`
margin-top: 10px;
display: flex;
flex-direction: column;
justify-content: center;
margin-bottom: 20px;
gap: 8px;
`;

export const GameBtn = styled.button`
  width: 120px;
  margin: 10px auto;
  transition: all 0.3s ease;
  border-radius: 10px;
  padding: 5px;
  cursor: pointer;
  border: none;
  background-color: #b87209;
  color: #fff;
  :hover {
    background-color: black;
    color: orange;
    transform: scale(1.1, 1.1);
  }
`;