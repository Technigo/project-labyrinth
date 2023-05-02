// Import necessary libraries
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { game, generateGame } from 'reducers/game';
import styled from 'styled-components/macro';

// Styled components
const StartContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const FormContainer = styled.form`
 display: flex;
 justify-content: center;
 flex-direction: column;
 align-items: center;
`;

const InputBox = styled.input`
 width: 220px;
 padding: 10px 20px;
 opacity: 50%;
 font-family: 'Kanit', sans-serif;
 font-size: 16px;
 letter-spacing: 4px;
 border-radius: 4px;
 border: none;
 background: #fff;
`;

const LabelName = styled.label`
color: #F6D579;
`;

const StartBtn = styled.button`
background: var(--btn-color);
border-radius: 20px;
padding: 10px 20px;
margin-top: 18px;
border: none;
font-family: 'Kanit', sans-serif;
font-weight: 900;
letter-spacing: 4px;
text-transform: uppercase;
color: var(--hover-color);
&:hover {
  background: var(--hoverStart-color);
  color: var(--text-color);
  cursor: pointer;
} 
`;

// Define the UserNameInput component
const UserNameInput = () => {
  // Define the state for the user input value
  const [UsernameInputValue, setUsernameInputValue] = useState('');

  // Get the dispatch function from Redux
  const dispatch = useDispatch();
  // Define the function to be called when the form is submitted
  const onFormSubmit = (event) => {
    event.preventDefault();
    dispatch(game.actions.setUsername(UsernameInputValue));
    // The generateGame action generates a new game board.
    dispatch(generateGame());
    // The setUsername action sets the username in the game state.
    setUsernameInputValue('');
  };

  return (
    <StartContainer>

      <FormContainer onSubmit={onFormSubmit}>

        <LabelName htmlFor="user-name-input">
          <InputBox
            id="user-name-input"
            placeholder="Enter your name..."
            onChange={(event) => setUsernameInputValue(event.target.value)}
            value={UsernameInputValue}
            minLength={3} />
        </LabelName>
        <StartBtn type="submit">Start game</StartBtn>
      </FormContainer>
    </StartContainer>
  )
}

export default UserNameInput;