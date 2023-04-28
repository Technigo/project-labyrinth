import styled from 'styled-components/macro';
import img from '../assets/planet.jpg'
import { Devices } from './GlobalStyles';

export const InnerWrapper = styled.main`
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  animation: fade-in 1s ease-in forwards;

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
export const InfoText = styled.p`
font-family: 'Special Elite';
font-size: 1em;
color: whitesmoke;
line-height: 1.4;
text-align:center;

@media ${Devices.mobile} {
  font-size: 14px;
};
`

export const HistoryContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
gap: 1rem;
flex-wrap: wrap;
`

export const ArrowText = styled.p`
font-family: 'Special Elite';
font-size: 1rem;
color: whitesmoke;
line-height: 1.4;
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
`;

export const ActionContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding:10px;
gap: 30px;
min-width: 50%;
max-width: 50%;
`

export const GameBtn = styled.button`
  /* min-width: 80px;
  max-width: 80px; */
  transition: all 0.3s ease;
  border-radius: 10px;
  padding: 15px 18px;
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
width: 100vw;
height: 100vh;
top: 0;
left: 0;
z-index: 1;
background-image: url(${img});
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-color: black;
position: absolute;

@media ${Devices.mobile} {
height: 50vh;
width: 50%;
}
`

export const RestartBtn = styled.button`
margin: 0;
font-size: 1rem;
padding: 9px 12px;
border-radius: 25px 0 0 0;
background-color: #241a0c;
color: whitesmoke;
cursor: pointer;
animation: fade-in 1s ease-in forwards;

:hover {
    background-color: black;
    color: orange;
    transform: scale(1.1, 1.1);
  }
`