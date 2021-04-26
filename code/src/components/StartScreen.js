import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components';

import game, { startGame } from '../reducers/game'

const StartScreen = () => {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')

  const onGameStart = () => {
    dispatch(game.actions.setUserName(value))
    dispatch(startGame())
  }
  return (
    <div>
      <p>Welcome User! Type your name!</p>
      <input type="text" value={value} onChange={(event) => setValue(event.target.value)} />
      <button onClick={onGameStart}>Start game!</button>
    </div>

  )
}
export default StartScreen
