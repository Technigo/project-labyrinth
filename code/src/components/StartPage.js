import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { labyrinth, fetchLabyrinthOne } from 'reducers/labyrinth'
import { StartPageWrapper, WelcomeText, StyledInput, NameForm, SendNameBtn } from 'Globalstyles'

export const StartPage = () => {
  const [nameInput, setNameInput] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const SetName = () => {
    dispatch(labyrinth.actions.setUserName(nameInput))
    dispatch(fetchLabyrinthOne())
  }

  return (
    <StartPageWrapper>
      <WelcomeText> Hi! Do you want to play a game? Pleas enter your name.</WelcomeText>
      <NameForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          id="name-input"
          value={nameInput}
          placeholder="write your name here...."
          onChange={(event) => setNameInput(event.target.value)} />
        <SendNameBtn type="submit" onClick={SetName} alt="start game" disabled={nameInput.length === 0}>
        Start the game
        </SendNameBtn>
      </NameForm>
    </StartPageWrapper>
  )
}

// ----------Styled Components---------
