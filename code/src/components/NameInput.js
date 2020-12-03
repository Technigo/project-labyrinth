import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

// Components
import { MainButton } from '../styling/GlobalStyles';

// Reducer
import { labyrinth } from 'reducers/labyrinth';

// ----------------------------------------------------------------

export const NameInput = ({ setStartButtonVisible, setNameInputVisible }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const handleNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmitName = (event) => {
    event.preventDefault();
    if (username.length === 0) {
      alert('Please enter your name first');
    } else {
      dispatch(labyrinth.actions.setUsername(username));
      localStorage.setItem('username', username);
      setStartButtonVisible(true);
      setNameInputVisible(false);
    }
  };

  return (
    <FormWrapper>
      <LabelWrapper>
        Please enter your name
        <Input
          type="text"
          value={username}
          onChange={(event) => handleNameChange(event)}
        />
      </LabelWrapper>
      <MainButton type="submit" onClick={(event) => handleSubmitName(event)}>
        OK!
      </MainButton>
    </FormWrapper>
  );
};

// ----------------------------------------------------------------

const FormWrapper = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const LabelWrapper = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
`;

const Input = styled.input`
  line-height: 1.5;
  margin: 30px 0;
  width: 40vw;
  border: none;
  background: none;
  border-bottom: 2px solid #fff;
  font-family: 'Montserrat';
  font-weight: 800;
  color: #fff;
`;
