/* eslint-disable max-len */
import { CardContainer, StyledButton } from 'GlobalStyles';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGameStart, maingame } from 'reducers/maingame';
import styled from 'styled-components';
import { GamePage } from './GamePage';
import { LastPage } from './LastPage';

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
      <WelcomeTitle> Welcome to the Labyrinth!</WelcomeTitle>
      <UserNameInput> Choose your username:</UserNameInput>
      <form onSubmit={onFormSubmit}>
        <UserNameInputField
        // This button will do our initial fetch to fetch the first game instructions from
        // the backend
          type="text"
          onChange={(event) => setUserNameInput(event.target.value)}
          id="username-input"
          placeholder="Username"
          value={usernameInput} />
        <StyledButton onClick={onFormSubmit} type="submit">Start</StyledButton>
      </form>
    </CardContainerStart>
  )
}

const CardContainerStart = styled(CardContainer)`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center
`

const UserNameInput = styled.p`

`

const UserNameInputField = styled.input`
  margin-right:10px;
`
const WelcomeTitle = styled.h1`
font-size: 25px;`

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
