import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

//import styled from 'styled-components';

import games, { generateGame } from '../reducers/games';

const StartScreen = () => {
    const [inputValue, setInputValue] = useState(''); //Property + handler to update property

    const dispatch = useDispatch();

    const onUserSet = () => {
        dispatch(games.actions.setUsername(inputValue));
        dispatch(generateGame());
    }

  return (
      <div>
          <p>The Labyrith game</p>
          <div style={{marginBottom: '10px'}}>
          <input
          type="text"
          value={inputValue}
          placeholder="Type in username"
          onChange={e => setInputValue(e.target.value)}
          />
          </div>
          <div>
          {inputValue !== '' 
            ? <button onClick={onUserSet}>Start Game</button>
            : <button disabled onClick={onUserSet}>Start Game</button>
          }
          </div>
    </div>  
  )
};

export default StartScreen;