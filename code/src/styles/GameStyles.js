import styled from 'styled-components/macro';
import img from '../assets/maze.jpg'
import { Devices } from './GlobalStyles';

export const GameWrapper = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat, repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: grey;
`;
export const InnerWrapper = styled.main`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
line-height: 1.2;

/* [data-typeit-id='8565706'] .ti-cursor{
  display:none;
} */

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
width: fit-content;
margin-top: 10px;
padding: 10px;
display: flex;
flex-direction: row;
justify-content: space-around;
margin-bottom: 20px;
gap: 10px;

/* border:solid red; */
`;

export const ActionContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding:10px;
gap: 30px;
min-width: 50%;
max-width: 50%;

/* border:solid green; */
`

export const GameBtn = styled.button`
  min-width: 80px;
  max-width: 80px;
  transition: all 0.3s ease;
  border-radius: 10px;
  padding: 15px 5px;
  align-self: center;
  cursor: pointer;
  border: none;
  background-color: #b87209;
  color: #fff;
  font-size: 1rem;
  :hover {
    background-color: black;
    color: orange;
    transform: scale(1.1, 1.1);
  }
`;

export const AnimationContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100vh;
background-color: black;
`