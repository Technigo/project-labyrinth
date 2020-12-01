import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

// Components
import { labyrinth } from 'reducers/labyrinth';

// ----------------------------------------------------------------

export const NameInput = ({ setStartButtonVisible }) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');

  const handleNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmitName = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setUsername(username));
    setStartButtonVisible(true);
  };

  return (
    <FormWrapper>
      <LabelWrapper>
        What is your name?
        <input
          type="text"
          value={username}
          onChange={(event) => handleNameChange(event)}
        />
      </LabelWrapper>
      <button type="submit" onClick={(event) => handleSubmitName(event)}>
        OK!
      </button>
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
`;
