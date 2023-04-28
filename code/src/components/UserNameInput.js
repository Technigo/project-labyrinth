import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { game, generateGame } from 'reducers/game';
import styled from 'styled-components/macro';

const InputWrapper = styled.div`
display: flex;
justify-content: center;
`;

const LabelName = styled.label`
color: white;
`;

const UserNameInput = () => {
  const [UsernameInputValue, setUsernameInputValue] = useState('');

  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUsername(UsernameInputValue));
    dispatch(generateGame());
    setUsernameInputValue('');
  };

  return (
    <div>
      <InputWrapper>
        <form onSubmit={onFormSubmit}>
          <LabelName htmlFor="user-name-input">
        Enter name
            <input
              id="user-name-input"
              onChange={(event) => setUsernameInputValue(event.target.value)}
              value={UsernameInputValue} />
          </LabelName>
          <button type="submit">Start game</button>
        </form>
      </InputWrapper>
    </div>
  )
}

export default UserNameInput;