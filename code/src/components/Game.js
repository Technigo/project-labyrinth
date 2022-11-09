import React, { useState } from 'react';
import { useDispatch } from 'react-redux'

import { game, generateLabyrinth } from 'reducer/game';
// import { DuckContainer } from 'styled-components/GlobalStyles';
// import { DucklingHeader } from './DucklingHeader';

export const StartGame = () => {
  const [username, setUsername] = useState('')
  const dispatch = useDispatch();

  const onUsernameInput = () => {
    dispatch(game.actions.setUserName(username));
    dispatch(generateLabyrinth());
  }

  return (
    <section>
      <div>
        <DuckContainer>
          <DucklingHeader />
        </DuckContainer>

        <h1>Hi</h1>
        <h2>welcome</h2>
        <p>who are you?</p>
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)} />
        <button
          type="submit"
          onClick={onUsernameInput}>
            Start
        </button>
      </div>
    </section>
  )
};

/* import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import game, { fetchGame } from 'reducers/game';

const Game = () => {
  const [userNameInputValue, setUserNameInputValue] = useState('');
  const dispatch = useDispatch();
  const username = useSelector((store) => store.game.username);

  const onFormSubmit = (event) => {
    event.preventDefault();

    dispatch(game.actions.setName(userNameInputValue))
    dispatch(fetchGame());
  }

const Game = () => {
  const isLoading = useSelector((store) => store.ui.isLoading)
  const [userName, setUserName] = useState('')
  const dispatch = useDispatch()

  const onInputUserName = (event) => {
    event.preventDefault()
    setUserName(event.target.value)
  }

  const onChangeUserName = () => {
    dispatch(game.actions.setName(userName))
    setUserName('')
    dispatch(fetchGame())
  }

  return (
    <form onSubmit={(event) => onFormSubmit(event)}>
      <label htmlFor="author-input">
      Provide author name, please:
        <input id="author-input" type="text" onChange={(event) => setUserNameInputValue(event.input.value)} />
      </label>
      <button type="submit">search for quotes</button>
    </form>)
}

export default Game; */
