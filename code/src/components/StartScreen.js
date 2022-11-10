/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import game, { gameProgress } from 'reducers/game';
import { v4 as uuidv4 } from 'uuid';
import Stats from './Stats';

import {
  BoxContainer,
  CharacterContainer,
  InnerWrapper,
  OuterWrapper
} from './styled/containers';
import { TextAnimation } from './styled/TextAnimation';

const StartScreen = () => {
  const [usernameInputValue, setUsernameInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUsername(`${uuidv4()}/${usernameInputValue}`));
    dispatch(gameProgress('start'));
    dispatch(game.actions.showGame());
  };

  return (
    <OuterWrapper
      style={{
        backgroundImage: 'url(/assets/maze.png)'
      }}
    >
      <h1>MAZE</h1>

      <InnerWrapper>
        <TextAnimation> Welcome to the MAZE</TextAnimation>
        <BoxContainer>
          <CharacterContainer>
            <img src="/assets/avatar.png" alt="avatar" />
            <h2> Enter your character name:</h2>
            <form onSubmit={(event) => onFormSubmit(event)}>
              <input
                name="username"
                type="text"
                placeholder="Enter name..."
                value={usernameInputValue}
                onChange={(event) => setUsernameInputValue(event.target.value)}
                required
              />
              <button type="submit"> Start Game</button>
            </form>
          </CharacterContainer>
          <CharacterContainer>
            <h3>Skills </h3>
            <Stats className="is-primary" title="Wisdom" value="80" />
            <Stats className="is-success" title="Speed" value="40" />
            <Stats title="Focus" value="60" />
          </CharacterContainer>
        </BoxContainer>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export default StartScreen;
