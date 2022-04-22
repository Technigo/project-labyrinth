import React, {useState} from 'react'
import background from '../assets/StartScreenImage.jpg';
import { useDispatch } from "react-redux";
import styled from 'styled-components/macro'

import game, { generateGame } from "../reducers/game";

const devices = {
  mobile: '(min-width: 375px)',
  tablet: '(min-width: 768px)',
  desktop: '(min-width: 1024px)'
}

const BackgroundPicture = styled.main `
background-image: url(${background});
background-size: cover;
`
const FormContainer = styled.form`
 height: 100vh;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
`
const StartPageInfo = styled.div`
background-color: rgba(0, 0, 0, 0.7);
min-height: 220px;
max-width: 585px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0 15px 30px 15px;

@media ${devices.tablet}{
  
 }
`
const GameTitle = styled.h3`
  font-size: 20px;
  text-transform: uppercase;
`
const Subtitle = styled.p` 
  font-size: 16px;
  margin-top: 5px;
`
const SubmitButton = styled.button`
  padding: 8px;
  font-size: 16px;
  font-family: 'Inconsolata', monospace, 'Open Sans', sans-serif;
  background-color: #E86A92;

  @media ${devices.desktop} {
    cursor: pointer;
`

const InputText = styled.input`
font-family: 'Inconsolata', monospace, 'Open Sans', sans-serif;
font-size: 16px;
padding: 5px; 
width: 200px;
margin-bottom:20px;
text-align: center;
`

const StartScreen = () => {
    const [username, setUserName] = useState('')

    const dispatch = useDispatch()

    const onUserSet = () => {
        dispatch(game.actions.setUsername(username))
        dispatch(generateGame(username))
            }

    const preventDefault = (event) => {
        event.preventDefault();
      };
      
    return(
     <BackgroundPicture>
        <FormContainer onSubmit={preventDefault}>
          <StartPageInfo>
            <GameTitle>Welcome to the labyrinth!</GameTitle>
            <Subtitle>Write your username to start the game</Subtitle>
            <InputText
            type='text'
            placeholder='Username here..'
            value={username}
            onChange={(event) => setUserName(event.target.value)}

             />
             <SubmitButton type="submit" onClick={onUserSet}> Let's play!
             </SubmitButton>
          </StartPageInfo>
        </FormContainer>
      </BackgroundPicture>
    )
}

export default StartScreen