import React, {useState} from 'react'
import background from '../assets/StartScreenImage.jpg';
import { useDispatch } from "react-redux";
import styled from 'styled-components/macro'

import game, { generateGame } from "../reducers/game";

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
width: 50%;
height: 40%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding-bottom: 30px;
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
  background-color: #99D17B;
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