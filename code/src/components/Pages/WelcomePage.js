/* eslint-disable linebreak-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { GameWrapper } from 'components/Styles/Globalstyles';
import { StartBtn } from 'components/Styles/GameScreen.Styles'
import React, { useState } from 'react';
import { useDispatch /* useSelector */ } from 'react-redux';
import { startTheGame, labyrinth } from 'reducers/labyrinth';
import Lottie from 'react-lottie';
import animationData from '../../lotties/79913-walk-man.json';

export const WelcomePage = () => {
  const dispatch = useDispatch()
  const [input, setInput] = useState('')

  const letsStart = (event) => {
    event.preventDefault();
    dispatch(labyrinth.actions.setUserName(input))
    dispatch(startTheGame())
  }
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  return (
    <GameWrapper>
      <h1>Can you find your way out of the cavern?</h1>
      <form onSubmit={letsStart}>
        <label htmlFor="usernameInput">Write your name on the wall and lets go</label>
        <input
          id="usernameInput"
          type="text"
          placeholder="username"
          value={input}
          onChange={(event) => setInput(event.target.value)}
          required />
        <StartBtn type="submit" onClick={letsStart}>Go in</StartBtn>
      </form>
      <Lottie
        id="Lottie"
        options={defaultOptions}
        height={200}
        width={200}
        style={{ margin: '0px' }} />
    </GameWrapper>
  )
};
