/* eslint-disable object-shorthand */
/* eslint-disable max-len */
import { CardContainer, StyledButton } from 'GlobalStyles';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGameStart, maingame } from 'reducers/maingame';
import styled from 'styled-components';
import { GamePage } from './GamePage';
import { LastPage } from './LastPage';
import mazePicture from '../images/simple-maze.png'

export const StartPage = () => {
  const [usernameInput, setUserNameInput] = useState('')
  const dispatch = useDispatch();
  const globalGameProps = useSelector((store) => store.maingame.gameProps.coordinates);

  const onFormSubmit = (event) => {
    event.preventDefault()
    dispatch(maingame.actions.setUsername(usernameInput))
    dispatch(fetchGameStart())
  }

  // Renders the GamePage in the browser if the gameProps is populated with an object with properties.
  if (globalGameProps === '0,0' || globalGameProps === '1,0' || globalGameProps === '1,1' || globalGameProps === '0,1' || globalGameProps === '0,2' || globalGameProps === '0,3') {
    return <GamePage />
  } else if (globalGameProps === '1,3') {
    return <LastPage />
  }

  return (
    <CardContainerStart>
      <WelcomeTitle> The Amazing Maze!</WelcomeTitle>
      <Info><Bold>Greetings brave one.</Bold> The key to succeed in this maze is to not walk in your own footsteps - always keep moving in a new direction. If you wish to try the maze again, please choose a new alias. Best of luck.</Info>
      <MazePic src={mazePicture} alt="maze" />
      <UserNameInput> Enter your name:</UserNameInput>
      <form onSubmit={onFormSubmit}>
        <UserNameInputField
        // This button will do our initial fetch to fetch the first game instructions from
        // the backend
          type="text"
          onChange={(event) => setUserNameInput(event.target.value)}
          id="username-input"
          placeholder="Name"
          value={usernameInput} />
      </form>
      <StyledButton onClick={onFormSubmit} type="submit">Start</StyledButton>

    </CardContainerStart>
  )
}

const Bold = styled.span`
font-weight: 600;`

const Info = styled.div`
font-size: 17px;
padding: 10px;
margin: 0px 10px 20px 10px;

@media (min-width: 668px) {
  width: 70%;
}
`

const CardContainerStart = styled(CardContainer)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
`

const UserNameInput = styled.p`
font-size:20px;
font-family: 'Montserrat', sans-serif;
`

const UserNameInputField = styled.input`
  margin-bottom:20px;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  box-shadow: 0 0 10px #90ac8e;

  @media (min-width: 668px) {
    width: 300px;
  }
`
const WelcomeTitle = styled.h1`
  font-size: 40px;
  font-family: 'Caveat', cursive;
  margin-bottom: 30px;
  color: #384238;
  animation: flicker 1.5s infinite alternate;
  @keyframes flicker {
    
    0%, 18%, 22%, 25%, 53%, 57%, 100% {
  text-shadow:
      0 0 42px #436e43,
      0 0 82px #436e43,
      0 0 92px #436e43,
      0 0 90px #436e43,
      0 0 120px #436e43;
    }
  
  20%, 24%, 55% {        
      text-shadow: none;
  } 
}
  @media (min-width: 668px) {
    font-size: 55px;
  }
`

const MazePic = styled.img`
width: 15%;

@media (max-width: 1027px) {
  width: 25%;
}
`

/* The start game button triggers the first fetch thunk to fetch the first set of instructions
received from the response when doing the first POST request. The current username is sent as a prop
so we can send that data on our POST request */

/*
East
North
West
North
North
East
*/
