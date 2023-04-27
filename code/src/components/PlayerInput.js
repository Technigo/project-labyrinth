import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import games, { createPlayer } from 'reducers/games';
import Header from './Header';
import { StyledHeroPlayerInputContainer, SecondHeading, SecondHeadingLabel, StyledInput, UserNameForm } from './PlayerInputStyling';
import { StartButton } from './GlobalStyling';

const PlayerInput = () => {
  const [PlayerInputValue, setPlayerInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(games.actions.setUserName(PlayerInputValue));
    dispatch(createPlayer());
  }

  return (
    <StyledHeroPlayerInputContainer>
      <Header />
      <SecondHeading>Do you want to play a game?</SecondHeading>
      <UserNameForm onSubmit={(event) => onFormSubmit(event)}>
        <SecondHeadingLabel htmlFor="player-input">
      Enter player name:
          <StyledInput id="player-input" required type="text" placeholder="Name" onChange={(event) => setPlayerInputValue(event.target.value)} />
        </SecondHeadingLabel>
        <StartButton type="submit">Start</StartButton>
      </UserNameForm>
    </StyledHeroPlayerInputContainer>
  )
}

export default PlayerInput;