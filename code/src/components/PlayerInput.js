import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import games, { createPlayer } from 'reducers/games';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import { OuterWrapper, StyledHeroPlayerInputContainer, SecondHeading, SecondHeadingLabel, StyledInput, UserNameForm } from './PlayerInputStyling';
import { StartButton, StyledIcon } from './GlobalStyling';
import { MazeAnimation } from './MazeAnimation';

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