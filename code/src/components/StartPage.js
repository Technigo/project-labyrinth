import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { game, startGame } from 'reducers/game'
import styled from 'styled-components'

export const StartPage = () => {
  const dispatch = useDispatch()
  const username = useSelector(store => store.game.username)

  const [input, setInput] = useState('')

  const onStartGame = () => {
    dispatch(startGame(input))
  }

  return (
    <div>
      <h1>What's your name?</h1>
      <input type='text' value={input} onChange={e => setInput(e.target.value)} />
      <button disabled={input === ''} onClick={onStartGame}>
        Start game!
      </button>
    </div>
  )
}
