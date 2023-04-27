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
`

export const WelcomeTextWrapper = styled.div`
  display: flex;
  background-image: url(${ScrollIMG});
  background-size: cover;
  height: 50%;
  align-items: center;
  justify-content: center;`

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
    height: 89px;
    width: 236px;
    color: black;
    font-size: 14px;`

export const NameInput = styled.input`
    line-height: 26px;
    text-align: center;
    background-color: #ffea8ed4;
    width: 75%;
`