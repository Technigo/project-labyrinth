import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { gameReducer } from '../reducers/gameReducer'

export const StartForm = () => {
  const [playerName, setPlayerName] = useState('')
  const playerInputId = 'playerId'
  const handlePlayerName = (event) => {
    setPlayerName(event.target.value)
  }
  const dispatch = useDispatch()
  const startGame = () => {
    const body = JSON.stringify({ username: playerName })
    fetch('https://wk16-backend.herokuapp.com/start', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body
    })
      .then((res) => res.json())
      .then((json) => {
        console.log('fetch', json)
        dispatch(gameReducer.actions.gameBegin(json))
      })
  }
  return (
    <div>
      <label
        htmlFor={playerInputId}>
        Type your name
        <input
          id={playerInputId}
          type="text"
          value={playerName}
          onChange={(event) => handlePlayerName(event)} />
      </label>
      <button
        type="button"
        disabled={playerName.length < 1}
        onClick={() => startGame()}>
          Start Game
      </button>
    </div>
  );
}