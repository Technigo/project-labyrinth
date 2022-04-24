import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styled from 'styled-components';

import games, { generateGame } from '../reducers/games';

const StartButton = styled.button`
  background-color: green;
  border: none;
  color: lightgreen;
  border-radius: 50px;
  font-size: 20px;
  margin-top: 20px;
  padding: 10px;
`
const InputField = styled.input`
  border-color: lightgreen;
  &:focus {
    outline: 2px solid green;
  }
`

const StartScreen = () => {
    const [inputValue, setInputValue] = useState(''); 

    const dispatch = useDispatch();

    const onUserSet = () => {
        dispatch(games.actions.setUsername(inputValue));
        dispatch(generateGame());
    }

  return (
      <div>
          <h1>The Labyrith game</h1>
          <div style={{marginBottom: '10px'}}>
          <InputField
          type="text"
          value={inputValue}
          placeholder="Type in username"
          onChange={e => setInputValue(e.target.value)}
          />
          </div>
          <div>
          {inputValue !== '' 
            ? <StartButton onClick={onUserSet}>Start Game</StartButton>
            : <StartButton disabled onClick={onUserSet}>Start Game</StartButton>
          }
          </div>
    </div>  
  )
};

export default StartScreen;