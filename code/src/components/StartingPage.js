import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import game, { generateLabyrinth } from 'reducer/game';
import { DuckContainer } from 'styled-components/GlobalStyles';
import { DucklingHeader } from './DucklingHeader';

export const StartingPage = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch();

  const onUsernameInputValue = () => {
    dispatch(game.actions.setUserName(inputValue));
    dispatch(generateLabyrinth());
  }

  return (
    <section>
      <div>
        <DuckContainer>
          <DucklingHeader />
        </DuckContainer>

        <h1>The Lost Duck</h1>
        <h2>Please help me find my way out of this labyrinth</h2>
        <h3>What&apos;s your name, my saviour?</h3>
        <input
          type="text"
          value={inputValue}
          placeholder="Type you name.."
          onChange={(event) => setInputValue(event.target.value)} />
        <button
          type="submit"
          onClick={onUsernameInputValue}>
            Let&apos;s go
        </button>
      </div>
    </section>
  )
};