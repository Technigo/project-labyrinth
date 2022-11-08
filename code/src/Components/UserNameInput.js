import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import game, { generateDescription } from 'reducers/game';
import styled from 'styled-components';

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
    <UserNameInputContainer onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="user-input">
      Provide user name, please:
        <input id="user-input" type="text" onChange={(event) => setUserNameInputValue(event.target.value)} />
      </label>
      <button type="submit">Start game</button>
    </UserNameInputContainer>)
}

export default UserNameInput;

const UserNameInputContainer = styled.form`
border: solid 2px blue;
`