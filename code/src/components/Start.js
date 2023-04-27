import React, { useState } from 'react';
// useState is used to keep the state of the player while playing the game
import { useDispatch } from 'react-redux';
// useDispatch is used in the reducer for the game to set the progress in the game for the player
import labyrinth, { labyrinthProgress } from 'reducers/labyrinth';
// this is the reducer-component used in the game
// eslint-disable-next-line no-unused-vars
import { v4 as uuidv4, v5 as uuidv5 } from 'uuid'; // - disabled this line due to uuidv5 not used for now
// this is a package installed for creating Unique User IDs for use in the game
// more info here: https://www.gregorypacheco.com.br/posts/generate-uuid-react.html
// import { StrengthsBar } from './StrengthsBar';

import {
  BoxContainer,
  PlayerContainer,
  InnerWrapper
} from './styles/Container';
import { TextAnimation } from './styles/TextAnimation';

export const Start = () => {
  const [usernameInputValue, setUsernameInputValue] = useState('');
  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setUserName(`${uuidv4()}/${usernameInputValue}`));
    dispatch(labyrinthProgress('start'));
    dispatch(labyrinth.actions.showGame());
  };

  return (
    <>
      <TextAnimation>
        <h1> Let&apos;s start the labyrinth</h1>
      </TextAnimation>
      <InnerWrapper>
        <BoxContainer>
          <PlayerContainer>
            <h2> Enter your player name:</h2>
            <form onSubmit={(event) => onFormSubmit(event)}>
              <input
                name="username"
                type="text"
                placeholder="Enter your name..."
                value={usernameInputValue}
                onChange={(event) => setUsernameInputValue(event.target.value)}
                required />
              <button className="nes-btn is-success" type="submit">
                {' '}
              Start the Labyrinth
              </button>
            </form>
          </PlayerContainer>
        </BoxContainer>
      </InnerWrapper>
    </>
  )
}
