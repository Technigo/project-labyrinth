/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { MainContainer, GameWrapper } from 'Globalstyles';
import React, { useState } from 'react';
import { useDispatch /* useSelector */ } from 'react-redux';
import { labyrinth /* setUserName /* selectInfoPlayer */ } from 'reducers/labyrinth';
// import Username from 'components/Username';

export const WelcomePage = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  // const infoPlayer = useSelector(selectInfoPlayer)

  const startTheGame = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setUserName(input))
  }
  /* const addUserName = () => {
    console.log(`Adding ${input}`) */

  /* dispatch(setUserName({
      userName: input
    }))
   } */

  return (
    <MainContainer>
      <GameWrapper>
        <h1>Hello, lets play a game</h1>
        <form onSubmit={startTheGame}>
          <label htmlFor="usernameInput">Please enter your name</label>
          <input
            id="usernameInput"
            type="text"
            placeholder="username"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            required />
          <button type="submit" onClick={startTheGame}>Start</button>
        </form>
        {/* {
          infoPlayer.map((item) => (
            <Username
              name={item.userName} />
          ))
        } */}
      </GameWrapper>
    </MainContainer>
  )
};
