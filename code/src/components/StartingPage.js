import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import game, { generateLabyrinth } from 'reducer/game';
import { DuckContainer, Button } from 'styled-components/GlobalStyles';
import styled from 'styled-components';
import { DucklingHeader } from './DucklingHeader';

export const StartingPage = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch();

  const onUsernameInputValue = () => {
    // When the user puts in name we dispatch it to store it in the store
    dispatch(game.actions.setUserName(inputValue));
    // and we do the firstfetch from the API to create the labyrinth
    dispatch(generateLabyrinth());
  }

  return (
    <OpeningWrapper>

      <DuckContainer>
        <DucklingHeader />
      </DuckContainer>

      <h1>The Lost Duck</h1>
      <h3>Please help me find my way out of this labyrinth.</h3>
      <p>What&apos;s your name, my saviour?</p>
      <input
        type="text"
        value={inputValue}
        placeholder="Type your name..."
        onChange={(event) => setInputValue(event.target.value)} />
      <Button
        type="submit"
        onClick={onUsernameInputValue}>
            Let&apos;s go
      </Button>
    </OpeningWrapper>
  )
};

const OpeningWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: 10px;
text-align: center;
`