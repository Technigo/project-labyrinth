/* eslint-disable max-len */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import games, { createPlayer } from 'reducers/games';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import { OuterWrapper, StyledHeroPlayerInputContainer, SecondHeading, SecondHeadingLabel, StyledInput, UserNameForm } from './PlayerInputStyling';
import { StartButton, StyledIcon } from './GlobalStyling';
import { MazeAnimation } from './MazeAnimation';

// PlayerInput is a React component that renders a form for the user to input their player name and start the game. It uses useState to store the user
// input and useDispatch to dispatch actions to the game state. The onFormSubmit function dispatches the setUserName and createPlayer actions.
// The component renders a header, a label, an input field, a start button, and a maze animation. onSubmit is attached to the form, calling onFormSubmit.
// PlayerInput is exported as the default.

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
      <OuterWrapper>
        <Header />
        <SecondHeading>Do You Want to Play a Game?</SecondHeading>
        <UserNameForm onSubmit={(event) => onFormSubmit(event)}>
          <SecondHeadingLabel htmlFor="player-input">
           Enter player name:
            <StyledInput id="player-input" required type="text" placeholder="Name" onChange={(event) => setPlayerInputValue(event.target.value)} />
          </SecondHeadingLabel>
          <StartButton type="submit">Start
            <StyledIcon icon={faPlay} />
          </StartButton>
        </UserNameForm>
        <MazeAnimation />
      </OuterWrapper>
    </StyledHeroPlayerInputContainer>
  )
}

export default PlayerInput;