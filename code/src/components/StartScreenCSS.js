import styled from 'styled-components/macro';
import rockIMG from '../assets/RockBTN.png';
import ScrollIMG from '../assets/scroll.png'
import orbIMG from '../assets/The Orb in the Wall (128x64).png'

export const StartScreenWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 92vh;`

export const GameRestartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;`

export const RestartWrapper = styled.div`
  height: 0px;
  display: flex;
  justify-content: flex-end;`

export const RestartBtn = styled.button`
  background-image: url(${orbIMG});
  background-color: transparent;
  border: none;
  background-size: cover;
  width: 45px;
  height: 102px;
  rotate: 90deg;
  position: absolute;
  bottom: -19px;
  right: 46px;
  box-shadow: none;

  &:hover {
    animation: pulsate 1s ease-in-out infinite;
  }

  &:hover::before {
    content: "You sense that touching this orb will return you to a place where your story is yet to be written"; /* Tooltip text */
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translateX(-50%) rotate(-90deg);
    background-color: rgba(255, 255, 255, 0.75);
    color: black;
    padding: 5px;
    border-radius: 5px;
    font-size: 12px;
  }

  @keyframes pulsate {
    0% {
      box-shadow: 0 0 15px 2px rgba(139, 0, 0, 2.0);
    }
    50% {
      box-shadow: 0 0 15px 7px rgba(139, 0, 0, 2.0);
    }
    100% {
      box-shadow: 0 0 15px 2px rgba(139, 0, 0, 2.0);
    }
  }
`;

export const WelcomeText = styled.p`
  width: 60%;
  line-height: 26px;
  text-align: center;
  font-size: 12px;

  @media (min-width: 850px) {
    font-size: 18px;
  }
`

export const WelcomeTextWrapper = styled.div`
  display: flex;
  background-image: url(${ScrollIMG});
  background-size: cover;
  height: 400px;
  width: 330px;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  
  @media (min-width: 850px) {
    height: 100%;
    width: 100%;
    max-width: 450px;
    max-height: 539px;
  }

  @media (max-height: 1000px) {
    max-width: 400px;
    max-height: 500px;
  }

  @media (max-height: 1200px) {
    max-width: 400px;
    max-height: 500px;
  }

  @media (max-height: 1200px) and (max-width: 1400px) {
    max-height: 450px;
    max-width: 300px;
  }
`

export const NameForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30%;
  justify-content: space-around;`

export const Btn = styled.button`
    background-image: url(${rockIMG});
    background-color: transparent;
    border: none;
    background-size: cover;
    height: 45px;
    width: 124px;
    color: black;
    font-size: 8px;
    
    @media (min-width: 850px) {
    height: 75px;
    width: 184px;
    font-size: 18px;
  }`

export const NameInput = styled.input`
  line-height: 26px;
  text-align: center;
  background-color: rgba(255, 234, 142, 0.83);
  width: 220px;
  height: 40px;

  @media (min-width: 850px) {
  font-size: 18px;
  }
`