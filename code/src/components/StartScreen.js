import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { labyrinth, gameProgress } from '../reducers/labyrinth';
import Game from './Game';
import { StartScreenWrapper, WelcomeText, WelcomeTextWrapper, NameForm, Btn, NameInput, GameRestartWrapper, WelcomeIMG } from './StartScreenCSS';
import { Restart } from './Restart';
import ScrollIMG from '../assets/scroll.png'

const StartScreen = () => {
  const dispatch = useDispatch()

  const [usernameInput, setUsernameInput] = useState('')
  const onFormSubmit = (e) => {
    e.preventDefault()
    dispatch(labyrinth.actions.setUsername(usernameInput))
    dispatch(gameProgress('start'));
    dispatch(labyrinth.actions.showGame());

    // post username to the API
  }
  // Added useSelector to get the gameStarted value from the Redux store.
  const gameStarted = useSelector((state) => state.labyrinth.gameStarted)

  if (gameStarted) {
    return (
      <GameRestartWrapper>
        <Game />
        <Restart />
      </GameRestartWrapper>
    )
  } else {
    return (
      <StartScreenWrapper>
        <WelcomeTextWrapper>
          <WelcomeText>Welcome! Let the annals of man know thy name</WelcomeText>
          <WelcomeIMG src={ScrollIMG} alt="background scroll" />
        </WelcomeTextWrapper>
        <NameForm
          type="submit"
          onSubmit={(event) => onFormSubmit(event)}>
          <NameInput
            id=""
            type="text"
            placeholder="Enter name"
            value={usernameInput}
            onChange={(event) => setUsernameInput(event.target.value)}
            required />
          <Btn type="submit">Enter</Btn>
        </NameForm>
      </StartScreenWrapper>
    )
  }
}

export default StartScreen;
