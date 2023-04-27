import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import games, { createPlayer } from 'reducers/games';
import Header from './Header';
import { SecondHeading, SecondHeadingLabel, StyledInput, UserNameForm } from './PlayerInputStyling';

const PlayerInput = () => {
  const [PlayerInputValue, setPlayerInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(games.actions.setUserName(PlayerInputValue));
    dispatch(createPlayer());
  }

  return (
    <>
      <Header />
      <SecondHeading>Do you want to play a game?</SecondHeading>
      <UserNameForm onSubmit={(event) => onFormSubmit(event)}>
        <SecondHeadingLabel htmlFor="player-input">
      Enter player name:
          <StyledInput id="player-input" required type="text" onChange={(event) => setPlayerInputValue(event.target.value)} />
        </SecondHeadingLabel>
        <button type="submit">Start Game</button>
      </UserNameForm>
    </>
  )
}

export default PlayerInput;