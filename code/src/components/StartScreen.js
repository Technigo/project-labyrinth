import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import game, { startGame } from '../reducers/game'
import { Button } from './Button'

const StartScreen = () => {
  const [inputValue, setInputValue] = useState('')
  const dispatch = useDispatch()

  const onUsernameInputValue = () => {
    dispatch(game.actions.setUserName(inputValue))
    dispatch(startGame())
  }
  return (
    <>
      <h1> Hello hey! </h1>
      <input
        type="text"
        value={inputValue}
        placeholder="Type your name here"
        onChange={(event) => setInputValue(event.target.value)} />
      <Button
        type="submit"
        onClick={onUsernameInputValue}>
        Let&apos;s go!
      </Button>
    </>
  )
}

export default StartScreen