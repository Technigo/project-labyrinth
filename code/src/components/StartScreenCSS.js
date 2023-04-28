import styled from 'styled-components/macro';
import rockIMG from '../assets/RockBTN.png';
import ScrollIMG from '../assets/scroll.png'

export const StartScreenWrapper = styled.div`
  padding-top: 140px;
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;`

export const WelcomeText = styled.p`
  width: 60%;
  line-height: 30px;
  text-align: center;
`

export const WelcomeTextWrapper = styled.div`
  display: flex;
  background-image: url(${ScrollIMG});
  background-size: cover;
  height: 50%;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  max-width: 302px;`

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
    height: 98px;
    width: 253px;
    color: black;
    font-size: 14px;`

export const NameInput = styled.input`
  line-height: 26px;
  text-align: center;
  background-color: rgba(255, 234, 142, 0.83);
  width: 220px;
  height: 40px;
`

export const RestartWrapper = styled.div`
`