import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import game, { generateDescription } from 'reducers/game';
import styled from 'styled-components';

// @TODO generate random unique username to always make game work?

const UserNameInput = () => {
  const [userNameInputValue, setUserNameInputValue] = useState('');
  const dispatch = useDispatch();
  // const author = useSelector((store) => store.quotes.author);
  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(game.actions.setUser(userNameInputValue)); // klar
    dispatch(generateDescription());
  }

  return (
    <Container>
      <h1>The Maze game</h1>
      <UserNameInputContainer onSubmit={(event) => onFormSubmit(event)}>
        <label htmlFor="user-input">
          Provide user name, please:
          <input id="user-input" type="text" onChange={(event) => setUserNameInputValue(event.target.value)} />
        </label>
        <StartButton type="submit">Start game</StartButton>
      </UserNameInputContainer>
    </Container>)
}

export default UserNameInput;

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`

const UserNameInputContainer = styled.form`
border: solid 2px blue;
display: flex;
flex-direction: column;
justify-content: center;

`

const StartButton = styled.button`
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border: 2px solid palevioletred;
border-radius: 3px;
// width: 30px;
`
