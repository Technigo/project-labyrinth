/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { GameWrapper } from 'components/Styles/Globalstyles';
import { StartBtn } from 'components/Styles/GameScreen.Styles'
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startTheGame, labyrinth } from 'reducers/labyrinth';

export const WelcomePage = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const letsStart = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setUserName(input))
    dispatch(startTheGame())
  }

  return (
    <GameWrapper>
      <h1>Can you find your way out of the cavern?</h1>
      <form onSubmit={letsStart}>
        <label htmlFor="usernameInput">Write your name on the wall and lets go</label>
        <input
          id="usernameInput"
          required
          type="text"
          placeholder="username"
          value={input}
          onChange={(event) => setInput(event.target.value)} />
        <StartBtn type="submit" onClick={letsStart}>Go in</StartBtn>
      </form>
      <lottie-player
        src="https://lottie.host/eb014269-5e29-41a8-b6d3-25526566bbcd/0mKM97lCJc.json"
        speed="2"
        background="transparent"
        loop
        autoplay
        style={{ width: '300px',
          height: '300px',
          margin: '0px' }} />
    </GameWrapper>
  )
};
