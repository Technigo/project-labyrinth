import styled from 'styled-components/macro';
import rockIMG from '../assets/RockBTN.png';
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

export const WelcomeIMG = styled.img`
  position: absolute;
  height: 65%;
  width: 90%;
  max-width: 500px;

  @media (min-width: 850px) {
    font-size: 18px;
    width: 70%;
  }
`

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
  width: 100%;
  line-height: 26px;
  text-align: center;
  font-size: 12px;
  z-index: 1;

  @media (min-width: 800px) {
    font-size: 18px;
  }

  @media (min-width: 1200px) {
    font-size: 24px;
  }
`

export const WelcomeTextWrapper = styled.div`
  display: flex;
  height: 50%;
  width: 40%;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  z-index: 1;
  max-width: 360px;
  margin-top: 5%;
  
  @media (min-width: 850px) {
    height: 100%;
    width: 100%;

    max-height: 539px;
  }

  @media (max-height: 1000px) {
    max-height: 500px;
  }

  @media (max-height: 1200px) {
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
  justify-content: space-around;
  z-index: 1;`

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