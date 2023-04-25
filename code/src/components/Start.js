import React, { useState } from 'react';
// useState is used to keep the state of the player while playing the game
import { useDispatch } from 'react-redux';
// useDispatch is used in the reducer for the game to set the progress in the game for the player
import labyrinth, { labyrinthProgress } from 'reducers/labyrinth';
// this is the reducer-component used in the game
import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';
// this is a package installed for creating Unique User IDs for use in the game
// more info here: https://www.gregorypacheco.com.br/posts/generate-uuid-react.html

// more imports will follow below as the building of the game goes over the week
import {
  BoxContainer,
  InnerWrapper
} from './styles/Container';

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
      <h1> Let's take the a-MAZE-ing walk</h1>
      <InnerWrapper>
        <BoxContainer>
          <h2> Enter your character name:</h2>
        </BoxContainer>
      </InnerWrapper>
    </>
  )
}
