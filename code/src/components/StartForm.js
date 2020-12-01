import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { gameReducer } from '../reducers/gameReducer'

export const StartForm = () => {
  const playerName = useSelector((store) => store.gameReducer.playerName)
  const playerInputId = 'playerId'

  const dispatch = useDispatch()

  const handlePlayerName = (event) => {
    dispatch(gameReducer.actions.addPlayerName(event.target.value))
  }

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