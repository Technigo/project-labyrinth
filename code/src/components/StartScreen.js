import React, {useState} from 'react'
import background from '../assets/StartScreenPicture.jpg';
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
 background-color: #FFF;
 padding: 30px;
`
const GameTitle = styled.h3`
  font-size: 20px;
  text-transform: uppercase;
`
const Subtitle = styled.p` 
  font-size: 16px;
`
const SubmitButton = styled.button`
  margin-left: 15px;
  padding: 8px;
  font-size: 16px;
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
            <input
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